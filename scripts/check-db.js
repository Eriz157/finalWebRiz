// Memeriksa apakah struktur database Anda sama dengan db/schema.sql, lalu menjalankan query yang dipakai halaman.
// Pemakaian: npm run db:check
const fs = require('fs'), path = require('path'), { Client } = require('pg');
const EXPECTED = {
 "account_requests": {
  "id": "integer",
  "user_id": "integer",
  "admin_id": "integer",
  "kind": "character varying",
  "new_name": "character varying",
  "new_email": "character varying",
  "status": "character varying",
  "revealed": "boolean",
  "created_at": "timestamp with time zone",
  "decided_at": "timestamp with time zone"
 },
 "artwork_requests": {
  "id": "integer",
  "artwork_id": "integer",
  "owner_id": "integer",
  "admin_id": "integer",
  "changes": "jsonb",
  "status": "character varying",
  "created_at": "timestamp with time zone",
  "decided_at": "timestamp with time zone"
 },
 "artworks": {
  "id": "integer",
  "owner_id": "integer",
  "title": "character varying",
  "painter": "character varying",
  "synopsis": "text",
  "description": "character varying",
  "category": "character varying",
  "studio_url": "text",
  "image_file": "character varying",
  "image_mime": "character varying",
  "is_example": "boolean",
  "created_at": "timestamp with time zone"
 },
 "categories": {
  "slug": "character varying",
  "label": "character varying",
  "color": "character varying"
 },
 "challenges": {
  "id": "integer",
  "owner_id": "integer",
  "title": "character varying",
  "description": "text",
  "rules": "text",
  "prize": "character varying",
  "start_date": "date",
  "end_date": "date",
  "attachment": "bytea",
  "attachment_name": "character varying",
  "attachment_mime": "character varying",
  "closed": "boolean",
  "announced_at": "timestamp with time zone",
  "created_at": "timestamp with time zone"
 },
 "comments": {
  "id": "integer",
  "artwork_id": "integer",
  "user_id": "integer",
  "body": "character varying",
  "created_at": "timestamp with time zone"
 },
 "favorites": {
  "user_id": "integer",
  "artwork_id": "integer",
  "created_at": "timestamp with time zone"
 },
 "likes": {
  "user_id": "integer",
  "artwork_id": "integer",
  "created_at": "timestamp with time zone"
 },
 "submissions": {
  "id": "integer",
  "challenge_id": "integer",
  "artwork_id": "integer",
  "user_id": "integer",
  "score_creativity": "smallint",
  "score_technique": "smallint",
  "score_originality": "smallint",
  "score_aesthetics": "smallint",
  "score": "numeric",
  "note": "character varying",
  "created_at": "timestamp with time zone"
 },
 "users": {
  "id": "integer",
  "name": "character varying",
  "email": "character varying",
  "password_hash": "text",
  "role": "character varying",
  "curator_status": "character varying",
  "bio": "character varying",
  "avatar": "text",
  "instagram": "text",
  "behance": "text",
  "website": "text",
  "created_at": "timestamp with time zone",
  "suspended_at": "timestamp with time zone",
  "suspended_until": "timestamp with time zone",
  "failed_logins": "smallint",
  "locked_until": "timestamp with time zone"
 },
 "winners": {
  "challenge_id": "integer",
  "rank": "smallint",
  "submission_id": "integer"
 }
};
(async () => {
  if (!process.env.DATABASE_URL) { console.error('DATABASE_URL belum diatur di file .env'); process.exit(1); }
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  try { await c.connect(); } catch (e) { console.error('Tidak bisa terhubung ke database: ' + e.message); process.exit(1); }
  let problems = 0; const bad = (m) => { problems++; console.log('  [MASALAH] ' + m); };
  console.log('1. Memeriksa tabel dan kolom...');
  const r = await c.query("SELECT table_name, column_name, data_type FROM information_schema.columns WHERE table_schema='public'");
  const have = {}; r.rows.forEach((x) => { (have[x.table_name] = have[x.table_name] || {})[x.column_name] = x.data_type; });
  for (const [t, cols] of Object.entries(EXPECTED)) {
    if (!have[t]) { bad('Tabel "' + t + '" tidak ada.'); continue; }
    for (const [col, type] of Object.entries(cols)) {
      if (!(col in have[t])) bad('Tabel "' + t + '" tidak punya kolom "' + col + '" (' + type + ').');
      else if (have[t][col] !== type) bad('Kolom "' + t + '.' + col + '" bertipe ' + have[t][col] + ', seharusnya ' + type + '.');
    }
  }
  console.log('2. Menjalankan query yang dipakai halaman...');
  const tests = {
    'daftar karya (Gallery, My Artwork)': "SELECT a.id,a.owner_id,a.title,a.painter,a.synopsis,a.description,a.category,a.studio_url,a.is_example,a.created_at,(SELECT count(*) FROM likes l WHERE l.artwork_id=a.id) AS likes,(SELECT count(*) FROM comments c WHERE c.artwork_id=a.id) AS comments,EXISTS(SELECT 1 FROM likes l WHERE l.artwork_id=a.id AND l.user_id=0) AS liked,EXISTS(SELECT 1 FROM favorites f WHERE f.artwork_id=a.id AND f.user_id=0) AS faved FROM artworks a WHERE a.owner_id=1 ORDER BY a.created_at,a.id",
    'jumlah submisi member': 'SELECT count(*) AS n FROM submissions WHERE user_id=1',
    'daftar challenge': "SELECT c.id,u.name,(SELECT count(*) FROM submissions s WHERE s.challenge_id=c.id) AS participants FROM challenges c JOIN users u ON u.id=c.owner_id",
    'gambar karya': 'SELECT image_file, image_mime FROM artworks LIMIT 1',
    'pengguna': 'SELECT * FROM users LIMIT 1',
  };
  for (const [name, sql] of Object.entries(tests)) {
    try { await c.query(sql); console.log('  ok: ' + name); } catch (e) { bad('Query "' + name + '" gagal: ' + e.message); }
  }
  console.log('3. Memeriksa berkas gambar karya di folder uploads/artworks...');
  const dir = path.join(process.env.UPLOAD_DIR ? path.resolve(process.env.UPLOAD_DIR) : path.join(__dirname, '..', 'uploads'), 'artworks');
  try {
    const files = (await c.query('SELECT id,title,image_file FROM artworks')).rows;
    const missing = files.filter((f) => !fs.existsSync(path.join(dir, f.image_file)));
    missing.forEach((f) => bad('Gambar karya #' + f.id + ' ("' + f.title + '") tidak ada: ' + path.join(dir, f.image_file)));
    if (!missing.length) console.log('  ok: ' + files.length + ' berkas gambar ditemukan');
  } catch (e) { bad('Pemeriksaan berkas gambar gagal: ' + e.message); }
  console.log(problems ? '\nDitemukan ' + problems + ' masalah. Perbaiki, lalu jalankan lagi.' : '\nSemua sesuai. Struktur database Anda cocok dengan aplikasi.');
  await c.end();
})();
