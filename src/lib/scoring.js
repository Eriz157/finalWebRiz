// Aturan penilaian challenge (dipakai server dan browser, tanpa dependensi).
// Total = rata-rata berbobot. Seri dipecahkan berurutan: kreativitas → orisinalitas → teknik → estetika.
// Jika semuanya masih sama persis, karya dinyatakan juara bersama.
export const CRITERIA = [
  { key: 'creativity', col: 'score_creativity', label: 'Kreativitas', weight: 30 },
  { key: 'technique', col: 'score_technique', label: 'Teknik', weight: 25 },
  { key: 'originality', col: 'score_originality', label: 'Orisinalitas', weight: 25 },
  { key: 'aesthetics', col: 'score_aesthetics', label: 'Estetika', weight: 20 },
];
export const TIE_ORDER = ['creativity', 'originality', 'technique', 'aesthetics'];

export const validPart = (v) => Number.isInteger(v) && v >= 1 && v <= 100;
export const hasAll = (s) => !!s && CRITERIA.every((c) => validPart(s[c.key]));

// Total dikali 100 (bilangan bulat, tanpa galat pembulatan desimal).
export const total100 = (s) => CRITERIA.reduce((a, c) => a + c.weight * s[c.key], 0);
export const totalOf = (s) => total100(s) / 100;
export const fmtScore = (n) => (n == null ? '—' : (Math.round(n * 100) / 100).toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 2 }));

// Kunci urut: total, lalu kriteria sesuai prioritas. Lebih besar = lebih baik.
export const sortKey = (s) => [total100(s), ...TIE_ORDER.map((k) => s[k])];
export function cmpKeys(a, b) { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; }
// > 0: a lebih baik dari b, 0: sama persis.
export const cmpSubs = (a, b) => cmpKeys(sortKey(a), sortKey(b));

// Peringkat kompetisi (1,1,3,...) untuk karya yang sudah dinilai lengkap. Mengembalikan Map id → peringkat.
export function standings(subs) {
  const done = subs.filter(hasAll).sort((a, b) => cmpSubs(b, a));
  const out = new Map();
  done.forEach((s, i) => out.set(s.id, i > 0 && cmpSubs(done[i - 1], s) === 0 ? out.get(done[i - 1].id) : i + 1));
  return { order: done, place: out };
}

// Isi otomatis: semua karya yang peringkatnya ≤ 3 (bisa lebih dari tiga bila seri persis).
export function autoWinners(subs) {
  const { order, place } = standings(subs);
  const w = { 1: [], 2: [], 3: [] };
  order.forEach((s) => { const p = place.get(s.id); if (p <= 3) w[p].push(s.id); });
  return w;
}

// Validasi susunan pemenang { 1:[id], 2:[id], 3:[id] }. Mengembalikan pesan galat atau ''.
export function validateWinners(w, subs) {
  const byId = new Map(subs.map((s) => [s.id, s]));
  const all = [];
  for (const r of [1, 2, 3]) for (const id of w[r] || []) all.push([r, id]);
  if (!(w[1] || []).length) return 'Pilih setidaknya Juara 1.';
  const seen = new Set();
  for (const [, id] of all) {
    if (seen.has(id)) return 'Satu karya hanya boleh mendapat satu peringkat.';
    seen.add(id);
    const s = byId.get(id);
    if (!s) return 'Ada submisi yang bukan bagian dari challenge ini.';
    if (!hasAll(s)) return `“${s.title}” belum dinilai lengkap pada keempat kriteria.`;
  }
  let before = 0;
  for (const r of [1, 2, 3]) {
    const g = (w[r] || []).map((id) => byId.get(id));
    if (!g.length) continue;
    if (before + 1 !== r) return before === 0 ? `Juara ${r} tidak dapat diisi tanpa Juara 1.` : `Setelah ${before} karya di atasnya, peringkat berikutnya adalah Juara ${before + 1}, bukan Juara ${r}.`;
    for (const s of g) if (cmpSubs(s, g[0]) !== 0) return `Di Juara ${r}, dua karya hanya boleh berbagi peringkat bila seluruh nilainya sama persis (“${g[0].title}” dan “${s.title}” berbeda).`;
    before += g.length;
  }
  const ranked = [1, 2, 3].filter((r) => (w[r] || []).length).map((r) => [r, byId.get(w[r][0])]);
  for (let i = 0; i < ranked.length - 1; i++) {
    const c = cmpSubs(ranked[i][1], ranked[i + 1][1]);
    if (c === 0) return `“${ranked[i][1].title}” dan “${ranked[i + 1][1].title}” bernilai sama persis, jadi harus berada di peringkat yang sama.`;
    if (c < 0) return `Juara ${ranked[i + 1][0]} memiliki nilai lebih tinggi daripada Juara ${ranked[i][0]}. Urutan harus mengikuti nilai.`;
  }
  const lowest = ranked[ranked.length - 1][1];
  for (const s of subs) {
    if (seen.has(s.id) || !hasAll(s)) continue;
    if (cmpSubs(s, lowest) >= 0) return `“${s.title}” bernilai ${cmpSubs(s, lowest) === 0 ? 'sama persis dengan' : 'lebih tinggi dari'} pemenang terbawah, tetapi belum dipilih.`;
  }
  return '';
}
