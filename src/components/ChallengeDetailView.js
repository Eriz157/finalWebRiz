'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './context';
import { api } from '@/lib/client';
import { Icon, Void, Foot } from './ui';
import { useChallengeActions } from './challengeParts';
import { bannerStyle, patCircles, chWhen, fmtDate, CH_LABEL } from '@/lib/format';

function RateForm({ s }) {
  const { toast, refresh } = useApp();
  const [score, setScore] = useState(s.score ?? ''), [note, setNote] = useState(s.note || ''), [err, setErr] = useState('');
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    const n = Number(score);
    if (score === '' || !Number.isInteger(n) || n < 0 || n > 100) return setErr('Nilai harus bilangan bulat 0–100.');
    try { await api(`/api/submissions/${s.id}`, { method: 'PATCH', json: { score: n, note } }); toast('Nilai tersimpan.', 'ok'); refresh(); } catch (x) { setErr(x.message); }
  };
  return (
    <form className="rate" onSubmit={submit} noValidate>
      <div className="cols2">
        <input className="in" name="score" type="number" min="0" max="100" step="1" placeholder="0–100" aria-label={`Nilai untuk ${s.title}`} value={score} onChange={(e) => setScore(e.target.value)} />
        <input className="in" name="note" maxLength={200} placeholder="Catatan penilaian" aria-label="Catatan" value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
      <p className="msg-err" style={{ margin: 0, minHeight: err ? '1.4em' : 0 }}>{err}</p>
      <button type="submit" className="btn soft xs">Simpan nilai</button>
    </form>
  );
}

