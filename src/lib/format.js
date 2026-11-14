export const ROLE_LABEL = { admin: 'Admin', curator: 'Curator', member: 'Member', public: 'Public' };
export const CH_LABEL = { soon: 'Akan datang', active: 'Aktif', ended: 'Selesai' };
export const pad2 = (n) => (n < 10 ? '0' : '') + n;
export const initials = (n) => { const p = String(n || '?').trim().split(/\s+/); return ((p[0] || '?').charAt(0) + (p[1] ? p[1].charAt(0) : '')).toUpperCase(); };
export function fmtDate(x) {
  const d = typeof x === 'string' && x.length === 10 ? new Date(x + 'T12:00:00') : new Date(x);
  try { return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }); } catch { return String(x); }
}
export function relTime(iso) {
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  if (s < 60) return 'baru saja'; if (s < 3600) return Math.floor(s / 60) + ' mnt lalu';
  if (s < 86400) return Math.floor(s / 3600) + ' jam lalu'; if (s < 2592000) return Math.floor(s / 86400) + ' hari lalu';
  return fmtDate(iso);
}
const DAY = 864e5;
export function chWhen(c) {
  const t = Date.now();
  if (c.status === 'soon') return 'Mulai dalam ' + Math.max(1, Math.ceil((new Date(c.start + 'T00:00:00').getTime() - t) / DAY)) + ' hari';
  if (c.status === 'active') { const d = Math.ceil((new Date(c.end + 'T23:59:59').getTime() - t) / DAY); return d <= 1 ? 'Berakhir hari ini' : 'Berakhir dalam ' + d + ' hari'; }
  return c.closed ? 'Ditutup lebih awal' : 'Berakhir ' + fmtDate(c.end);
}
export const todayIso = () => { const d = new Date(); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); };
export const plusDays = (n) => { const d = new Date(Date.now() + n * DAY); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); };
const PALS = [['#c4977d', '#8c4b33'], ['#8d9a76', '#4d5b3d'], ['#d9bd8c', '#a9803f'], ['#97a3ad', '#566573'], ['#cc9391', '#8f4a52']];
const hashN = (s) => { let h = 0; s = String(s); for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
export function bannerStyle(c) {
  if (c.banner) return { backgroundImage: `url('${c.banner}')` };
  const p = PALS[hashN('ch' + c.id) % PALS.length];
  return { backgroundImage: `linear-gradient(120deg,${p[0]},${p[1]})` };
}
export function patCircles(id) {
  const h = hashN('ch' + id), cx = 60 + (h % 280), cy = 40 + ((h >> 3) % 100);
  return [1, 2, 3, 4, 5].map((i) => ({ cx, cy, r: i * i * 3 + 16 }));
}
