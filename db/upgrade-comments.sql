-- Aman dijalankan berulang kali: menambah fitur sukai & balas komentar pada database yang sudah ada.
ALTER TABLE comments ADD COLUMN IF NOT EXISTS parent_id integer REFERENCES comments(id) ON DELETE CASCADE;
CREATE TABLE IF NOT EXISTS comment_likes (
  user_id     integer NOT NULL REFERENCES users(id)    ON DELETE CASCADE,
  comment_id  integer NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, comment_id)
);