export default function ChallengeDetailView({ challenge: c, submissions, myArts }) {
  const { user: u, router } = useApp();
  const act = useChallengeActions(myArts);
  const s = c.status;
  const canJudge = u && (u.role === 'admin' || (u.role === 'curator' && c.ownerId === u.id));
  const mine = u ? submissions.find((x) => x.userId === u.id) : null;
  const back = u && ['curator', 'member', 'admin'].includes(u.role) ? '/challenges' : '/';
  const att = c.attachment;
  const win = [1, 2, 3].map((r) => submissions.find((x) => x.rank === r)).filter(Boolean);
  const order = [...win].sort((a, b) => ({ 2: 0, 1: 1, 3: 2 }[a.rank] - { 2: 0, 1: 1, 3: 2 }[b.rank]));
  const sorted = [...submissions].sort((a, b) => (b.score ?? -1) - (a.score ?? -1) || (a.createdAt < b.createdAt ? -1 : 1));
  const Mute = ({ children }) => <p className="mute" style={{ margin: 0, fontSize: 14.5 }}>{children}</p>;

  return (
    <div className="page" id="p-challenge-detail">
      <div className="wrap">
        <div style={{ paddingTop: 22 }}><Link className="btn text" href={back}><Icon n="back" /> {back === '/challenges' ? 'Semua challenge' : 'Beranda'}</Link></div>
        <div className="p-head" style={{ paddingTop: 18 }}><div>
          <div className="btn-row" style={{ gap: 10 }}><span className={'badge ' + s}><i className="dotc" />{CH_LABEL[s]}</span><span className="small mute" suppressHydrationWarning>{chWhen(c)}</span></div>
          <h1 className="h-xl" style={{ fontSize: 'clamp(46px,6.6vw,96px)' }}>{c.title}</h1></div></div>
        <div className="cd-top">
          <div className="cd-text">
            <div className="cd-ban" style={bannerStyle(c)}>
              {!c.banner && <svg className="pat" viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g fill="none" stroke="rgba(255,255,255,.34)">{patCircles(c.id).map((p, i) => <circle key={i} cx={p.cx} cy={p.cy} r={p.r} />)}</g></svg>}
            </div>
            <h4 style={{ marginTop: 0 }}>Deskripsi</h4><p>{c.description}</p>
            {c.rules && <><h4>Aturan</h4><p>{c.rules}</p></>}
            {att && <div style={{ marginTop: 22 }}><a className="btn line sm" href={att.url} download={att.name}>Unduh lampiran: {att.name}</a></div>}
          </div>
          <aside className="cd-facts">
            <dl>
              <div className="f"><dt>Curator</dt><dd><Link href={`/profile/${c.ownerId}`}>{c.ownerName}</Link></dd></div>
              <div className="f"><dt>Mulai</dt><dd>{fmtDate(c.start)}</dd></div><div className="f"><dt>Selesai</dt><dd>{fmtDate(c.end)}</dd></div>
              <div className="f"><dt>Hadiah</dt><dd>{c.prize || '—'}</dd></div><div className="f"><dt>Peserta</dt><dd>{submissions.length} karya</dd></div>
            </dl>
            <div className="cd-act">
              {u?.role === 'member' ? (
                mine && s !== 'ended' ? <><p style={{ margin: 0, fontSize: 14.5 }}><b>Karyamu sudah terdaftar:</b><br />{mine.title}</p><button type="button" className="btn line" onClick={() => act.withdraw(c)}>Tarik submisi</button></>
                : mine ? <p style={{ margin: 0, fontSize: 14.5 }}><b>Karyamu:</b> {mine.title}</p>
                : s === 'active' ? <button type="button" className="btn primary" onClick={() => act.join(c)}>Ikuti challenge <Icon n="arrow" /></button>
                : s === 'soon' ? <button type="button" className="btn primary" disabled>Belum dimulai</button>
                : <Mute>Challenge telah berakhir.</Mute>
              ) : !u ? (
                <><Mute>Hanya akun <b>Member</b> yang dapat mengikuti challenge.</Mute><button type="button" className="btn primary" onClick={() => router.push('/login')}>Masuk / Gabung <Icon n="arrow" /></button></>
              ) : <Mute>Hanya akun <b>Member</b> yang dapat mengikuti challenge.</Mute>}
              {canJudge && (
                <>
                  <hr className="hair" />
                  <div className="btn-row">
                    <button type="button" className="btn soft xs" onClick={() => act.edit(c)}><Icon n="edit" /> Edit</button>
                    {s === 'active' && <button type="button" className="btn line xs" onClick={() => act.close(c)}>Akhiri sekarang</button>}
                    <button type="button" className="btn danger xs" onClick={() => act.del(c, u.role === 'curator' ? '/overview' : '/challenges')}><Icon n="trash" /> Hapus</button>
                  </div>
                  {s === 'ended' && u.role === 'curator' && <Link className="btn text" href="/overview">Umumkan pemenang di Overview →</Link>}
                </>
              )}
            </div>
          </aside>
        </div>

        <section className="sec" style={{ paddingTop: 'clamp(50px,7vw,90px)' }}>
          <div className="sec-head" style={{ marginBottom: 26 }}><div><span className="eyebrow">Pemenang</span><h2 className="h-lg" style={{ fontSize: 'clamp(36px,4.4vw,60px)' }}>Karya <em>terpilih.</em></h2></div></div>
          {c.announcedAt && win.length ? (
            <div className="podium">{order.map((w) => (
              <div className={'pod r' + w.rank} key={w.id}><span className="rk">Juara {w.rank}</span><div className="im"><img src={w.image} alt={w.title} /></div><h4>{w.title}</h4>
                <p>{w.painter} · <Link href={`/gallery/${w.artworkId}`} style={{ color: 'var(--terra-d)' }}>lihat karya</Link></p></div>))}</div>
          ) : <Void title="Belum diumumkan"><p style={{ margin: 0 }}>{s === 'ended' ? 'Curator belum mengumumkan pemenang.' : 'Pemenang akan diumumkan setelah challenge berakhir.'}</p></Void>}
        </section>

        <section className="sec" style={{ paddingTop: 'clamp(50px,7vw,90px)' }}>
          <div className="sec-head" style={{ marginBottom: 26 }}><div><span className="eyebrow">Galeri submisi</span><h2 className="h-lg" style={{ fontSize: 'clamp(36px,4.4vw,60px)' }}>{submissions.length} karya <em>mengikuti.</em></h2></div></div>
          {!submissions.length ? <Void title="Belum ada submisi"><p style={{ margin: 0 }}>Belum ada karya yang didaftarkan ke challenge ini.</p></Void> : (
            <div className="sub-grid">{sorted.map((sb) => {
              const showScore = canJudge || (u && u.id === sb.userId);
              return (
                <div className="sub-card" key={sb.id}>
                  <div className="im">
                    {sb.rank && c.announcedAt ? <span className="badge curator">Juara {sb.rank}</span> : showScore && sb.score != null ? <span className="badge">Nilai {sb.score}</span> : null}
                    <Link href={`/gallery/${sb.artworkId}`} aria-label={`Lihat ${sb.title} di galeri`}><img src={sb.image} alt={sb.title} /></Link>
                  </div>
                  <div className="tx"><h4>{sb.title}</h4><p>{sb.painter}</p></div>
                  {canJudge ? <RateForm s={sb} /> : showScore && sb.note ? <div className="rate"><p className="small" style={{ margin: 0 }}><b>Catatan curator:</b> {sb.note}</p></div> : null}
                </div>);
            })}</div>
          )}
        </section>
      </div>
      <Foot>Challenge · {c.title}</Foot>
    </div>
  );
}
