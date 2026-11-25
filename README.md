<p align="center">
  <img width="1672" height="941" alt="Walk the Archive_ A Painterly Journey" src="https://github.com/user-attachments/assets/af05e1c0-0afc-49b8-9c8f-fb862b4e9511" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/PostgreSQL-14+-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/CSS-Design%20Tokens-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
</p>

<h3 align="center">
Galeri digital tempat kreator memamerkan karya, bertukar kritik jujur, dan menjawab open call bulanan.
</h3>

<p align="center">
  <a href="#-fitur">📋 Fitur</a> ·
  <a href="#-instalasi">🚀 Instalasi</a> ·
  <a href="#-kontribusi">🤝 Kontribusi</a>
</p>

---

## 📋 Daftar Isi

- [🎯 Tentang Proyek](#-tentang-proyek)
- [🖼 Tampilan](#-tampilan)
- [✨ Fitur](#-fitur)
- [🧰 Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [💻 Persyaratan Sistem](#-persyaratan-sistem)
- [🚀 Instalasi](#-instalasi)
- [🔧 Konfigurasi](#-konfigurasi)
- [📁 Struktur Proyek](#-struktur-proyek)
- [📖 Penggunaan](#-penggunaan)
- [📚 Dokumentasi](#-dokumentasi)
- [🧪 Pengujian](#-pengujian)
- [🆘 Masalah Umum](#-masalah-umum)
- [🤝 Kontribusi](#-kontribusi)
- [👤 Kontak](#-kontak)

---

## 🎯 Tentang Proyek

**The Art Archive** adalah platform pameran seni berbasis web. Karya ditampilkan di galeri 3D yang berputar seperti spiral, setiap karya punya halaman detail dengan ruang pamer virtual, dan komunitas dapat berinteraksi lewat suka, favorit, komentar, serta challenge bulanan yang dikurasi.

Platform ini memiliki lima peran (guest, public, member, curator, admin) dengan otorisasi yang selalu dicek di server.

### 🎯 Tujuan
- 🖼️ Memberi kreator ruang pamer yang indah untuk karya mereka
- 💬 Memfasilitasi kritik dan diskusi yang jujur lewat komentar bertingkat
- 🏆 Mendorong kreator berkarya lewat challenge yang dikurasi
- 🛡️ Menjaga arsip tetap rapi lewat peran dan pengelolaan akun

### ⭐ Nilai Inti
- ✅ **Satu Design System** - Warna, tipografi, spasi, radius, shadow, dan transisi dikelola lewat design tokens terpusat
- ✅ **Galeri Imersif** - Alur tiga tahap: Spiral → Fokus → Detail, dengan animasi yang halus
- ✅ **Otorisasi di Server** - Setiap route API memeriksa peran pengguna, bukan hanya menyembunyikan tombol
- ✅ **Gambar di Folder `uploads`** - Gambar karya disimpan sebagai berkas di `uploads/artworks/`; database hanya mencatat nama berkasnya, sehingga dump SQL tetap ringkas
- ✅ **Responsif** - Dirancang untuk desktop, tablet, dan mobile

---

## 🖼 Tampilan

### Beranda
<img width="1439" height="818" alt="Screenshot 2026-11-25 at 19 01 27" src="https://github.com/user-attachments/assets/635be1cb-bda6-4efd-b715-fe8fa6cc395c" />

---

### Gallery
<img width="1440" height="813" alt="Screenshot 2026-11-25 at 19 02 22" src="https://github.com/user-attachments/assets/44db33d7-0b0f-4eef-819f-9b9c6ce4e33c" />

---

### Challenge
<img width="1440" height="814" alt="Screenshot 2026-11-25 at 19 03 18" src="https://github.com/user-attachments/assets/bde22da3-5fd8-4f7b-857d-602439f5d9d2" />

---

### Overview
<img width="1433" height="818" alt="Screenshot 2026-11-25 at 19 03 39" src="https://github.com/user-attachments/assets/aa423d1c-56eb-4563-8cca-9b08cc976d4a" />

---

### My Artwork
<img width="1440" height="819" alt="Screenshot 2026-11-25 at 19 04 08" src="https://github.com/user-attachments/assets/40d1927e-e4c5-405c-b2a8-8b0b177826d3" />

---

### User Management
<img width="1440" height="819" alt="Screenshot 2026-11-25 at 19 04 44" src="https://github.com/user-attachments/assets/2e30358e-1c4d-4102-bdb8-38c73738e45b" />

---

## ✨ Fitur

### 🖼️ Gallery
- 🌀 **Spiral 3D** - Karya berputar mengikuti scroll, drag, atau tombol panah; karya di tengah menampilkan deskripsi singkatnya
- 🔎 **Pencarian** - Cari berdasarkan judul, pelukis, kategori, atau deskripsi
- ⚡ **Kolom Aksi Cepat** - Suka, komentar, dan simpan langsung dari halaman pertama tanpa membuka detail
- 👆 **Dua Cara Masuk** - Ketuk karya untuk halaman fokus, atau tombol **Lihat selengkapnya!** untuk langsung ke halaman detail
- 🏛️ **Halaman Detail** - Ruang pamer virtual, sinopsis, tombol **Studio View** yang menyala bila tautannya tersedia
- 🗂️ **Kategori** - Agamograph, Anamorphic Shadow, Anamorphic Color, dan Classic

### 💬 Interaksi
- ❤️ **Suka** dan 🔖 **Favorit** untuk setiap karya
- 💬 **Komentar** dengan **balasan** (satu tingkat) dan **sukai komentar**
- 🧭 Komentar dapat dibuka dari halaman pertama Gallery maupun halaman detail

### 🏆 Challenge
- 📅 Status otomatis: Aktif, Akan datang, Selesai (mengikuti zona waktu `APP_TZ`)
- 🔎 Pencarian dan filter status
- 📎 Lampiran brief dari curator
- 📝 Member mengikuti atau menarik submisi; curator menilai dan mengumumkan pemenang
- 🧮 **Penilaian 4 kriteria (1-100)** - Kreativitas 30%, Teknik 25%, Orisinalitas 25%, Estetika 20%; total dihitung otomatis
- ⚖️ **Pemecah seri berurutan** - Kreativitas, lalu Orisinalitas, Teknik, Estetika; bila masih sama persis, karya menjadi **juara bersama** (peringkat 1, 1, 3)
- 🥇 **Satu karya, satu peringkat** - divalidasi di server; dua karya hanya boleh berbagi peringkat bila seluruh nilainya sama persis

### 👥 Peran dan Akun
- 🔐 **Lima peran** - Guest, Public, Member, Curator, Admin
- 📨 **Pengajuan Curator** - Public dapat mengajukan, admin menyetujui atau menolak
- 🧑‍💼 **User Management** - Admin menyetujui/menolak pengajuan Curator dan menghapus akun. Admin tidak mengubah nama, email, kata sandi, atau peran secara langsung: perubahan nama/email dan reset kata sandi (ke `pass_default123`) hanya berlaku setelah pemilik akun menyetujuinya di halaman Profil
- 👤 **Profil** - Foto, bio, dan tautan Instagram, Behance, serta website

### 🎨 Karya Saya (Member)
- ➕ Unggah karya dengan judul, pelukis, kategori, **deskripsi singkat**, sinopsis, dan tautan Studio View
- ✏️ Edit dan hapus karya milik sendiri
- 📊 Ringkasan karya, suka, komentar, dan submisi challenge

### 🎨 UI/UX
- 🎛️ **Design Tokens** - Warna, tipografi, spasi, radius, shadow, dan transisi terpusat di `globals.css`
- ✍️ **Tipografi** - Cormorant Garamond (judul), DM Sans (teks), Newsreader (scene gelap)
- 🧭 **Navbar Transparan** - Hanya kotak tautannya yang solid, sehingga latar galeri tampil penuh
- 📱 **Responsif** - Tata letak khusus untuk desktop, tablet, dan mobile

---

## 🧰 Teknologi yang Digunakan

### 🔧 Backend

![Next.js](https://img.shields.io/badge/Next.js-16.4-000000?style=flat-square&logo=nextdotjs&logoColor=white)  - Framework fullstack (App Router, Route Handlers)

![Node.js](https://img.shields.io/badge/Node.js-22_LTS-339933?style=flat-square&logo=nodedotjs&logoColor=white)  - Runtime JavaScript

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-4169E1?style=flat-square&logo=postgresql&logoColor=white)  - Sistem manajemen database

![node-postgres](https://img.shields.io/badge/pg-8.x-336791?style=flat-square&logo=postgresql&logoColor=white)  - Driver PostgreSQL

### 🎨 Frontend

![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)  - Library antarmuka

![CSS](https://img.shields.io/badge/CSS-Custom_Properties-1572B6?style=flat-square&logo=css3&logoColor=white)  - Satu berkas `globals.css` dengan design tokens

![Google Fonts](https://img.shields.io/badge/Google_Fonts-Cormorant_·_DM_Sans_·_Newsreader-4285F4?style=flat-square&logo=googlefonts&logoColor=white)  - Tipografi

![GSAP](https://img.shields.io/badge/GSAP-3_+_ScrollTrigger-88CE02?style=flat-square&logo=greensock&logoColor=white)  - Judul muncul per kata dan elemen masuk satu per satu saat digulir

![Motion](https://img.shields.io/badge/Motion-12+-FF0088?style=flat-square&logo=framer&logoColor=white)  - Animasi card, modal, dan toast (`motion/react`)

### 🔐 Keamanan

![JWT](https://img.shields.io/badge/JWT-jose_6-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)  - Sesi lewat cookie JWT

![bcrypt](https://img.shields.io/badge/bcryptjs-3.x-003A70?style=flat-square&logo=letsencrypt&logoColor=white)  - Hash kata sandi

---

## 💻 Persyaratan Sistem

![Node.js](https://img.shields.io/badge/Node.js-22_LTS_(min._20.19)-339933?style=flat-square&logo=nodedotjs&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%3E%3D%2010-CB3837?style=flat-square&logo=npm&logoColor=white)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%3E%3D%2014-4169E1?style=flat-square&logo=postgresql&logoColor=white)

Cek versi dengan `node -v` dan `psql --version`.

---

## 🚀 Instalasi

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Eriz157/finalWebRiz.git
cd finalWebRiz
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Buat Database

```bash
psql -U postgres -c "CREATE DATABASE art_archive;"
```

Atau lewat pgAdmin: klik kanan *Databases* → *Create* → *Database*, dengan nama `art_archive`.

### 4️⃣ Setup Environment

```bash
# Mac / Linux
cp .env.example .env

# Windows (CMD)
copy .env.example .env
```

> Gunakan nama **`.env`** (bukan `.env.local`). Script database hanya membaca `.env`.
> File berawalan titik tersembunyi di Finder (Mac: **Cmd + Shift + .**) dan File Explorer (Windows: *View → Hidden items*).

### 5️⃣ Konfigurasi Database

Edit `.env` dan sesuaikan:

```env
DATABASE_URL=postgres://USER:PASSWORD@localhost:5432/art_archive
AUTH_SECRET=teks-acak-minimal-32-karakter
APP_TZ=Asia/Makassar
```

Jika kata sandi memuat karakter khusus, tulis dalam bentuk URL (`@` menjadi `%40`, `#` menjadi `%23`, `/` menjadi `%2F`).

### 6️⃣ Siapkan Tabel dan Data

```bash
# Database kosong: buat tabel + isi data demo
npm run db:reset
```

> ⚠️ `db:reset` **menghapus seluruh isi database**. Jalankan hanya di awal.

Pilihan lain:
- Sudah membuat tabel sendiri dari `db/schema.sql` (tabel masih kosong)? Muat data demo lengkap dengan SQL:
  ```bash
  psql "postgres://USER:PASSWORD@localhost:5432/art_archive" -f db/data-demo.sql
  ```
- Sudah punya data? Jalankan `npm run db:migrate` (data tidak diubah; pada database lama yang masih menyimpan gambar di kolom `image`, gambarnya dipindah ke folder `uploads/artworks/`), lalu `npm run db:check`.
- Tanpa data demo, hanya kategori dan satu admin:
  ```bash
  npm run db:admin -- emailanda@gmail.com "SandiAnda" "Nama Anda"
  ```

### 7️⃣ Jalankan Server

```bash
# Pengembangan
npm run dev

# Produksi
npm run build
npm start
```

🌐 Akses aplikasi di: `http://localhost:3000`

---

## 🔧 Konfigurasi

### 🔑 Kredensial Demo

Tersedia setelah menjalankan `db:reset` atau `db:seed`:

|                 Peran                 |        Email         |  Kata sandi  |
|---------------------------------------|----------------------|--------------|
| 👨‍💼 Admin                              | `admin@archive.id`   | `admin123`   |
| 🧑‍🎨 Curator                            | `kurator@archive.id` | `kurator123` |
| 🖌️ Member                             | `member@archive.id`  | `member123`  |
| 👤 Public                             | `publik@archive.id`  | `publik123`  |
| 👤 Public (pengajuan curator pending) | `nadia@archive.id`   | `publik123`  |

> 🔒 Untuk produksi, ganti seluruh kata sandi demo dan tambahkan `SHOW_DEMO_LOGIN=0` agar tombol akun demo di halaman login disembunyikan.

### Environment Variables

|      Variabel     |                              Fungsi                               |
|-------------------|-------------------------------------------------------------------|
| `DATABASE_URL`.   | Alamat koneksi PostgreSQL                                         |
| `AUTH_SECRET`     | Rahasia penanda tangan cookie sesi (minimal 32 karakter acak)     |
| `APP_TZ`          | Zona waktu untuk menentukan status challenge (aktif atau selesai) |
| `SHOW_DEMO_LOGIN` | Isi `0` untuk menyembunyikan tombol akun demo                     |

### Perintah npm

|                 Perintah               |                                                       Fungsi                                                         |
|----------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| `npm run dev`                          | Server pengembangan                                                                                                  |
| `npm run build` / `npm start`          | Build dan jalankan produksi                                                                                          |
| `npm run db:migrate`                   | Membuat tabel; pada database yang sudah ada tidak mengubah data (hanya memindahkan gambar lama ke folder `uploads/`) |
| `npm run db:seed`                      | Mengisi data demo (hanya bila tabel `users` kosong)                                                                  |
| `npm run db:reset`                     | Hapus semua lalu migrate + seed                                                                                      |
| `npm run db:admin -- email sandi nama` | Membuat kategori awal dan akun admin                                                                                 |
| `npm run db:check`                     | Memeriksa struktur database dan query halaman                                                                        |

---

## 📁 Struktur Proyek

### 📂 Direktori Utama

**`src/app/`** - Halaman (server component) dan route API

**`src/components/`** - Tampilan klien, termasuk galeri 3D

**`src/lib/`** - Koneksi database, autentikasi, query, dan validasi

**`db/`** - Skema SQL dan data contoh

**`scripts/`** - Migrasi, seed, pembuat admin, dan pemeriksa database

```
art-archive-next/
├── db/
│   ├── schema.sql                 # skema PostgreSQL
│   ├── data-demo.sql              # data demo lengkap (semua tabel)
│   ├── seed/arts.json             # data karya contoh
├── uploads/artworks/              # gambar karya (demo-* disertakan)
├── docs/
│   ├── banner.png
│   └── screenshots/
├── scripts/
│   ├── migrate.js
│   ├── seed.js
│   ├── create-admin.js
│   └── check-db.js
├── src/
│   ├── app/
│   │   ├── api/                   # 30 route API
│   │   │   ├── artworks/          # CRUD karya, suka, favorit, komentar, gambar
│   │   │   ├── challenges/        # CRUD challenge, ikut, tutup, pemenang, lampiran
│   │   │   ├── comments/          # hapus & sukai komentar
│   │   │   ├── submissions/
│   │   │   ├── users/
│   │   │   ├── me/                # profil, akun, pengajuan curator
│   │   │   └── auth/              # login, register, logout
│   │   ├── gallery/               # spiral → fokus → detail
│   │   ├── challenges/
│   │   ├── my-artwork/
│   │   ├── overview/              # dashboard curator
│   │   ├── profile/
│   │   ├── users/                 # user management (admin)
│   │   ├── login/
│   │   ├── globals.css            # design tokens + seluruh gaya
│   │   ├── layout.js
│   │   └── page.js                # Beranda
│   ├── components/
│   │   ├── GalleryView.js         # markup galeri
│   │   ├── galleryController.js   # logika spiral, fokus, detail
│   │   ├── CommentsDrawer.js
│   │   ├── ChallengesView.js
│   │   ├── HomeView.js
│   │   ├── MyArtworkView.js
│   │   ├── ProfileView.js
│   │   ├── UsersView.js
│   │   └── Navbar.js
│   └── lib/
│       ├── db.js
│       ├── auth.js
│       ├── guard.js
│       └── queries.js
├── .env.example
├── package.json
└── README.md
```

### 📄 File Penting

![schema.sql](https://img.shields.io/badge/db/schema.sql-Skema%20Database-4169E1?style=flat-square&logo=postgresql&logoColor=white)  - Definisi seluruh tabel

![globals.css](https://img.shields.io/badge/globals.css-Design%20Tokens-1572B6?style=flat-square&logo=css3&logoColor=white)  - Token desain dan gaya seluruh halaman

![galleryController.js](https://img.shields.io/badge/galleryController.js-Logika%20Galeri-F7DF1E?style=flat-square&logo=javascript&logoColor=black)  - Spiral, fokus, detail, aksi cepat

![.env.example](https://img.shields.io/badge/.env.example-Konfigurasi-FF6B6B?style=flat-square&logo=dotenv&logoColor=white)  - Template environment

---

## 📖 Penggunaan

### Alur Gallery

1. 🌀 **Spiral** - Putar spiral untuk memilih karya. Deskripsi karya tampil di kiri, kolom Suka, Komentar, Simpan di kanan.
2. 👆 **Fokus** - Ketuk karya untuk melihatnya lebih dekat.
3. 🏛️ **Detail** - Tekan **Lihat selengkapnya!** pada spiral untuk langsung ke detail, atau tombol **Lihat Detail** dari halaman fokus.

### 🌐 Untuk Guest
1. 🏠 Menjelajahi Beranda
2. 🖼️ Melihat Gallery (hanya melihat)
3. 🏆 Melihat daftar dan detail Challenge (hanya melihat)
4. 🔐 **Login** atau **Join** untuk berinteraksi

### 👤 Untuk Public
0. 🏆 Melihat Challenge (hanya akun Member yang dapat mengikuti)
1. ❤️ Menyukai, menyimpan, dan mengomentari karya
2. 👤 Mengelola profil
3. 📨 Mengajukan diri menjadi Curator

### 🖌️ Untuk Member
1. ➕ **My Artwork** - Mengunggah, mengedit, dan menghapus karya sendiri
2. 🏆 **Challenge** - Mengikuti atau menarik submisi
3. 🔗 Menambahkan tautan **Studio View** pada karya

### 🧑‍🎨 Untuk Curator
1. 📊 **Overview** - Membuat challenge, melampirkan brief, mengumumkan pemenang
2. 📝 Menilai submisi pada challenge miliknya

### 👨‍💼 Untuk Admin
1. 🧑‍💼 **User Management** - Menyetujui atau menolak pengajuan curator, mengajukan perubahan nama/email dan reset kata sandi (butuh persetujuan pemilik akun), menangguhkan akun, menghapus akun (hapus dan tangguhkan butuh kata sandi + OTP, lihat Panduan Juri)
2. 🛠️ Mengelola semua karya dan challenge (tanpa menilai karya atau menetapkan pemenang; itu hak curator pemilik challenge)

### 🧑‍⚖️ Panduan Juri (kode verifikasi demo)

Tindakan sensitif admin di **User Management** (hapus dan tangguhkan akun) meminta kata sandi verifikasi dan kode OTP. OTP-nya **acak 6 digit**, berbeda setiap kali diminta, berlaku 5 menit, dan hanya sah untuk admin dan akun target yang sama. Seharusnya OTP dikirim ke Gmail admin; karena proyek ini masih berstatus demo (gimmick), OTP tampil sebagai **notifikasi demo** (dengan tombol *Isi otomatis*) setelah menekan **Kirim kode OTP**.

|        Fungsi       | Kata sandi verifikasi |
|---------------------|-----------------------|
| Hapus akun permanen | `hard_delete123`      |
| Tangguhkan akun     | `soft_delete123`      |

- pass hapus akun : `hard_delete123`
- pass tangguhkan akun : `soft_delete123`
- OTP hapus, tangguhkan, dan lupa email/kata sandi : acak, lihat notifikasi demo

**Tangguhkan akun:** pilih lama penangguhan (1 hari, 1 bulan, 1 tahun, kustom dalam menit/jam/hari, atau tanpa batas waktu). Selama ditangguhkan, akun tidak dapat masuk dan melihat pesan: *"Akun anda ditangguhkan selama jam:menit:detik, mohon maaf atas ketidaknyamanannya"* (atau "...selama batas waktu yang tidak ditentukan..."). Admin dapat mencabutnya lewat tombol **Cabut tangguhan**.

**Perubahan karya oleh admin:** admin tidak dapat mengedit karya secara langsung. Saat admin menekan Edit di Gallery, perubahannya dikirim sebagai permintaan (tabel `artwork_requests`) dan muncul sebagai notifikasi di halaman Profil pemilik karya (Setujui/Tolak, dengan perbandingan sebelum dan sesudah). Setelah disetujui, karya diperbarui, notifikasi berubah menjadi ringkasan bidang yang berubah (misalnya judul, deskripsi, sinopsis) dengan tombol **Lihat** (ke detail karya di Gallery) dan **Oke** (menutup notifikasi). Endpoint pemilik: `POST /api/me/artwork-requests/[id]`. 

**Lupa email atau kata sandi:** di halaman login klik *Lupa email atau kata sandi?*, isi nama akun (atau email), lalu OTP acak (muncul sebagai notifikasi demo dengan tombol *Isi otomatis*), dan isi email dan/atau kata sandi baru. Endpoint: `POST /api/auth/recover`. Catatan: menampilkan OTP di layar hanya untuk demo; di produksi OTP harus dikirim ke email pemilik akun.

### 🛡️ Ringkasan Otoritas

| Peran       |                                                                  Akses                                                                                |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Guest**   | Beranda, Gallery dan Challenge (lihat saja), Login/Join                                                                                               |
| **Public**  | + Profil; suka, favorit, komentar; mengajukan jadi Curator                                                                                            |
| **Member**  | + My Artwork (CRUD karya sendiri), ikut/tarik submisi challenge                                                                                       |
| **Curator** | + Overview (buat challenge, umumkan pemenang), kelola challenge sendiri                                                                               |
| **Admin**   | + User Management (persetujuan curator), menghapus karya dan challenge; tidak dapat mengubah karya secara langsung (hanya mengajukan perubahan yang   |
|             | harus disetujui pemilik karya), menilai, atau menetapkan pemenang                                                                                     |

> Akun admin hanya dibuat lewat `npm run db:admin` atau SQL, tidak lewat pendaftaran.

---

## 📚 Dokumentasi

### 🗄️ Skema Database

|        Tabel         |                                              Isi                                          |
|----------------------|-------------------------------------------------------------------------------------------|
| `users`              | Akun, peran, status pengajuan curator, profil                                             |
| `categories`         | Kategori karya                                                                            |
| `artworks`           | Karya (termasuk `description`, `synopsis`, `studio_url`, nama berkas gambar `image_file`) |
| `likes`, `favorites` | Suka dan favorit karya                                                                    |
| `comments`           | Komentar (`parent_id` untuk balasan)                                                      |
| `comment_likes`.     | Suka pada komentar                                                                        |
| `challenges`         | Challenge dan lampirannya                                                                 |
| `submissions`        | Karya yang diikutsertakan ke challenge                                                    |
| `winners`            | Pemenang challenge                                                                        |

Skema lengkap ada di `db/schema.sql`. `db/schema.sql` sudah mencakup semua tabel dan kolom terbaru (tanpa `ALTER`). Data dummy tersimpan di `db/data-demo.sql`; `npm run db:check` menunjukkan bagian yang tidak cocok.

### 🖼️ Penyimpanan Gambar

Gambar karya disimpan sebagai **berkas**, bukan di dalam database:
- Foto karya: berkas di `uploads/artworks/` (nama berkas dicatat di `artworks.image_file`, jenisnya di `image_mime`). Lokasi folder bisa diganti lewat `UPLOAD_DIR` di `.env`
- Gambar contoh (`demo-*.jpg`) ikut di repository; gambar unggahan pengguna tidak ikut git (lihat `.gitignore`)
- Lampiran challenge: `challenges.attachment`, `attachment_name`, `attachment_mime` (masih di database)
- Foto profil: `users.avatar` (data URL kecil)

Gambar dikecilkan di browser (maksimal sekitar 900 KB) sebelum diunggah, lalu disajikan lewat `/api/artworks/[id]/image` dan `/api/challenges/[id]/attachment`. Cadangan lengkap = `pg_dump` **dan** folder `uploads/`.

> Catatan hosting: folder `uploads/` harus bisa ditulis dan tidak terhapus saat deploy. Platform dengan disk sementara (misalnya Vercel) tidak cocok untuk cara ini.

### 🎛️ Design Tokens

Seluruh gaya berada di `src/app/globals.css` dan memakai token pada `:root`:

| Kelompok  |                                   Token                                    |
|-----------|----------------------------------------------------------------------------|
| Warna     | `--bg`, `--paper`, `--ink`, `--terra`, `--olive`, `--c-gold`, `--on-dark*` |
| Tipografi | `--serif`, `--sans`, `--serif-scene`, skala `--fs-11` sampai `--fs-40`     |
| Spasi     | `--s-4` sampai `--s-96`                                                    |
| Radius    | `--r-1`, `--r-2`, `--r-3`, `--r-4`, `--r-pill`                             |
| Shadow    | `--sh-sm`, `--sh-md`, `--sh-lg`, `--sh-scene`                              |
| Transisi  | `--t-1`, `--t-2`, `--t-3`                                                  |

Ubah nilai token di satu tempat untuk memperbarui seluruh halaman.

### 🔌 Ringkasan API

| Area         |                                                                         Endpoint                                                             |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Autentikasi  | `POST /api/auth/login`, `/register`, `/logout`                                                                                               |
| Karya        | `POST /api/artworks`, `PATCH/DELETE /api/artworks/[id]`, `/like`, `/favorite`, `/comments` (daftar dan kirim komentar), `/image`             |
| Komentar     | `DELETE /api/comments/[id]`, `POST /api/comments/[id]/like`                                                                                  |
| Challenge    | `POST /api/challenges`, `PATCH/DELETE /api/challenges/[id]`, `/join`, `/close`, `/winners`, `/attachment`                                    |
| Submisi      | `/api/submissions/[id]`                                                                                                                      |
| Pengguna     | `/api/users/[id]` (hapus), `/api/users/[id]/curator`, `/api/users/[id]/requests` (ajuan admin), `/api/users/[id]/suspend` (tangguhkan/cabut),|
|              | `/api/me/requests/[id]` (keputusan pemilik akun)                                                                                             |
| Akun sendiri | `/api/me/profile`, `/me/account`, `/me/curator-request` (hapus akun mandiri dinonaktifkan; hanya admin yang dapat menghapus akun)            |

---

## 🧪 Pengujian

Project ini belum memiliki test otomatis. Pemeriksaan yang tersedia:

```bash
# Memeriksa tabel, kolom, dan query halaman terhadap database
npm run db:check

# Memastikan seluruh halaman dapat dibangun tanpa error
npm run build
```

### ✅ Daftar Periksa Manual

- ✅ Login dan logout untuk setiap peran
- ✅ Gallery: putar spiral, pencarian, tombol **Lihat selengkapnya!**, klik karya
- ✅ Suka, simpan, dan komentar (balas serta sukai komentar) dari spiral dan detail
- ✅ My Artwork: unggah, edit, dan hapus karya
- ✅ Challenge: ikut, tarik submisi, tutup, umumkan pemenang
- ✅ User Management: setujui atau tolak pengajuan curator (peran tidak dapat diubah manual)
- ✅ Tampilan responsif di lebar 1440, 820, dan 390 px

---

## 🆘 Masalah Umum

|                 Pesan                   |                                   Penyebab dan solusi                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------|
| `password authentication failed`        | Kata sandi di `DATABASE_URL` salah                                                              |
| `ECONNREFUSED`                          | PostgreSQL belum berjalan, atau port berbeda                                                    |
| `database "..." does not exist`         | Database belum dibuat, nama di URL berbeda, atau file `.env` tidak terbaca (periksa file `.env` |
|                                         | berada di folder yang sama dengan `package.json`)                                               |
| `Cannot find module 'pg'`               | Jalankan `npm install`                                                                          |
| `Internal Server Error` di satu halaman | Jalankan `npm run db:check`, lalu lihat pesan error di terminal tempat `npm run dev` berjalan   |

> 💡 Jika nama database di pesan error sama dengan nama user komputer Anda, hampir pasti file `.env` belum terbaca.

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Untuk berkontribusi:

1. 🍴 **Fork** repository
2. 🌿 **Buat** feature branch (`git checkout -b feature/FiturBaru`)
3. 💾 **Commit** perubahan Anda (`git commit -m 'Tambah FiturBaru'`)
4. 📤 **Push** ke branch (`git push origin feature/FiturBaru`)
5. 🔄 **Buka** Pull Request

> ⚠️ Jangan pernah meng-commit file `.env`. File itu sudah tercantum di `.gitignore`.

---

## 👤 Kontak

![GitHub](https://img.shields.io/badge/GitHub-Eriz157-181717?style=for-the-badge&logo=github&logoColor=white) [@Eriz157](https://github.com/Eriz157)

![Project](https://img.shields.io/badge/Project-Link-FF6B6B?style=for-the-badge&logo=link&logoColor=white) : [https://github.com/Eriz157/finalWebRiz](https://github.com/Eriz157/finalWebRiz)

---

⭐⭐⭐⭐⭐ Jika anda menyukai repository ini berikan bintang yaaa!!!
