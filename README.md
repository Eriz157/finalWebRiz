<p align="center">
  <img width="1672" height="941" alt="Walk the Archive in Paint" src="https://github.com/user-attachments/assets/4794d088-17c3-4893-9f1a-3bfb06f3c5aa" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/CSS-Custom-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
</p>

<h3 align="center">
Galeri digital untuk memamerkan, menemukan, dan membahas karya seni, lengkap dengan challenge dan komentar.
</h3>

<p align="center">
  <a href="#-fitur"><img src="https://img.shields.io/badge/📋-Fitur-2F80ED?style=for-the-badge" alt="Fitur"></a>
  <a href="#-instalasi"><img src="https://img.shields.io/badge/🚀-Instalasi-6AA84F?style=for-the-badge" alt="Instalasi"></a>
  <a href="#-kontribusi"><img src="https://img.shields.io/badge/🤝-Kontribusi-E07B39?style=for-the-badge" alt="Kontribusi"></a>
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
- ✅ **Tanpa Penyimpanan Berkas** - Semua gambar tersimpan di PostgreSQL, tanpa folder `uploads`
- ✅ **Responsif** - Dirancang untuk desktop, tablet, dan mobile

---

## 🖼 Tampilan

<hr>

<h2>
  Halaman Beranda
</h2>
<img width="1424" height="818" alt="Screenshot 2026-11-20 at 14 08 02" src="https://github.com/user-attachments/assets/e2c98dc6-2501-4c90-849c-9de1b3d8476c" />
<p>
  Halaman landing yang memukau dengan ringkasan statistik, challenge, dan karya yang sedang di pamerkan.
</p>

<hr>

<h2>
  Halaman Gallery
</h2>
<img width="1440" height="818" alt="Screenshot 2026-11-20 at 14 10 20" src="https://github.com/user-attachments/assets/34cc2f8e-c512-4da5-b718-2b75c7d3d70e" />
<p>
  Halaman tempat seluruh seniman memamerkan karyanya. Halaman ini di lengkapi dengan fitur pencarian karya, sukai karya, komentar terhadap karya, dan fitur simpan.
</p>

<hr>

<h2>
  Halaman Challenge
</h2>
<img width="1440" height="817" alt="Screenshot 2026-11-20 at 14 11 28" src="https://github.com/user-attachments/assets/114858ac-8fed-41bd-9e49-84dfd024f206" />
<p>
  halaman sebagai tempat curator mempublikasikan challenge yang nantinya di tujukan ke member/seniman. Halaman ini di lengkapi dengan fitur pencarian hingga navigasi untuk challenge-challenge yang sedang berlangsung atau bahkan sudah selesai.
</p>

<hr>

<h2>
  Halaman User Management
</h2>
<img width="1440" height="819" alt="Screenshot 2026-11-20 at 14 13 27" src="https://github.com/user-attachments/assets/0e97787b-f96f-48a6-8e3e-cc8f32998823" />
<p>
  Halaman ini merupakan halaman yang eksklusif hanya untuk akun dengan role admin saja. berisi berbagai fitur mulai dari statistik akun pengguna, manajemen role akun, hingga manajemen karya ataupun challenge.
</p>

<hr>

<h2>
  Halaman My Artwork 
</h2>
<img width="1440" height="819" alt="Screenshot 2026-11-20 at 14 14 50" src="https://github.com/user-attachments/assets/34880ed7-b7cc-4b27-ba2a-8ce3dbf9c37b" />
<p>
  Halaman ini merupakan halaman yang eksklusif hanya untuk akun dengan role member. dilengkapi berbagai fitur untuk manajemen karya dari seniman.
</p>

<hr>

<h2>
  Halaman Overview 
</h2>
<img width="1440" height="817" alt="Screenshot 2026-11-20 at 14 16 00" src="https://github.com/user-attachments/assets/83bb3f53-4f15-4fff-864e-b2bf1a677445" />
<p>
  Halaman ini merupakan halaman yang eksklusif hanya untuk akun dengan role curator. dilengkapi berbagai fitur untuk manajemen challenge.
