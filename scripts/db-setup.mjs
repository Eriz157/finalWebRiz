// Membuat tabel dan mengisi data demo.  Pakai:  npm run db:setup  (tambah --reset untuk menghapus semua data)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pg from 'pg';
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
for (const f of ['.env.local', '.env']) {
  const p = path.join(root, f);
  if (fs.existsSync(p)) for (const l of fs.readFileSync(p, 'utf8').split('\n')) {
    const m = l.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
const url = process.env.DATABASE_URL;
if (!url) { console.error('DATABASE_URL belum diatur. Salin .env.example menjadi .env.local lalu isi.'); process.exit(1); }
const reset = process.argv.includes('--reset');
const pool = new pg.Pool({ connectionString: url });
const q = (t, p) => pool.query(t, p);
const uuid = () => crypto.randomUUID();
const day = (n) => { const d = new Date(Date.now() + n * 864e5); return d.toISOString().slice(0, 10); };
const ago = (n) => new Date(Date.now() - n * 864e5);

try {
  if (reset) {
    await q('DROP TABLE IF EXISTS submissions, comments, favorites, likes, challenges, artworks, users CASCADE');
    console.log('Semua tabel dihapus.');
  }
  await q(fs.readFileSync(path.join(root, 'db/schema.sql'), 'utf8'));
  console.log('Skema siap.');
  const { rows: [{ n }] } = await q('SELECT count(*)::int n FROM users');
  if (n > 0) { console.log('Data sudah ada, seed dilewati (pakai --reset untuk mengulang).'); process.exit(0); }

  const hash = (p) => bcrypt.hashSync(p, 10);
  const U = {};
  const users = [
    ['admin', 'Admin Archive', 'admin@archive.id', 'admin123', 'admin', null, 120, 'Penjaga integritas arsip: mengelola akun, karya, dan challenge.'],
    ['dimas', 'Dimas Kurator', 'kurator@archive.id', 'kurator123', 'curator', null, 90, 'Kurator independen. Fokus pada seni digital, cahaya, dan perspektif.'],
    ['rina', 'Rina Maharani', 'member@archive.id', 'member123', 'member', null, 70, 'Ilustrator lanskap dan potret. Suka warna hangat dan cahaya sore.'],
    ['bima', 'Bima Saputra', 'bima@archive.id', 'member123', 'member', null, 64, 'Bereksperimen dengan optik: agamograph dan anamorfosis.'],
    ['rizky', 'Rizky Pratama', 'rizky@archive.id', 'member123', 'member', null, 58, 'Pelukis klasik yang sering kembali ke senja.'],
    ['sari', 'Sari Wulandari', 'sari@archive.id', 'member123', 'member', null, 40, 'Bermain dengan bayangan, jarak, dan sudut pandang.'],
    ['pub', 'Andi Pengunjung', 'publik@archive.id', 'publik123', 'public', null, 30, 'Penikmat seni yang gemar berkeliling galeri.'],
    ['nadia', 'Nadia Putri', 'nadia@archive.id', 'publik123', 'public', 'pending', 3, 'Penggiat komunitas seni kampus.'],
  ];
  for (const [k, name, email, pw, role, cs, off, bio] of users) {
    U[k] = uuid();
    await q('INSERT INTO users (id,name,email,password_hash,role,curator_status,bio,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
      [U[k], name, email, hash(pw), role, cs, bio, ago(off)]);
  }
  await q("UPDATE users SET instagram='https://instagram.com/rina.maharani', behance='https://behance.net/rinamaharani' WHERE id=$1", [U.rina]);
  await q("UPDATE users SET instagram='https://instagram.com/dimas.kurator' WHERE id=$1", [U.dimas]);

  const meta = JSON.parse(fs.readFileSync(path.join(root, 'db/seed-images/meta.json'), 'utf8'));
  const own = { 'c01-senja': 'rizky', 'c02-fajar': 'rina', 'c03-cincin': 'rina', 'c04-danau': 'bima', 'c05-garis': 'bima', 'c06-bayangan': 'sari', 'c07-bukit': 'rizky' };
  const paint = { 'c02-fajar': 'Rina Maharani', 'c03-cincin': 'Rina Maharani', 'c04-danau': 'Bima Saputra', 'c05-garis': 'Bima Saputra', 'c06-bayangan': 'Sari Wulandari', 'c07-bukit': 'Rizky Pratama' };
  const A = {};
  let i = 0;
  for (const m of meta) {
    A[m.id] = uuid();
    await q('INSERT INTO artworks (id,owner_id,title,painter,synopsis,category,studio_url,image,image_mime,is_example,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,true,$10)',
      [A[m.id], U[own[m.id]], m.title, paint[m.id] || m.painter, m.synopsis, m.category, m.studioUrl, fs.readFileSync(path.join(root, 'db/seed-images', m.file)), m.mime, new Date(Date.now() - (30 - i++) * 864e5)]);
  }
  const likes = { 'c01-senja': ['rina', 'bima', 'sari', 'pub', 'dimas'], 'c02-fajar': ['rizky', 'bima', 'pub'], 'c03-cincin': ['rizky', 'rina', 'bima', 'sari', 'pub', 'dimas'], 'c04-danau': ['rina'], 'c05-garis': ['sari', 'pub'], 'c06-bayangan': ['rizky', 'rina', 'pub'], 'c07-bukit': ['bima'] };
  for (const [a, us] of Object.entries(likes)) for (const u of us) await q('INSERT INTO likes (artwork_id,user_id) VALUES ($1,$2)', [A[a], U[u]]);
  for (const [a, u] of [['c03-cincin', 'pub'], ['c01-senja', 'pub'], ['c05-garis', 'rina']]) await q('INSERT INTO favorites (artwork_id,user_id) VALUES ($1,$2)', [A[a], U[u]]);
  const cms = [['c01-senja', 'dimas', 'Warna senjanya hangat sekali. Gradasi langitnya terasa jujur.', 6], ['c03-cincin', 'pub', 'Dari depan cincinnya benar-benar utuh. Keren!', 3], ['c03-cincin', 'bima', 'Pemisahan lapisannya rapi. Boleh tahu jarak lampunya?', 2], ['c06-bayangan', 'rina', 'Bayangannya panjang dan dramatis.', 1]];
  for (const [a, u, b, off] of cms) await q('INSERT INTO comments (artwork_id,user_id,body,created_at) VALUES ($1,$2,$3,$4)', [A[a], U[u], b, ago(off)]);

  const C = {};
  const chs = [
    ['cahaya', 'Cahaya di Ujung Hari', 'Tangkap momen ketika cahaya berubah: senja, fajar, atau lampu pertama yang menyala. Kami mencari karya yang membuat penonton ikut menahan napas.\n\nBoleh bergaya klasik maupun optik.', 'Satu karya per member.\nKarya orisinal, belum pernah menang di kompetisi lain.\nCantumkan sinopsis singkat tentang sumber cahayanya.', 'Rp 2.000.000 + pajangan utama selama sebulan', -7, 21, null],
    ['ilusi', 'Ilusi Sudut Pandang', 'Karya yang baru utuh dari satu titik pandang: anamorfosis bayangan, anamorfosis warna, atau agamograph. Tunjukkan bagaimana jarak mengubah makna.', 'Kategori Agamograph, Anamorphic Shadow, atau Anamorphic Color.\nLengkapi Studio View bila tersedia.', 'Voucher alat gambar Rp 1.500.000', -3, 9, null],
    ['lanskap', 'Lanskap Nusantara', 'Pegunungan, danau, bukit, dan langit Nusantara dalam sapuan kuasmu. Challenge ini sudah selesai dan pemenangnya telah diumumkan.', 'Tema bebas selama lanskap Indonesia.', 'Piagam kurator + e-book koleksi seni', -60, -10, ago(9)],
    ['warna', 'Warna Tanpa Batas', 'Open call berikutnya: eksplorasi palet berani. Pendaftaran dibuka sebentar lagi, siapkan karyamu.', 'Detail aturan akan diumumkan saat challenge dimulai.', 'Akan diumumkan', 6, 36, null],
  ];
  for (const [k, t, d, r, p, s, e, ann] of chs) {
    C[k] = uuid();
    await q('INSERT INTO challenges (id,owner_id,title,description,rules,prize,start_date,end_date,announced_at,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [C[k], U.dimas, t, d, r, p, day(s), day(e), ann, ago(Math.max(1, -s + 1))]);
  }
  const subs = [['cahaya', 'c01-senja', 'rizky', null, '', null], ['ilusi', 'c03-cincin', 'rina', null, '', null], ['ilusi', 'c05-garis', 'bima', null, '', null], ['ilusi', 'c06-bayangan', 'sari', null, '', null],
    ['lanskap', 'c04-danau', 'bima', 92, 'Nuansa malamnya tenang dan dalam.', 1], ['lanskap', 'c07-bukit', 'rizky', 86, 'Lapisan bukit terbaca jelas.', 2], ['lanskap', 'c02-fajar', 'rina', 81, 'Udara pagi terasa, warna bisa lebih berani.', 3]];
  for (const [c, a, u, sc, note, rk] of subs) await q('INSERT INTO submissions (challenge_id,artwork_id,user_id,score,note,rank) VALUES ($1,$2,$3,$4,$5,$6)', [C[c], A[a], U[u], sc, note, rk]);
  console.log('Seed selesai. Akun demo:');
  for (const u of users) console.log(`  ${u[4].padEnd(8)} ${u[2].padEnd(22)} ${u[3]}`);
} catch (e) { console.error(e); process.exitCode = 1; } finally { await pool.end(); }
