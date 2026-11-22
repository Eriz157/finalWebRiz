-- The Art Archive — skema PostgreSQL
CREATE TABLE users (
  id              integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name            varchar(60)  NOT NULL,
  email           varchar(190) NOT NULL,
  password_hash   text         NOT NULL,
  role            varchar(10)  NOT NULL DEFAULT 'public' CHECK (role IN ('public','member','curator','admin')),
  curator_status  varchar(10)  CHECK (curator_status IN ('pending','rejected')),
  bio             varchar(240) NOT NULL DEFAULT '',
  avatar          text         NOT NULL DEFAULT '',
  instagram       text         NOT NULL DEFAULT '',
  behance         text         NOT NULL DEFAULT '',
  website         text         NOT NULL DEFAULT '',
  created_at      timestamptz  NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX users_email_key ON users (lower(email));

CREATE TABLE categories (
  slug   varchar(40) PRIMARY KEY,
  label  varchar(60) NOT NULL UNIQUE,
  color  varchar(9)  NOT NULL
);

CREATE TABLE artworks (
  id          integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  owner_id    integer NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title       varchar(120) NOT NULL,
  painter     varchar(80)  NOT NULL,
  synopsis    text         NOT NULL,
  description varchar(240) NOT NULL DEFAULT '',
  category    varchar(40)  NOT NULL REFERENCES categories(slug),
  studio_url  text         NOT NULL DEFAULT '',
  image_file  varchar(80)  NOT NULL,  -- nama berkas di folder uploads/artworks
  image_mime  varchar(30)  NOT NULL,
  is_example  boolean      NOT NULL DEFAULT false,
  created_at  timestamptz  NOT NULL DEFAULT now()
);
CREATE INDEX artworks_owner_idx ON artworks (owner_id);

CREATE TABLE likes (
  user_id     integer NOT NULL REFERENCES users(id)    ON DELETE CASCADE,
  artwork_id  integer NOT NULL REFERENCES artworks(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, artwork_id)
);
CREATE TABLE favorites (
  user_id     integer NOT NULL REFERENCES users(id)    ON DELETE CASCADE,
  artwork_id  integer NOT NULL REFERENCES artworks(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, artwork_id)
);
CREATE TABLE comments (
  id          integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  artwork_id  integer NOT NULL REFERENCES artworks(id) ON DELETE CASCADE,
  user_id     integer NOT NULL REFERENCES users(id)    ON DELETE CASCADE,
  body        varchar(500) NOT NULL,
  parent_id   integer REFERENCES comments(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX comments_artwork_idx ON comments (artwork_id, created_at);
CREATE TABLE comment_likes (
  user_id     integer NOT NULL REFERENCES users(id)    ON DELETE CASCADE,
  comment_id  integer NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, comment_id)
);

CREATE TABLE challenges (
  id               integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  owner_id         integer NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title            varchar(100) NOT NULL,
  description      text NOT NULL,
  rules            text NOT NULL DEFAULT '',
  prize            varchar(120) NOT NULL DEFAULT '',
  start_date       date NOT NULL,
  end_date         date NOT NULL,
  attachment       bytea,
  attachment_name  varchar(200),
  attachment_mime  varchar(60),
  closed           boolean NOT NULL DEFAULT false,
  announced_at     timestamptz,
  created_at       timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT challenges_dates_chk CHECK (end_date > start_date)
);

CREATE TABLE submissions (
  id            integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  challenge_id  integer NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
  artwork_id    integer NOT NULL REFERENCES artworks(id)   ON DELETE CASCADE,
  user_id       integer NOT NULL REFERENCES users(id)      ON DELETE CASCADE,
  score_creativity  smallint CHECK (score_creativity  BETWEEN 1 AND 100),
  score_technique   smallint CHECK (score_technique   BETWEEN 1 AND 100),
  score_originality smallint CHECK (score_originality BETWEEN 1 AND 100),
  score_aesthetics  smallint CHECK (score_aesthetics  BETWEEN 1 AND 100),
  score         numeric(5,2) CHECK (score BETWEEN 0 AND 100),  -- total berbobot 30/25/25/20
  note          varchar(200) NOT NULL DEFAULT '',
  created_at    timestamptz NOT NULL DEFAULT now(),
  UNIQUE (challenge_id, user_id)
);
CREATE INDEX submissions_challenge_idx ON submissions (challenge_id);

CREATE TABLE winners (
  challenge_id   integer  NOT NULL REFERENCES challenges(id)  ON DELETE CASCADE,
  rank           smallint NOT NULL CHECK (rank BETWEEN 1 AND 3),
  submission_id  integer  NOT NULL REFERENCES submissions(id) ON DELETE CASCADE,
  PRIMARY KEY (challenge_id, submission_id)  -- satu karya satu peringkat; boleh beberapa karya sama peringkat (juara bersama)
);

-- @account_requests (tabel terakhir; migrate.js membuatnya sendiri pada database lama)
-- Permintaan admin yang harus disetujui pemilik akun: ubah nama/email, atau reset kata sandi ke bawaan.
CREATE TABLE account_requests (
  id          integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id     integer NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  admin_id    integer REFERENCES users(id) ON DELETE SET NULL,
  kind        varchar(16) NOT NULL CHECK (kind IN ('profile','password_reset')),
  new_name    varchar(60),
  new_email   varchar(190),
  status      varchar(10) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected','dismissed')),
  revealed    boolean NOT NULL DEFAULT false,  -- kata sandi bawaan sudah dilihat pemilik akun
  created_at  timestamptz NOT NULL DEFAULT now(),
  decided_at  timestamptz
);
CREATE INDEX account_requests_user_idx ON account_requests (user_id);