</p>

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

### 👥 Peran dan Akun
- 🔐 **Lima peran** - Guest, Public, Member, Curator, Admin
- 📨 **Pengajuan Curator** - Public dapat mengajukan, admin menyetujui atau menolak
- 🧑‍💼 **User Management** - Admin mengubah peran dan menghapus akun
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
- Sudah punya data? Jalankan `npm run db:migrate` saja (aman, data tidak diubah).
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

| Peran | Email | Kata sandi |
|---|---|---|
| 👨‍💼 Admin | `admin@archive.id` | `admin123` |
| 🧑‍🎨 Curator | `kurator@archive.id` | `kurator123` |
| 🖌️ Member | `member@archive.id` | `member123` |
| 👤 Public | `publik@archive.id` | `publik123` |
| 👤 Public (pengajuan curator pending) | `nadia@archive.id` | `publik123` |

> 🔒 Untuk produksi, ganti seluruh kata sandi demo dan tambahkan `SHOW_DEMO_LOGIN=0` agar tombol akun demo di halaman login disembunyikan.

### Environment Variables

| Variabel | Fungsi |
|---|---|
| `DATABASE_URL` | Alamat koneksi PostgreSQL |
| `AUTH_SECRET` | Rahasia penanda tangan cookie sesi (minimal 32 karakter acak) |
| `APP_TZ` | Zona waktu untuk menentukan status challenge (aktif atau selesai) |
| `SHOW_DEMO_LOGIN` | Isi `0` untuk menyembunyikan tombol akun demo |

### Perintah npm

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Server pengembangan |
| `npm run build` / `npm start` | Build dan jalankan produksi |
| `npm run db:migrate` | Membuat tabel; pada database yang sudah ada hanya menambah fitur baru tanpa mengubah data |
| `npm run db:seed` | Mengisi data demo (hanya bila tabel `users` kosong) |
| `npm run db:reset` | Hapus semua lalu migrate + seed |
| `npm run db:admin -- email sandi nama` | Membuat kategori awal dan akun admin |
| `npm run db:check` | Memeriksa struktur database dan query halaman |

---

## 📁 Struktur Proyek

### 📂 Direktori Utama

**`src/app/`** - Halaman (server component) dan route API

**`src/components/`** - Tampilan klien, termasuk galeri 3D

**`src/lib/`** - Koneksi database, autentikasi, query, dan validasi

**`db/`** - Skema SQL, skrip upgrade, dan data contoh

**`scripts/`** - Migrasi, seed, pembuat admin, dan pemeriksa database

