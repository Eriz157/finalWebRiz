// Helper penangguhan akun (tanpa dependensi, aman diimpor dari mana saja).
// Penangguhan aktif bila suspended_at terisi dan batasnya belum lewat (atau tanpa batas).
export function isSuspended(row, now = Date.now()) {
  return !!row.suspended_at && (!row.suspended_until || new Date(row.suspended_until).getTime() > now);
}
export function fmtRemaining(ms) {
  const t = Math.max(0, Math.ceil(ms / 1000));
  const p = (n) => String(n).padStart(2, '0');
  return `${p(Math.floor(t / 3600))}:${p(Math.floor((t % 3600) / 60))}:${p(t % 60)}`;
}
export function suspendedMessage(row) {
  if (!row.suspended_until) return 'Akun anda ditangguhkan selama batas waktu yang tidak ditentukan, mohon maaf atas ketidaknyamanannya.';
  return `Akun anda ditangguhkan selama ${fmtRemaining(new Date(row.suspended_until).getTime() - Date.now())}, mohon maaf atas ketidaknyamanannya.`;
}
