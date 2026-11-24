'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './context';
import { api } from '@/lib/client';
import { Icon, Void } from './ui';
import { ChallengeForm, useChallengeActions } from './challengeParts';
import { CH_LABEL, fmtDate } from '@/lib/format';
import { standings, autoWinners, validateWinners, cmpSubs, fmtScore } from '@/lib/scoring';

function WinnerPanel({ challenges, subs }) {
  const { toast, refresh } = useApp();
  const ended = challenges.filter((c) => c.status === 'ended');
  const [sel, setSel] = useState(null);
  const c = ended.find((x) => x.id === sel) || ended[0];
  const list = c ? subs[c.id] || [] : [];
  const init = () => { const w = { 1: [], 2: [], 3: [] }; list.forEach((s) => { if (s.rank && c.announcedAt) w[s.rank].push(s.id); }); return w; };
  const [w, setW] = useState(init);
  const [err, setErr] = useState('');
  const [pickKey, setPickKey] = useState(c?.id);
  if (c && pickKey !== c.id) { setPickKey(c.id); setW(init()); setErr(''); }

  if (!ended.length) return <Void title="Belum ada challenge yang berakhir"><p style={{ margin: 0 }}>Pemenang dapat diumumkan setelah tanggal selesai terlewati, atau setelah kamu mengakhiri challenge lebih awal.</p></Void>;
  const st = standings(list);
  const byId = new Map(list.map((x) => [x.id, x]));
  const unrated = list.length - st.order.length;
  const tied = (p) => [...st.place.values()].filter((x) => x === p).length > 1;
  const used = new Set(Object.values(w).flat());
  const label = (s) => `${s.title} — ${s.painter} (nilai ${fmtScore(s.score)})`;
  const set = (r, arr) => { setErr(''); setW({ ...w, [r]: arr }); };
  const change = (r, i, v) => {
    const arr = [...w[r]];
    if (!v) arr.splice(i, 1); else if (i >= arr.length) arr.push(Number(v)); else arr[i] = Number(v);
    set(r, arr);
  };
  const auto = () => {
    if (!st.order.length) return toast('Belum ada submisi yang dinilai lengkap.', 'err');
    setErr(''); setW(autoWinners(list));
  };
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    const m = validateWinners(w, list);
    if (m) return setErr(m);
    try { await api(`/api/challenges/${c.id}/winners`, { method: 'POST', json: { winners: w } }); toast('Pemenang diumumkan.', 'ok'); refresh(); } catch (x) { setErr(x.message); }
  };
  const slot = (r, i) => {
    const first = byId.get(w[r][0]);
    const cur = w[r][i];
    const opts = st.order.filter((s) => (s.id === cur || !used.has(s.id)) && (i === 0 || (first && cmpSubs(s, first) === 0)));
    const off = i === 0 && !cur && 1 + [1, 2, 3].filter((x) => x < r).reduce((n, x) => n + w[x].length, 0) !== r;
    return (
      <select className="in" key={r + '-' + i} disabled={off} aria-label={i === 0 ? `Juara ${r}` : `Juara ${r} bersama`} id={i === 0 ? 'w' + r : undefined} value={cur || ''} onChange={(e) => change(r, i, e.target.value)}>
        <option value="">{off ? 'Tidak tersedia (mengikuti jumlah juara di atasnya)' : i === 0 ? '— Tidak ada —' : '+ Tambah juara bersama (nilai sama persis)'}</option>
        {opts.map((s) => <option key={s.id} value={s.id}>{label(s)}</option>)}
      </select>);
  };
  const canAddJoint = (r) => {
    const first = byId.get(w[r][0]); if (!first) return false;
    return st.order.some((s) => !used.has(s.id) && cmpSubs(s, first) === 0);
  };
  return (
    <>
      <div className="fld"><label htmlFor="winCh">Pilih challenge</label>
        <select className="in" id="winCh" value={c.id} onChange={(e) => setSel(Number(e.target.value))}>{ended.map((x) => <option key={x.id} value={x.id}>{x.title}</option>)}</select></div>
      {!list.length ? <Void><p style={{ margin: 0 }}>Challenge ini tidak memiliki submisi.</p></Void> : (
        <form onSubmit={submit} noValidate>
          <div className="standings" aria-label="Peringkat berdasarkan nilai">
            <div className="st-h"><b>Peringkat nilai</b><span className="small mute">Total berbobot; seri: kreativitas → orisinalitas → teknik → estetika</span></div>
            {st.order.length ? <ol>{st.order.map((s) => { const p = st.place.get(s.id); return (
              <li key={s.id}><span className="pl">{p}</span><span className="tt">{s.title}<small>{s.painter}</small></span>
                {tied(p) && <span className="badge curator">sama persis</span>}<b>{fmtScore(s.score)}</b></li>); })}</ol> : <p className="small mute" style={{ margin: 0 }}>Belum ada submisi yang dinilai lengkap.</p>}
            {unrated > 0 && <p className="small mute" style={{ margin: '8px 0 0' }}>{unrated} karya belum dinilai lengkap dan tidak dapat dipilih.</p>}
          </div>
          <div className="win-pick">{[1, 2, 3].map((r) => (
            <div className="r" key={r}><span className="rl">Juara {r}</span>
              <div className="slots">
                {w[r].map((id, i) => slot(r, i))}
                {(w[r].length === 0 || canAddJoint(r)) && slot(r, w[r].length)}
              </div></div>))}</div>
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
                    {c.status === 'active' && <button type="button" className="btn danger xs" onClick={() => act.close(c)}>Akhiri</button>}
                    <button type="button" className="btn danger xs" aria-label="Hapus" onClick={() => act.del(c)}><Icon n="trash" /></button>
                  </div>
                </div>);
            })}</div></div>
          <div className="panel"><h3>Umumkan pemenang</h3><p className="sub">Satu karya hanya mendapat satu peringkat. Dua karya boleh berbagi peringkat hanya jika semua nilainya sama persis.</p><WinnerPanel challenges={challenges} subs={subs} /></div>
        </div>
      </div>
    </div></div>
  );
}
