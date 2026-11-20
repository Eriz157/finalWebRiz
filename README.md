# The Art Archive — Next.js + PostgreSQL

Platform pameran seni dengan lima peran (guest, public, curator, member, admin). Dibangun dengan Next.js 16 (App Router, JavaScript), PostgreSQL (`pg`), bcrypt, dan sesi cookie JWT.

## 1. Kebutuhan
- Node.js 22 LTS (minimal 20.19). Cek dengan `node -v`.
- PostgreSQL 14 atau lebih baru.

## 2. Menjalankan
1. Ekstrak project, buka terminal di foldernya, lalu `npm install`.
2. Buat database kosong, misalnya `art_archive`:
   `psql -U postgres -c "CREATE DATABASE art_archive;"` (atau lewat pgAdmin).
3. Salin `.env.example` menjadi **`.env`** (bukan `.env.local`; script database hanya membaca `.env`):
   - Mac/Linux: `cp .env.example .env`
   - Windows: `copy .env.example .env`
4. Isi `.env`:
   ```
   DATABASE_URL=postgres://USER:PASSWORD@localhost:5432/NAMA_DATABASE
   AUTH_SECRET=teks-acak-minimal-32-karakter
   APP_TZ=Asia/Makassar
   ```
   Jika kata sandi memuat karakter khusus (`@`, `#`, `/`), tulis dalam bentuk URL (`@` menjadi `%40`).
   Jika ada file `.env.local`, isinya mengalahkan `.env`; hapus atau samakan.
5. Buat tabel dan isi data (pilih salah satu pada bagian 3).
6. `npm run dev`, lalu buka http://localhost:3000.

Produksi: `npm run build` lalu `npm start`. Tambahkan `SHOW_DEMO_LOGIN=0` di `.env` untuk menyembunyikan tombol akun demo di halaman login.

## 3. Menyiapkan database
Pilih salah satu cara.

**A. Otomatis (database kosong)**
```
npm run db:reset
```
Membuat semua tabel dan mengisi data demo. **Menghapus seluruh isi database**, jadi jalankan hanya di awal.

**B. Skema sudah dibuat sendiri dari `db/schema.sql`**
- Jangan jalankan `db:reset`. `db:migrate` aman pada database yang sudah ada (hanya menambah fitur sukai & balas komentar, data tidak diubah).
- Data demo lengkap (semua tabel + foto): `psql "DATABASE_URL" -f data-demo.sql` (tabel harus kosong).
- Atau tanpa data demo, hanya kategori dan satu admin:
  ```
  npm run db:admin -- emailanda@gmail.com "SandiAnda" "Nama Anda"
  ```

**Memeriksa struktur database:** `npm run db:check` membandingkan tabel dan kolom dengan yang dibutuhkan aplikasi serta menjalankan query halaman. Gunakan ini jika muncul "internal server error".

## 4. Akun demo
| Peran | Email | Kata sandi |
|---|---|---|
| Admin | admin@archive.id | admin123 |
| Curator | kurator@archive.id | kurator123 |
| Member | member@archive.id | member123 |
| Public | publik@archive.id | publik123 |
| Public (pengajuan curator pending) | nadia@archive.id | publik123 |

## 5. Perintah npm
| Perintah | Fungsi |
|---|---|
| `npm run dev` | Server pengembangan |
| `npm run build` / `npm start` | Build dan jalankan produksi |
| `npm run db:migrate` | Membuat tabel (gagal bila sudah ada) |
| `npm run db:seed` | Mengisi data demo (hanya bila tabel `users` kosong) |
| `npm run db:reset` | Hapus semua lalu migrate + seed |
| `npm run db:admin -- email sandi nama` | Membuat kategori awal dan akun admin |
| `npm run db:check` | Memeriksa struktur database |

## 6. Penyimpanan gambar
Semua gambar tersimpan di PostgreSQL, tidak ada folder `uploads`:
- Foto karya: `artworks.image` (`bytea`) dan `image_mime`.
- Lampiran challenge: `challenges.attachment`, `attachment_name`, `attachment_mime`.
- Foto profil: `users.avatar` (data URL kecil).

Gambar dikecilkan di browser (maks. sekitar 900 KB) sebelum diunggah, dan disajikan lewat `/api/artworks/[id]/image` serta `/api/challenges/[id]/attachment`. Cadangan cukup dengan `pg_dump`.

Folder `db/` hanya dipakai script setup (`schema.sql`, gambar contoh untuk `db:seed`), bukan oleh aplikasi saat berjalan. Simpan `schema.sql` bila folder lain dihapus.

## 7. Struktur
- `db/schema.sql` — skema PostgreSQL; `scripts/` — migrate, seed, create-admin, check-db
- `src/lib` — koneksi DB, autentikasi, query, validasi
- `src/app/api` — 23 route API (otorisasi dicek di server pada setiap route)
- `src/app/*` — halaman (server component) yang memagari akses per peran
- `src/components` — tampilan klien. Galeri 3D: markup `GalleryView.js`, logika `galleryController.js`, gaya bagian `#p-galeri` di `globals.css`. Alur tiga halaman: Spiral → Fokus → Detail

## 8. Otoritas
- **Guest**: Beranda, Gallery (lihat saja), Login/Join.
- **Public**: + Profil; suka, favorit, komentar; dapat mengajukan jadi Curator.
- **Member**: + Challenge, My Artwork (CRUD karya sendiri, unggah gambar, Studio View opsional), ikut/tarik submisi. Tombol Edit/Hapus di detail Gallery hanya pada karyanya sendiri.
- **Curator**: + Overview (buat challenge, lampiran, umumkan pemenang), Challenge (menilai/edit/hapus hanya milik sendiri).
- **Admin**: Challenge, User Management (hapus akun, ubah peran, setujui/tolak pengajuan curator), CRUD atas semua karya dan challenge. Akun admin hanya dibuat lewat `db:admin`, `data-demo.sql`, atau SQL.

## 9. Masalah umum
| Pesan | Penyebab dan solusi |
|---|---|
| `password authentication failed` | Kata sandi di `DATABASE_URL` salah |
| `ECONNREFUSED` | PostgreSQL belum berjalan, atau port berbeda |
| `database "..." does not exist` | Database belum dibuat atau nama di URL berbeda |
| `Cannot find module 'pg'` | Jalankan `npm install` |
| `Internal Server Error` di satu halaman | Jalankan `npm run db:check`, lalu lihat pesan error di terminal tempat `npm run dev` berjalan |


## Pembaruan terbaru
- Komentar: tombol sukai dan balas (satu tingkat). Tabel `comment_likes` dan kolom `comments.parent_id` dibuat otomatis saat pertama dipakai, atau lewat `npm run db:migrate` (`db/upgrade-comments.sql`).
- Gallery dan Challenge memiliki kolom pencarian.
- Hapus akun mandiri dinonaktifkan; akun hanya dapat dihapus admin lewat User Management.
- Detail karya: tombol Studio View menyala bila tautan tersedia; sinopsis tampil di panel semi-transparan.
- Navbar transparan; hanya kotak teksnya yang solid.

## Design system (konsistensi tampilan)
Semua gaya terpusat di `src/app/globals.css` melalui design tokens pada `:root`:
warna (`--c-*`, `--on-dark*`), tipografi (`--serif`, `--sans`, `--serif-scene`, skala `--fs-11…--fs-40`),
spacing (`--s-4…--s-96`), radius (`--r-1…--r-pill`), shadow (`--sh-*`), dan transisi (`--t-1…--t-3`).
Ubah nilai token di satu tempat untuk mengubah seluruh halaman.
