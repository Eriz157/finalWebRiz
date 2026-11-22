-- ============================================================
-- Data demo The Art Archive (semua tabel; gambar ada di folder uploads/artworks).
-- Syarat: tabel sudah dibuat dari db/schema.sql dan masih KOSONG.
-- Cara pakai (terminal):  psql "DATABASE_URL_ANDA" -f db/data-demo.sql
-- Akun demo: admin@archive.id / admin123, kurator@archive.id / kurator123,
--            member@archive.id / member123, publik@archive.id / publik123
-- Gambar contoh (demo-*.jpg) ada di folder uploads/artworks/ dan ikut di repository.
-- ============================================================
BEGIN;

--
-- PostgreSQL database dump
--

\restrict 52HdTEIYCdIc2gKv0hWYRzJf2Zn9L6p20mbUZQAQ8rnsAkkZKXat6qCF2CPga0R

-- Dumped from database version 16.15 (Ubuntu 16.15-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.15 (Ubuntu 16.15-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

SET SESSION AUTHORIZATION DEFAULT;

ALTER TABLE public.categories DISABLE TRIGGER ALL;

INSERT INTO public.categories (slug, label, color) VALUES ('agamograph', 'Agamograph', '#c8872e');
INSERT INTO public.categories (slug, label, color) VALUES ('anamorphic-shadow', 'Anamorphic Shadow', '#4a5b94');
INSERT INTO public.categories (slug, label, color) VALUES ('anamorphic-color', 'Anamorphic Color', '#c04a73');
INSERT INTO public.categories (slug, label, color) VALUES ('classic', 'Classic', '#7a6648');


ALTER TABLE public.categories ENABLE TRIGGER ALL;

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

ALTER TABLE public.users DISABLE TRIGGER ALL;

INSERT INTO public.users (id, name, email, password_hash, role, curator_status, bio, avatar, instagram, behance, website, created_at) OVERRIDING SYSTEM VALUE VALUES (1, 'Admin Archive', 'admin@archive.id', '$2b$10$H5ykFx1Ro9ReCF8NpdqQpeJ4v7bggnC3MS3d2hdRFfkfa3x6SlsNO', 'admin', NULL, 'Penjaga integritas arsip: mengelola akun, karya, dan challenge.', '', '', '', '', '2026-07-23 22:42:38.727801+00');
INSERT INTO public.users (id, name, email, password_hash, role, curator_status, bio, avatar, instagram, behance, website, created_at) OVERRIDING SYSTEM VALUE VALUES (4, 'Bima Saputra', 'bima@archive.id', '$2b$10$iQlRGUcK2V7a3dp0Mjg96OioSkUeVA/21uDRShhRXek1Ni6QmAisy', 'member', NULL, 'Bereksperimen dengan optik: agamograph dan anamorfosis.', '', '', '', '', '2026-09-17 22:42:38.727801+00');
INSERT INTO public.users (id, name, email, password_hash, role, curator_status, bio, avatar, instagram, behance, website, created_at) OVERRIDING SYSTEM VALUE VALUES (5, 'Rizky Pratama', 'rizky@archive.id', '$2b$10$1aWDKxmxpukLPssjFwQ4heks1bR/LDA9oIpOeGm3kYIfr09q1yvQe', 'member', NULL, 'Pelukis klasik yang sering kembali ke senja.', '', '', '', '', '2026-09-23 22:42:38.727801+00');
INSERT INTO public.users (id, name, email, password_hash, role, curator_status, bio, avatar, instagram, behance, website, created_at) OVERRIDING SYSTEM VALUE VALUES (6, 'Sari Wulandari', 'sari@archive.id', '$2b$10$VV4gD3rkwR4Aq3zT2LA4du3ZhQ.VKasrBwNzeDwOS2KxAzLO5Hyr6', 'member', NULL, 'Bermain dengan bayangan, jarak, dan sudut pandang.', '', '', '', '', '2026-10-11 22:42:38.727801+00');
INSERT INTO public.users (id, name, email, password_hash, role, curator_status, bio, avatar, instagram, behance, website, created_at) OVERRIDING SYSTEM VALUE VALUES (7, 'Andi Pengunjung', 'publik@archive.id', '$2b$10$geJLq2IalGgWqa041rwQ9OuS4XvnNMeZL9.jPo2btsGoHagjRcRmu', 'public', NULL, 'Penikmat seni yang gemar berkeliling galeri.', '', '', '', '', '2026-10-21 22:42:38.727801+00');
INSERT INTO public.users (id, name, email, password_hash, role, curator_status, bio, avatar, instagram, behance, website, created_at) OVERRIDING SYSTEM VALUE VALUES (8, 'Nadia Putri', 'nadia@archive.id', '$2b$10$kQrd5G2CsQCYd7lGJ3/m8eIIankzqPFyCP.ddVp91b.tfsCpWKJDK', 'public', 'pending', 'Penggiat komunitas seni kampus.', '', '', '', '', '2026-11-17 22:42:38.727801+00');
INSERT INTO public.users (id, name, email, password_hash, role, curator_status, bio, avatar, instagram, behance, website, created_at) OVERRIDING SYSTEM VALUE VALUES (3, 'Rina Maharani', 'member@archive.id', '$2b$10$kwvVMsNG73yc44taOZV0Ee5wAMBPSXGB2vldWrPf6HX5QOExZTaIu', 'member', NULL, 'Ilustrator lanskap dan potret. Suka warna hangat dan cahaya sore.', '', 'https://instagram.com/rina.maharani', 'https://behance.net/rinamaharani', '', '2026-09-11 22:42:38.727801+00');
INSERT INTO public.users (id, name, email, password_hash, role, curator_status, bio, avatar, instagram, behance, website, created_at) OVERRIDING SYSTEM VALUE VALUES (2, 'Dimas Kurator', 'kurator@archive.id', '$2b$10$b3O/UPMy7vFUwGLyE.osEunpdBmNERPnj8M8XZ0QJsN8ZtRmLgFnG', 'curator', NULL, 'Kurator independen. Fokus pada seni digital, cahaya, dan perspektif.', '', 'https://instagram.com/dimas.kurator', '', '', '2026-08-22 22:42:38.727801+00');


ALTER TABLE public.users ENABLE TRIGGER ALL;

--
-- Data for Name: artworks; Type: TABLE DATA; Schema: public; Owner: -
--

ALTER TABLE public.artworks DISABLE TRIGGER ALL;

INSERT INTO public.artworks (id, owner_id, title, painter, synopsis, description, category, studio_url, image_file, image_mime, is_example, created_at) OVERRIDING SYSTEM VALUE VALUES (1, 5, 'Senja di Ujung Dunia', 'Rizky Pratama', 'Ketika matahari mulai tenggelam, dunia seakan berhenti sejenak. Karya ini menangkap keindahan momen senja sebagai simbol harapan di penghujung perjalanan.', 'Siluet senja yang tenang: langit jingga perlahan menelan hari, mengajak kita berhenti sejenak dan bernapas.', 'classic', 'https://example.com/studio-view', 'demo-c01-senja.jpg', 'image/jpeg', true, '2026-08-12 22:42:38.727801+00');
INSERT INTO public.artworks (id, owner_id, title, painter, synopsis, description, category, studio_url, image_file, image_mime, is_example, created_at) OVERRIDING SYSTEM VALUE VALUES (2, 3, 'Fajar di Pegunungan', 'Rina Maharani', 'Contoh karya klasik. Lapisan punggung gunung yang makin biru menjauh menggambarkan jarak dan udara pagi.', 'Lapisan punggung gunung yang makin biru menjauh, diselimuti udara dingin dan cahaya pertama pagi.', 'classic', '', 'demo-c02-fajar.jpg', 'image/jpeg', true, '2026-08-13 22:42:38.727801+00');
INSERT INTO public.artworks (id, owner_id, title, painter, synopsis, description, category, studio_url, image_file, image_mime, is_example, created_at) OVERRIDING SYSTEM VALUE VALUES (3, 3, 'Cincin Warna', 'Rina Maharani', 'Contoh karya anamorphic color. Lingkaran-lingkaran warna yang saling tumpang tindih menjadi satu bentuk utuh dari sudut pandang tertentu.', 'Lingkaran warna yang saling tumpang tindih; dari satu sudut pandang yang tepat, semuanya menyatu menjadi bentuk utuh.', 'anamorphic-color', 'https://example.com/studio-view', 'demo-c03-cincin.jpg', 'image/jpeg', true, '2026-08-14 22:42:38.727801+00');
INSERT INTO public.artworks (id, owner_id, title, painter, synopsis, description, category, studio_url, image_file, image_mime, is_example, created_at) OVERRIDING SYSTEM VALUE VALUES (4, 4, 'Danau Malam', 'Bima Saputra', 'Contoh karya klasik. Bulan penuh dan pantulannya di danau yang tenang.', 'Bulan penuh dan pantulannya di permukaan danau yang tenang, tanpa satu riak pun.', 'classic', '', 'demo-c04-danau.jpg', 'image/jpeg', true, '2026-08-15 22:42:38.727801+00');
INSERT INTO public.artworks (id, owner_id, title, painter, synopsis, description, category, studio_url, image_file, image_mime, is_example, created_at) OVERRIDING SYSTEM VALUE VALUES (5, 4, 'Garis Berpindah', 'Bima Saputra', 'Contoh karya agamograph. Dua gambar disusun dalam garis-garis tipis, sehingga warnanya berubah ketika dilihat dari kiri atau kanan.', 'Dua gambar dalam satu bidang garis tipis; ubah sudut pandangmu dan gambarnya pun berganti.', 'agamograph', '', 'demo-c05-garis.jpg', 'image/jpeg', true, '2026-08-16 22:42:38.727801+00');
INSERT INTO public.artworks (id, owner_id, title, painter, synopsis, description, category, studio_url, image_file, image_mime, is_example, created_at) OVERRIDING SYSTEM VALUE VALUES (6, 6, 'Bayangan Panjang', 'Sari Wulandari', 'Contoh karya anamorphic shadow. Sebuah botol dan bola melemparkan bayangan panjang di lantai.', 'Botol dan bola melemparkan bayangan yang, dari sudut tertentu, menyusun rupa yang sama sekali berbeda.', 'anamorphic-shadow', '', 'demo-c06-bayangan.jpg', 'image/jpeg', true, '2026-08-17 22:42:38.727801+00');
INSERT INTO public.artworks (id, owner_id, title, painter, synopsis, description, category, studio_url, image_file, image_mime, is_example, created_at) OVERRIDING SYSTEM VALUE VALUES (7, 5, 'Bukit Siang', 'Rizky Pratama', 'Contoh karya klasik. Bukit hijau berlapis di bawah awan tipis siang hari.', 'Bukit hijau berlapis di bawah awan tipis, hangat dan lapang seperti siang yang enggan cepat usai.', 'classic', '', 'demo-c07-bukit.jpg', 'image/jpeg', true, '2026-08-18 22:42:38.727801+00');
INSERT INTO public.artworks (id, owner_id, title, painter, synopsis, description, category, studio_url, image_file, image_mime, is_example, created_at) OVERRIDING SYSTEM VALUE VALUES (8, 3, 'Ekspresi dalam Warna', 'Rina Maharani', 'Menggambarkan keberagaman emosi dan identitas manusia melalui perpaduan warna yang berani dan ekspresif.', 'Potret wajah bergaya Pop Art dengan kombinasi warna cerah dan kontras. Setiap bidang warna merepresentasikan keunikan serta kompleksitas karakter manusia.', 'anamorphic-color', '', 'demo-c08-ekspresi.jpg', 'image/jpeg', true, '2026-08-19 22:42:38.727801+00');
INSERT INTO public.artworks (id, owner_id, title, painter, synopsis, description, category, studio_url, image_file, image_mime, is_example, created_at) OVERRIDING SYSTEM VALUE VALUES (9, 6, 'Fragmen Keabadian', 'Sari Wulandari', 'Menggambarkan keindahan yang tetap memiliki makna meskipun telah mengalami kerusakan dan perubahan oleh waktu.', 'Ilustrasi patung klasik yang terfragmentasi dengan teknik stippling hitam putih. Retakan dan detail titik-titik menciptakan kesan klasik sekaligus misterius.', 'anamorphic-shadow', '', 'demo-c09-fragmen.jpg', 'image/jpeg', true, '2026-08-20 22:42:38.727801+00');
INSERT INTO public.artworks (id, owner_id, title, painter, synopsis, description, category, studio_url, image_file, image_mime, is_example, created_at) OVERRIDING SYSTEM VALUE VALUES (10, 4, 'Cahaya di Balik Badai', 'Bima Saputra', 'Melambangkan harapan dan keteguhan dalam menghadapi berbagai tantangan kehidupan.', 'Sebuah mercusuar berdiri kokoh di tengah awan gelap dengan pancaran cahaya keemasan. Kontras gelap dan terang menggambarkan harapan di tengah kesulitan.', 'agamograph', '', 'demo-c10-mercusuar.jpg', 'image/jpeg', true, '2026-08-21 22:42:38.727801+00');


ALTER TABLE public.artworks ENABLE TRIGGER ALL;

--
-- Data for Name: challenges; Type: TABLE DATA; Schema: public; Owner: -
--

ALTER TABLE public.challenges DISABLE TRIGGER ALL;

INSERT INTO public.challenges (id, owner_id, title, description, rules, prize, start_date, end_date, attachment, attachment_name, attachment_mime, closed, announced_at, created_at) OVERRIDING SYSTEM VALUE VALUES (1, 2, 'Cahaya di Ujung Hari', 'Tangkap momen ketika cahaya berubah: senja, fajar, atau lampu pertama yang menyala. Kami mencari karya yang membuat penonton ikut menahan napas.

Boleh bergaya klasik maupun optik.', 'Satu karya per member.
Karya orisinal, belum pernah menang di kompetisi lain.
Cantumkan sinopsis singkat tentang sumber cahayanya.', 'Rp 2.000.000 + pajangan utama selama sebulan', '2026-11-13', '2026-12-11', NULL, NULL, NULL, false, NULL, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.challenges (id, owner_id, title, description, rules, prize, start_date, end_date, attachment, attachment_name, attachment_mime, closed, announced_at, created_at) OVERRIDING SYSTEM VALUE VALUES (2, 2, 'Ilusi Sudut Pandang', 'Karya yang baru utuh dari satu titik pandang: anamorfosis bayangan, anamorfosis warna, atau agamograph. Tunjukkan bagaimana jarak mengubah makna.', 'Kategori Agamograph, Anamorphic Shadow, atau Anamorphic Color.
Lengkapi Studio View bila tersedia.', 'Voucher alat gambar Rp 1.500.000', '2026-11-17', '2026-11-29', NULL, NULL, NULL, false, NULL, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.challenges (id, owner_id, title, description, rules, prize, start_date, end_date, attachment, attachment_name, attachment_mime, closed, announced_at, created_at) OVERRIDING SYSTEM VALUE VALUES (4, 2, 'Warna Tanpa Batas', 'Open call berikutnya: eksplorasi palet berani. Pendaftaran dibuka sebentar lagi, siapkan karyamu.', 'Detail aturan akan diumumkan saat challenge dimulai.', 'Akan diumumkan', '2026-11-26', '2026-12-26', NULL, NULL, NULL, false, NULL, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.challenges (id, owner_id, title, description, rules, prize, start_date, end_date, attachment, attachment_name, attachment_mime, closed, announced_at, created_at) OVERRIDING SYSTEM VALUE VALUES (3, 2, 'Lanskap Nusantara', 'Pegunungan, danau, bukit, dan langit Nusantara dalam sapuan kuasmu. Challenge ini sudah selesai dan pemenangnya telah diumumkan.', 'Tema bebas selama lanskap Indonesia.', 'Piagam kurator + e-book koleksi seni', '2026-09-21', '2026-11-10', NULL, NULL, NULL, false, '2026-11-11 22:42:38.727801+00', '2026-11-20 22:42:38.727801+00');


ALTER TABLE public.challenges ENABLE TRIGGER ALL;

--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: -
--

ALTER TABLE public.comments DISABLE TRIGGER ALL;

INSERT INTO public.comments (id, artwork_id, user_id, body, parent_id, created_at) OVERRIDING SYSTEM VALUE VALUES (1, 1, 2, 'Warna senjanya hangat sekali. Gradasi langitnya terasa jujur.', NULL, '2026-11-14 22:42:38.727801+00');
INSERT INTO public.comments (id, artwork_id, user_id, body, parent_id, created_at) OVERRIDING SYSTEM VALUE VALUES (2, 3, 7, 'Dari depan cincinnya benar-benar utuh. Keren!', NULL, '2026-11-17 22:42:38.727801+00');
INSERT INTO public.comments (id, artwork_id, user_id, body, parent_id, created_at) OVERRIDING SYSTEM VALUE VALUES (3, 3, 4, 'Pemisahan lapisannya rapi. Boleh tahu jarak lampunya?', NULL, '2026-11-18 22:42:38.727801+00');
INSERT INTO public.comments (id, artwork_id, user_id, body, parent_id, created_at) OVERRIDING SYSTEM VALUE VALUES (4, 6, 3, 'Bayangannya panjang dan dramatis.', NULL, '2026-11-19 22:42:38.727801+00');
INSERT INTO public.comments (id, artwork_id, user_id, body, parent_id, created_at) OVERRIDING SYSTEM VALUE VALUES (5, 3, 3, 'Sekitar 80 cm dari bidang pertama, lampunya sejajar dengan mata penonton.', 3, '2026-11-19 10:42:38.727801+00');


ALTER TABLE public.comments ENABLE TRIGGER ALL;

--
-- Data for Name: comment_likes; Type: TABLE DATA; Schema: public; Owner: -
--

ALTER TABLE public.comment_likes DISABLE TRIGGER ALL;

INSERT INTO public.comment_likes (user_id, comment_id, created_at) VALUES (7, 3, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.comment_likes (user_id, comment_id, created_at) VALUES (2, 3, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.comment_likes (user_id, comment_id, created_at) VALUES (3, 1, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.comment_likes (user_id, comment_id, created_at) VALUES (7, 1, '2026-11-20 22:42:38.727801+00');


ALTER TABLE public.comment_likes ENABLE TRIGGER ALL;

--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: -
--

ALTER TABLE public.favorites DISABLE TRIGGER ALL;

INSERT INTO public.favorites (user_id, artwork_id, created_at) VALUES (7, 3, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.favorites (user_id, artwork_id, created_at) VALUES (7, 1, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.favorites (user_id, artwork_id, created_at) VALUES (3, 5, '2026-11-20 22:42:38.727801+00');


ALTER TABLE public.favorites ENABLE TRIGGER ALL;

--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--

ALTER TABLE public.likes DISABLE TRIGGER ALL;

INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (3, 1, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (4, 1, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (6, 1, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (7, 1, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (2, 1, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (5, 2, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (4, 2, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (7, 2, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (5, 3, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (3, 3, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (4, 3, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (6, 3, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (7, 3, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (2, 3, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (3, 4, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (6, 5, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (7, 5, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (5, 6, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (3, 6, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (7, 6, '2026-11-20 22:42:38.727801+00');
INSERT INTO public.likes (user_id, artwork_id, created_at) VALUES (4, 7, '2026-11-20 22:42:38.727801+00');


ALTER TABLE public.likes ENABLE TRIGGER ALL;

--
-- Data for Name: submissions; Type: TABLE DATA; Schema: public; Owner: -
--

ALTER TABLE public.submissions DISABLE TRIGGER ALL;

INSERT INTO public.submissions (id, challenge_id, artwork_id, user_id, score_creativity, score_technique, score_originality, score_aesthetics, score, note, created_at) OVERRIDING SYSTEM VALUE VALUES (1, 1, 1, 5, NULL, NULL, NULL, NULL, NULL, '', '2026-11-20 22:42:38.727801+00');
INSERT INTO public.submissions (id, challenge_id, artwork_id, user_id, score_creativity, score_technique, score_originality, score_aesthetics, score, note, created_at) OVERRIDING SYSTEM VALUE VALUES (2, 2, 3, 3, NULL, NULL, NULL, NULL, NULL, '', '2026-11-20 22:42:38.727801+00');
INSERT INTO public.submissions (id, challenge_id, artwork_id, user_id, score_creativity, score_technique, score_originality, score_aesthetics, score, note, created_at) OVERRIDING SYSTEM VALUE VALUES (3, 2, 5, 4, NULL, NULL, NULL, NULL, NULL, '', '2026-11-20 22:42:38.727801+00');
INSERT INTO public.submissions (id, challenge_id, artwork_id, user_id, score_creativity, score_technique, score_originality, score_aesthetics, score, note, created_at) OVERRIDING SYSTEM VALUE VALUES (4, 2, 6, 6, NULL, NULL, NULL, NULL, NULL, '', '2026-11-20 22:42:38.727801+00');
INSERT INTO public.submissions (id, challenge_id, artwork_id, user_id, score_creativity, score_technique, score_originality, score_aesthetics, score, note, created_at) OVERRIDING SYSTEM VALUE VALUES (5, 3, 4, 4, 95, 90, 90, 90, 91.50, 'Nuansa malamnya tenang dan dalam.', '2026-11-20 22:42:38.727801+00');
INSERT INTO public.submissions (id, challenge_id, artwork_id, user_id, score_creativity, score_technique, score_originality, score_aesthetics, score, note, created_at) OVERRIDING SYSTEM VALUE VALUES (6, 3, 7, 5, 88, 84, 86, 85, 85.90, 'Lapisan bukit terbaca jelas.', '2026-11-20 22:42:38.727801+00');
INSERT INTO public.submissions (id, challenge_id, artwork_id, user_id, score_creativity, score_technique, score_originality, score_aesthetics, score, note, created_at) OVERRIDING SYSTEM VALUE VALUES (7, 3, 2, 3, 80, 82, 82, 81, 81.20, 'Udara pagi terasa, warna bisa lebih berani.', '2026-11-20 22:42:38.727801+00');


ALTER TABLE public.submissions ENABLE TRIGGER ALL;

--
-- Data for Name: winners; Type: TABLE DATA; Schema: public; Owner: -
--

ALTER TABLE public.winners DISABLE TRIGGER ALL;

INSERT INTO public.winners (challenge_id, rank, submission_id) VALUES (3, 1, 5);
INSERT INTO public.winners (challenge_id, rank, submission_id) VALUES (3, 2, 6);
INSERT INTO public.winners (challenge_id, rank, submission_id) VALUES (3, 3, 7);


ALTER TABLE public.winners ENABLE TRIGGER ALL;

--
-- Name: artworks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.artworks_id_seq', 10, true);


--
-- Name: challenges_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.challenges_id_seq', 4, true);


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.comments_id_seq', 5, true);


--
-- Name: submissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.submissions_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 8, true);


--
-- PostgreSQL database dump complete
--

\unrestrict 52HdTEIYCdIc2gKv0hWYRzJf2Zn9L6p20mbUZQAQ8rnsAkkZKXat6qCF2CPga0R


COMMIT;
