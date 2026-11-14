// Mengisi data demo: akun, kategori, 7 karya contoh, challenge, submisi, komentar.
const fs = require('fs'), path = require('path'), { Client } = require('pg'), bcrypt = require('bcryptjs');
const ROOT = path.join(__dirname, '..');
(async () => {
  const url = process.env.DATABASE_URL;
  if (!url) { console.error('DATABASE_URL belum diatur.'); process.exit(1); }
  const c = new Client({ connectionString: url });
  await c.connect();
  const n = await c.query('SELECT count(*)::int AS n FROM users');
  if (n.rows[0].n > 0) { console.log('Database sudah berisi data. Pakai `npm run db:reset` untuk mengulang dari awal.'); await c.end(); return; }
  await c.query('BEGIN');
  try {
    for (const [slug, label, color] of [['agamograph','Agamograph','#c8872e'],['anamorphic-shadow','Anamorphic Shadow','#4a5b94'],['anamorphic-color','Anamorphic Color','#c04a73'],['classic','Classic','#7a6648']])
      await c.query('INSERT INTO categories(slug,label,color) VALUES($1,$2,$3)', [slug, label, color]);

    const U = {};
    const users = [
      ['admin','Admin Archive','admin@archive.id','admin123','admin',null,'Penjaga integritas arsip: mengelola akun, karya, dan challenge.',120],
      ['dimas','Dimas Kurator','kurator@archive.id','kurator123','curator',null,'Kurator independen. Fokus pada seni digital, cahaya, dan perspektif.',90],
      ['rina','Rina Maharani','member@archive.id','member123','member',null,'Ilustrator lanskap dan potret. Suka warna hangat dan cahaya sore.',70],
      ['bima','Bima Saputra','bima@archive.id','member123','member',null,'Bereksperimen dengan optik: agamograph dan anamorfosis.',64],
      ['rizky','Rizky Pratama','rizky@archive.id','member123','member',null,'Pelukis klasik yang sering kembali ke senja.',58],
      ['sari','Sari Wulandari','sari@archive.id','member123','member',null,'Bermain dengan bayangan, jarak, dan sudut pandang.',40],
      ['pub','Andi Pengunjung','publik@archive.id','publik123','public',null,'Penikmat seni yang gemar berkeliling galeri.',30],
      ['nadia','Nadia Putri','nadia@archive.id','publik123','public','pending','Penggiat komunitas seni kampus.',3],
    ];
    for (const [k, name, email, pass, role, cs, bio, ago] of users) {
      const r = await c.query(`INSERT INTO users(name,email,password_hash,role,curator_status,bio,created_at)
        VALUES($1,$2,$3,$4,$5,$6, now() - ($7 || ' days')::interval) RETURNING id`, [name, email, bcrypt.hashSync(pass, 10), role, cs, bio, String(ago)]);
      U[k] = r.rows[0].id;
    }
    await c.query("UPDATE users SET instagram='https://instagram.com/rina.maharani', behance='https://behance.net/rinamaharani' WHERE id=$1", [U.rina]);
    await c.query("UPDATE users SET instagram='https://instagram.com/dimas.kurator' WHERE id=$1", [U.dimas]);

    const owner = { 'c01-senja':'rizky','c02-fajar':'rina','c03-cincin':'rina','c04-danau':'bima','c05-garis':'bima','c06-bayangan':'sari','c07-bukit':'rizky' };
    const painter = { 'c02-fajar':'Rina Maharani','c03-cincin':'Rina Maharani','c04-danau':'Bima Saputra','c05-garis':'Bima Saputra','c06-bayangan':'Sari Wulandari','c07-bukit':'Rizky Pratama' };
    const arts = JSON.parse(fs.readFileSync(path.join(ROOT, 'db/seed/arts.json'), 'utf8'));
    const A = {};
    let i = 0;
    for (const a of arts) {
      const buf = fs.readFileSync(path.join(ROOT, 'db/seed/arts', a.file));
      const mime = a.file.endsWith('.png') ? 'image/png' : 'image/jpeg';
      const r = await c.query(`INSERT INTO artworks(owner_id,title,painter,synopsis,category,studio_url,image,image_mime,is_example,created_at)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,true, now() - ($9 || ' days')::interval) RETURNING id`,
        [U[owner[a.id]], a.title, painter[a.id] || a.painter, a.synopsis, a.category, a.studioUrl, buf, mime, String(100 - i)]);
      A[a.id] = r.rows[0].id; i++;
    }
    const likes = { 'c01-senja':['rina','bima','sari','pub','dimas'],'c02-fajar':['rizky','bima','pub'],'c03-cincin':['rizky','rina','bima','sari','pub','dimas'],'c04-danau':['rina'],'c05-garis':['sari','pub'],'c06-bayangan':['rizky','rina','pub'],'c07-bukit':['bima'] };
    for (const [k, list] of Object.entries(likes)) for (const u of list) await c.query('INSERT INTO likes(user_id,artwork_id) VALUES($1,$2)', [U[u], A[k]]);
    for (const [k, u] of [['c03-cincin','pub'],['c01-senja','pub'],['c05-garis','rina']]) await c.query('INSERT INTO favorites(user_id,artwork_id) VALUES($1,$2)', [U[u], A[k]]);
    for (const [k, u, t, d] of [
      ['c01-senja','dimas','Warna senjanya hangat sekali. Gradasi langitnya terasa jujur.',6],
      ['c03-cincin','pub','Dari depan cincinnya benar-benar utuh. Keren!',3],
      ['c03-cincin','bima','Pemisahan lapisannya rapi. Boleh tahu jarak lampunya?',2],
      ['c06-bayangan','rina','Bayangannya panjang dan dramatis.',1]])
      await c.query("INSERT INTO comments(artwork_id,user_id,body,created_at) VALUES($1,$2,$3, now() - ($4 || ' days')::interval)", [A[k], U[u], t, String(d)]);

    const CH = {};
    const chs = [
      ['cahaya','Cahaya di Ujung Hari','Tangkap momen ketika cahaya berubah: senja, fajar, atau lampu pertama yang menyala. Kami mencari karya yang membuat penonton ikut menahan napas.\n\nBoleh bergaya klasik maupun optik.','Satu karya per member.\nKarya orisinal, belum pernah menang di kompetisi lain.\nCantumkan sinopsis singkat tentang sumber cahayanya.','Rp 2.000.000 + pajangan utama selama sebulan',-7,21,false],
      ['ilusi','Ilusi Sudut Pandang','Karya yang baru utuh dari satu titik pandang: anamorfosis bayangan, anamorfosis warna, atau agamograph. Tunjukkan bagaimana jarak mengubah makna.','Kategori Agamograph, Anamorphic Shadow, atau Anamorphic Color.\nLengkapi Studio View bila tersedia.','Voucher alat gambar Rp 1.500.000',-3,9,false],
      ['lanskap','Lanskap Nusantara','Pegunungan, danau, bukit, dan langit Nusantara dalam sapuan kuasmu. Challenge ini sudah selesai dan pemenangnya telah diumumkan.','Tema bebas selama lanskap Indonesia.','Piagam kurator + e-book koleksi seni',-60,-10,false],
      ['warna','Warna Tanpa Batas','Open call berikutnya: eksplorasi palet berani. Pendaftaran dibuka sebentar lagi, siapkan karyamu.','Detail aturan akan diumumkan saat challenge dimulai.','Akan diumumkan',6,36,false],
    ];
    for (const [k, title, desc, rules, prize, s, e] of chs) {
      const r = await c.query(`INSERT INTO challenges(owner_id,title,description,rules,prize,start_date,end_date)
        VALUES($1,$2,$3,$4,$5, current_date + $6::int, current_date + $7::int) RETURNING id`, [U.dimas, title, desc, rules, prize, s, e]);
      CH[k] = r.rows[0].id;
    }
    const sub = async (ch, art, user, score, note) => (await c.query('INSERT INTO submissions(challenge_id,artwork_id,user_id,score,note) VALUES($1,$2,$3,$4,$5) RETURNING id', [CH[ch], A[art], U[user], score, note])).rows[0].id;
    await sub('cahaya','c01-senja','rizky',null,'');
    await sub('ilusi','c03-cincin','rina',null,'');
    await sub('ilusi','c05-garis','bima',null,'');
    await sub('ilusi','c06-bayangan','sari',null,'');
    const w1 = await sub('lanskap','c04-danau','bima',92,'Nuansa malamnya tenang dan dalam.');
    const w2 = await sub('lanskap','c07-bukit','rizky',86,'Lapisan bukit terbaca jelas.');
    const w3 = await sub('lanskap','c02-fajar','rina',81,'Udara pagi terasa, warna bisa lebih berani.');
    await c.query('INSERT INTO winners(challenge_id,rank,submission_id) VALUES($1,1,$2),($1,2,$3),($1,3,$4)', [CH.lanskap, w1, w2, w3]);
    await c.query('UPDATE challenges SET announced_at = now() - interval \'9 days\' WHERE id=$1', [CH.lanskap]);
    await c.query('COMMIT');
    console.log('Seed selesai. Akun demo: admin@archive.id / admin123, kurator@archive.id / kurator123, member@archive.id / member123, publik@archive.id / publik123');
  } catch (e) { await c.query('ROLLBACK'); throw e; }
  await c.end();
})().catch(e => { console.error(e); process.exit(1); });
