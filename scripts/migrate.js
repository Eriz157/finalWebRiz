// Membuat tabel. Gunakan --reset untuk menghapus semua data lalu membuat ulang.
const fs = require('fs'), path = require('path'), { Client } = require('pg');
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
  if (exists.rows[0].t) { console.log('Tabel sudah ada. Pakai `npm run db:reset` untuk membuat ulang.'); await c.end(); return; }
  await c.query(fs.readFileSync(path.join(__dirname, '..', 'db', 'schema.sql'), 'utf8'));
  console.log('Tabel berhasil dibuat.');
  await c.end();
})().catch(e => { console.error(e.message); process.exit(1); });