```
art-archive-next/
├── db/
│   ├── schema.sql                 # skema PostgreSQL
│   ├── upgrade-comments.sql       # sukai & balas komentar
│   ├── upgrade-description.sql    # kolom deskripsi karya
│   ├── seed/arts.json             # data karya contoh
│   └── seed-images/               # gambar contoh
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
│   │   ├── api/                   # 24 route API
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
3. 🔐 **Login** atau **Join** untuk berinteraksi

### 👤 Untuk Public
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
1. 🧑‍💼 **User Management** - Mengubah peran, menyetujui atau menolak pengajuan curator, menghapus akun
2. 🛠️ Mengelola semua karya dan challenge

### 🛡️ Ringkasan Otoritas

| Peran | Akses |
|---|---|
| **Guest** | Beranda, Gallery (lihat saja), Login/Join |
| **Public** | + Profil; suka, favorit, komentar; mengajukan jadi Curator |
| **Member** | + Challenge, My Artwork (CRUD karya sendiri), ikut/tarik submisi |
| **Curator** | + Overview (buat challenge, umumkan pemenang), kelola challenge sendiri |
| **Admin** | + User Management, mengelola semua karya dan challenge |

> Akun admin hanya dibuat lewat `npm run db:admin` atau SQL, tidak lewat pendaftaran.

---

## 📚 Dokumentasi

### 🗄️ Skema Database

| Tabel | Isi |
|---|---|
| `users` | Akun, peran, status pengajuan curator, profil |
| `categories` | Kategori karya |
| `artworks` | Karya (termasuk `description`, `synopsis`, `studio_url`, gambar `bytea`) |
| `likes`, `favorites` | Suka dan favorit karya |
| `comments` | Komentar (`parent_id` untuk balasan) |
| `comment_likes` | Suka pada komentar |
| `challenges` | Challenge dan lampirannya |
| `submissions` | Karya yang diikutsertakan ke challenge |
| `winners` | Pemenang challenge |

### 🖼️ Penyimpanan Gambar

Semua gambar tersimpan di PostgreSQL:
- Foto karya: `artworks.image` (`bytea`) dan `image_mime`
- Lampiran challenge: `challenges.attachment`, `attachment_name`, `attachment_mime`
- Foto profil: `users.avatar` (data URL kecil)

Gambar dikecilkan di browser (maksimal sekitar 900 KB) sebelum diunggah, lalu disajikan lewat `/api/artworks/[id]/image` dan `/api/challenges/[id]/attachment`. Cadangan cukup dengan `pg_dump`.

### 🎛️ Design Tokens

Seluruh gaya berada di `src/app/globals.css` dan memakai token pada `:root`:

| Kelompok | Token |
|---|---|
| Warna | `--bg`, `--paper`, `--ink`, `--terra`, `--olive`, `--c-gold`, `--on-dark*` |
| Tipografi | `--serif`, `--sans`, `--serif-scene`, skala `--fs-11` sampai `--fs-40` |
| Spasi | `--s-4` sampai `--s-96` |
| Radius | `--r-1`, `--r-2`, `--r-3`, `--r-4`, `--r-pill` |
| Shadow | `--sh-sm`, `--sh-md`, `--sh-lg`, `--sh-scene` |
| Transisi | `--t-1`, `--t-2`, `--t-3` |

Ubah nilai token di satu tempat untuk memperbarui seluruh halaman.

### 🔌 Ringkasan API

| Area | Endpoint |
|---|---|
| Autentikasi | `POST /api/auth/login`, `/register`, `/logout` |
| Karya | `POST /api/artworks`, `PATCH/DELETE /api/artworks/[id]`, `/like`, `/favorite`, `/comments` (daftar dan kirim komentar), `/image` |
| Komentar | `DELETE /api/comments/[id]`, `POST /api/comments/[id]/like` |
| Challenge | `POST /api/challenges`, `PATCH/DELETE /api/challenges/[id]`, `/join`, `/close`, `/winners`, `/attachment` |
| Submisi | `/api/submissions/[id]` |
| Pengguna | `/api/users/[id]`, `/api/users/[id]/curator` |
| Akun sendiri | `/api/me/profile`, `/me/account`, `/me/curator-request` (hapus akun mandiri dinonaktifkan; hanya admin yang dapat menghapus akun) |

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
- ✅ User Management: ubah peran dan setujui atau tolak pengajuan curator
- ✅ Tampilan responsif di lebar 1440, 820, dan 390 px

---

## 🆘 Masalah Umum

| Pesan | Penyebab dan solusi |
|---|---|
| `password authentication failed` | Kata sandi di `DATABASE_URL` salah |
| `ECONNREFUSED` | PostgreSQL belum berjalan, atau port berbeda |
| `database "..." does not exist` | Database belum dibuat, nama di URL berbeda, atau file `.env` tidak terbaca (periksa file `.env` berada di folder yang sama dengan `package.json`) |
| `Cannot find module 'pg'` | Jalankan `npm install` |
| `Internal Server Error` di satu halaman | Jalankan `npm run db:check`, lalu lihat pesan error di terminal tempat `npm run dev` berjalan |

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

![GitHub](https://img.shields.io/badge/GitHub-Eriz157-181717?style=for-the-badge&logo=github&logoColor=white) [Eriz157](https://github.com/Eriz157)

![Project](https://img.shields.io/badge/Project-Link-FF6B6B?style=for-the-badge&logo=link&logoColor=white) : [https://github.com/Eriz157/finalWebRiz](https://github.com/Eriz157/finalWebRiz)

---





