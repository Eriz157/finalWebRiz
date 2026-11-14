// Membuat kategori awal dan satu akun admin tanpa data demo.
// Pemakaian: npm run db:admin -- email@anda.com "Sandi Anda" "Nama Admin"
const { Client } = require('pg'), bcrypt = require('bcryptjs');
(async () => {
  const [email, password, name = 'Admin'] = process.argv.slice(2);
  if (!process.env.DATABASE_URL) { console.error('DATABASE_URL belum diatur di file .env'); process.exit(1); }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !password || password.length < 6) {
    console.error('Pemakaian: npm run db:admin -- email@anda.com "SandiMin6Karakter" "Nama Admin"'); process.exit(1);
  }
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();
  try {
    for (const [slug, label, color] of [['agamograph', 'Agamograph', '#c8872e'], ['anamorphic-shadow', 'Anamorphic Shadow', '#4a5b94'], ['anamorphic-color', 'Anamorphic Color', '#c04a73'], ['classic', 'Classic', '#7a6648']])
      await c.query('INSERT INTO categories(slug,label,color) VALUES($1,$2,$3) ON CONFLICT (slug) DO NOTHING', [slug, label, color]);
    const hash = await bcrypt.hash(password, 10);
    const ex = await c.query('SELECT id FROM users WHERE lower(email)=lower($1)', [email]);
    if (ex.rows.length) {
      await c.query("UPDATE users SET role='admin', curator_status=NULL, password_hash=$2, name=$3 WHERE id=$1", [ex.rows[0].id, hash, name]);
      console.log('Akun yang sudah ada dijadikan admin: ' + email);
    } else {
      await c.query("INSERT INTO users(name,email,password_hash,role) VALUES($1,$2,$3,'admin')", [name, email, hash]);
      console.log('Admin dibuat: ' + email);
    }
    console.log('Kategori awal siap. Silakan login di /login.');
  } finally { await c.end(); }
})().catch((e) => { console.error('Gagal: ' + e.message); process.exit(1); });
