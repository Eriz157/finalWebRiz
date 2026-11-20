-- Aman dijalankan berulang kali: menambah atribut "deskripsi" (teks singkat di halaman pertama Gallery).
ALTER TABLE artworks ADD COLUMN IF NOT EXISTS description varchar(240) NOT NULL DEFAULT '';
