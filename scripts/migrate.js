// Membuat tabel. Gunakan --reset untuk menghapus semua data lalu membuat ulang.
const fs = require('fs'), path = require('path'), crypto = require('crypto'), { Client } = require('pg');
const EXT = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp' };
// Database lama menyimpan gambar karya di kolom "image" (bytea). Pindahkan ke folder uploads/artworks lalu hapus kolomnya.
async function moveImagesToFolder(c) {
  await c.query('ALTER TABLE artworks ADD COLUMN IF NOT EXISTS image_file varchar(80)');
  const legacy = await c.query("SELECT 1 FROM information_schema.columns WHERE table_schema='public' AND table_name='artworks' AND column_name='image'");
  let moved = 0;
  if (legacy.rowCount) {
    const dir = path.join(process.env.UPLOAD_DIR ? path.resolve(process.env.UPLOAD_DIR) : path.join(__dirname, '..', 'uploads'), 'artworks');
    fs.mkdirSync(dir, { recursive: true });
    const rows = (await c.query('SELECT id,image,image_mime FROM artworks WHERE image_file IS NULL')).rows;
    for (const r of rows) {
      const name = crypto.randomUUID() + (EXT[r.image_mime] || '.jpg');
      fs.writeFileSync(path.join(dir, name), r.image);
      await c.query('UPDATE artworks SET image_file=$2 WHERE id=$1', [r.id, name]);
      moved++;
    }
    await c.query('ALTER TABLE artworks DROP COLUMN image');
  }
  if (!(await c.query('SELECT 1 FROM artworks WHERE image_file IS NULL LIMIT 1')).rowCount) await c.query('ALTER TABLE artworks ALTER COLUMN image_file SET NOT NULL');
  return moved;
}
(async () => {
  const url = process.env.DATABASE_URL;
  if (!url) { console.error('DATABASE_URL belum diatur. Salin .env.example menjadi .env.'); process.exit(1); }
  const c = new Client({ connectionString: url });
  await c.connect();
  if (process.argv.includes('--reset')) {
    await c.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public;');
    console.log('Skema lama dihapus.');
  }
  const exists = await c.query("SELECT to_regclass('public.users') AS t");
  if (exists.rows[0].t) {
    await c.query(`ALTER TABLE users
      ADD COLUMN IF NOT EXISTS suspended_at timestamptz, ADD COLUMN IF NOT EXISTS suspended_until timestamptz,
      ADD COLUMN IF NOT EXISTS failed_logins smallint NOT NULL DEFAULT 0, ADD COLUMN IF NOT EXISTS locked_until timestamptz`);
    if (!(await c.query("SELECT to_regclass('public.account_requests') AS t")).rows[0].t) {
      const sql = fs.readFileSync(path.join(__dirname, '..', 'db', 'schema.sql'), 'utf8');
      await c.query(sql.slice(sql.indexOf('-- @account_requests')));
      console.log('Tabel account_requests ditambahkan.');
    }
    const moved = await moveImagesToFolder(c);
    if (moved) console.log(moved + ' gambar karya dipindahkan dari database ke folder uploads/artworks.');
    console.log('Tabel sudah ada: data tidak diubah. Jalankan npm run db:check untuk memastikan strukturnya cocok dengan db/schema.sql.');
    await c.end(); return;
  }
  await c.query(fs.readFileSync(path.join(__dirname, '..', 'db', 'schema.sql'), 'utf8'));
  console.log('Tabel berhasil dibuat.');
  await c.end();
})().catch(e => { console.error(e.message); process.exit(1); });
