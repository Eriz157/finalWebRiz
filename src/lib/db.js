import pg from 'pg';

// Tanggal (DATE) dikembalikan apa adanya sebagai 'YYYY-MM-DD', dan COUNT sebagai angka biasa.
pg.types.setTypeParser(1082, (v) => v);
pg.types.setTypeParser(20, (v) => parseInt(v, 10));

const g = globalThis;
export const pool =
  g.__artArchivePool ||
  (g.__artArchivePool = new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 10 }));

export const query = (text, params) => pool.query(text, params);

export async function tx(fn) {
  const c = await pool.connect();
  try {
    await c.query('BEGIN');
    const r = await fn((t, p) => c.query(t, p));
    await c.query('COMMIT');
    return r;
  } catch (e) {
    await c.query('ROLLBACK');
    throw e;
  } finally {
    c.release();
  }
}

// Tanggal "hari ini" menurut zona waktu aplikasi (bukan zona server), untuk status challenge.
export function todayStr() {
  const tz = process.env.APP_TZ || 'Asia/Makassar';
  return new Intl.DateTimeFormat('en-CA', { timeZone: tz }).format(new Date());
}
