'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './context';
import { api } from '@/lib/client';
import { Icon, Void } from './ui';
import { ChallengeForm, useChallengeActions } from './challengeParts';
import { CH_LABEL, fmtDate } from '@/lib/format';

function WinnerPanel({ challenges, subs }) {
  const { toast, refresh } = useApp();
  const ended = challenges.filter((c) => c.status === 'ended');
  const [sel, setSel] = useState(null);
  const c = ended.find((x) => x.id === sel) || ended[0];
  const list = c ? subs[c.id] || [] : [];
  const init = () => { const w = {}; list.forEach((s) => { if (s.rank && c.announcedAt) w[s.rank] = s.id; }); return w; };
  const [w, setW] = useState(init);
  const [err, setErr] = useState('');
  const [pickKey, setPickKey] = useState(c?.id);
  if (c && pickKey !== c.id) { setPickKey(c.id); setW(init()); }

  if (!ended.length) return <Void title="Belum ada challenge yang berakhir"><p style={{ margin: 0 }}>Pemenang dapat diumumkan setelah tanggal selesai terlewati, atau setelah kamu mengakhiri challenge lebih awal.</p></Void>;
  const ordered = [...list].sort((a, b) => (b.score ?? -1) - (a.score ?? -1));
  const auto = () => {
    const top = list.filter((x) => x.score != null).sort((a, b) => b.score - a.score).slice(0, 3);
    if (!top.length) return toast('Belum ada submisi yang dinilai.', 'err');
    setW({ 1: top[0]?.id, 2: top[1]?.id, 3: top[2]?.id });
  };
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    const used = new Set(); const out = {};
    for (const r of [1, 2, 3]) { const v = w[r]; if (v) { if (used.has(v)) return setErr('Satu karya hanya boleh mendapat satu peringkat.'); used.add(v); out[r] = v; } }
    if (!out[1]) return setErr('Pilih setidaknya Juara 1.');
    if (out[3] && !out[2]) return setErr('Juara 3 tidak dapat diisi tanpa Juara 2.');
    try { await api(`/api/challenges/${c.id}/winners`, { method: 'POST', json: { winners: out } }); toast('Pemenang diumumkan.', 'ok'); refresh(); } catch (x) { setErr(x.message); }
  };
  return (
    <>
      <div className="fld"><label htmlFor="winCh">Pilih challenge</label>
        <select className="in" id="winCh" value={c.id} onChange={(e) => setSel(Number(e.target.value))}>{ended.map((x) => <option key={x.id} value={x.id}>{x.title}</option>)}</select></div>
      {!list.length ? <Void><p style={{ margin: 0 }}>Challenge ini tidak memiliki submisi.</p></Void> : (
        <form onSubmit={submit} noValidate>
          <div className="win-pick">{[1, 2, 3].map((r) => (
            <div className="r" key={r}><label htmlFor={'w' + r}>Juara {r}</label>
              <select className="in" id={'w' + r} value={w[r] || ''} onChange={(e) => setW({ ...w, [r]: e.target.value ? Number(e.target.value) : undefined })}>
                <option value="">— Tidak ada —</option>
                {ordered.map((s) => <option key={s.id} value={s.id}>{s.title} — {s.painter}{s.score != null ? ` (nilai ${s.score})` : ''}</option>)}
              </select></div>))}</div>
          {c.announcedAt && <p className="small mute" style={{ margin: '0 0 12px' }}>Diumumkan pada {fmtDate(c.announcedAt)}. Kamu dapat memperbaruinya.</p>}
          <p className="msg-err" role="alert">{err}</p>
          <div className="btn-row"><button type="button" className="btn line sm" onClick={auto}>Isi dari nilai tertinggi</button>
            <button type="submit" className="btn primary sm">{c.announcedAt ? 'Perbarui pengumuman' : 'Umumkan pemenang'}</button></div>
        </form>
      )}
    </>
  );
}

export default function OverviewView({ challenges, subs }) {
  const act = useChallengeActions();
  const all = Object.values(subs).flat();
  const ord = { active: 0, soon: 1, ended: 2 };
  const list = [...challenges].sort((a, b) => ord[a.status] - ord[b.status] || (a.end < b.end ? -1 : 1));
  return (
    <div className="page" id="p-overview"><div className="wrap">
      <div className="p-head"><div><span className="eyebrow">Overview — Meja curator</span><h1 className="h-xl">Meja <em>curator.</em></h1></div>
        <Link className="btn line" href="/challenges">Lihat semua challenge <Icon n="arrow" /></Link></div>
      <div className="tiles">
        <div className="tile"><b>{challenges.length}</b><span>Challenge saya</span></div>
        <div className="tile"><b>{challenges.filter((c) => c.status === 'active').length}</b><span>Sedang aktif</span></div>
        <div className="tile"><b>{all.length}</b><span>Total submisi</span></div>
        <div className="tile"><b>{all.filter((s) => s.score == null).length}</b><span>Belum dinilai</span></div>
      </div>
      <div className="two">
        <div className="panel"><h3>Buat challenge baru</h3><p className="sub">Isi judul, deskripsi, jadwal, dan lampiran bila ada.</p><ChallengeForm inline /></div>
        <div style={{ display: 'grid', gap: 26 }}>
          <div><h3 className="h-md" style={{ marginBottom: 14 }}>Challenge saya</h3>
            <div className="my-ch">{!list.length ? <Void title="Belum ada challenge"><p style={{ margin: 0 }}>Terbitkan challenge pertamamu lewat formulir di samping.</p></Void> : list.map((c) => {
              const n = subs[c.id] || [], sc = n.filter((x) => x.score != null).length;
              return (
                <div className="my-ch-row" key={c.id}>
                  <div><h4>{c.title}</h4><div className="mt"><span className={'badge ' + c.status}><i className="dotc" />{CH_LABEL[c.status]}</span><span>{fmtDate(c.start)} – {fmtDate(c.end)}</span><span>{n.length} peserta</span><span>{sc}/{n.length} dinilai</span>{c.announcedAt && <span className="badge curator">Pemenang diumumkan</span>}</div></div>
                  <div className="acts">
                    <Link className="btn soft xs" href={`/challenges/${c.id}`}>Penilaian</Link>
                    <button type="button" className="btn line xs" onClick={() => act.edit(c)}><Icon n="edit" /> Edit</button>
                    {c.status === 'active' && <button type="button" className="btn line xs" onClick={() => act.close(c)}>Akhiri</button>}
                    <button type="button" className="btn danger xs" aria-label="Hapus" onClick={() => act.del(c)}><Icon n="trash" /></button>
                  </div>
                </div>);
            })}</div></div>
          <div className="panel"><h3>Umumkan pemenang</h3><p className="sub">Pilih maksimal tiga karya. Satu peringkat hanya untuk satu karya.</p><WinnerPanel challenges={challenges} subs={subs} /></div>
        </div>
      </div>
    </div></div>
  );
}
