'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './context';
import { api } from '@/lib/client';
import { Icon, Void, Foot } from './ui';
import { useChallengeActions } from './challengeParts';
import { CRITERIA, validPart, hasAll, totalOf, fmtScore, standings } from '@/lib/scoring';
import { bannerStyle, patCircles, chWhen, fmtDate, CH_LABEL } from '@/lib/format';

function RateForm({ s }) {
  const { toast, refresh } = useApp();
  const [v, setV] = useState(() => Object.fromEntries(CRITERIA.map((c) => [c.key, s[c.key] ?? ''])));
  const [note, setNote] = useState(s.note || ''), [err, setErr] = useState(''), [busy, setBusy] = useState(false);
  const nums = Object.fromEntries(CRITERIA.map((c) => [c.key, v[c.key] === '' ? NaN : Number(v[c.key])]));
  const ready = hasAll(nums);
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    const bad = CRITERIA.find((c) => !validPart(nums[c.key]));
    if (bad) return setErr(`Nilai ${bad.label.toLowerCase()} harus bilangan bulat 1–100.`);
    setBusy(true);
    try { await api(`/api/submissions/${s.id}`, { method: 'PATCH', json: { ...nums, note } }); toast('Nilai tersimpan.', 'ok'); refresh(); } catch (x) { setErr(x.message); }
    setBusy(false);
  };
  return (
    <form className="rate" onSubmit={submit} noValidate>
      <div className="crit">{CRITERIA.map((c) => (
        <label key={c.key}><span>{c.label} <i>{c.weight}%</i></span>
          <input className="in" type="number" inputMode="numeric" min="1" max="100" step="1" placeholder="1–100" aria-label={`${c.label} untuk ${s.title}`} value={v[c.key]} onChange={(e) => setV({ ...v, [c.key]: e.target.value })} /></label>))}</div>
      <input className="in" name="note" maxLength={200} placeholder="Catatan penilaian (opsional)" aria-label={`Catatan untuk ${s.title}`} value={note} onChange={(e) => setNote(e.target.value)} />
      <div className="rate-foot">
        <span className="prev">Total <b>{ready ? fmtScore(totalOf(nums)) : '—'}</b></span>
        <button type="submit" className="btn soft xs" disabled={busy}>Simpan nilai</button>
      </div>
      <p className="msg-err" role="alert">{err}</p>
    </form>
  );
}

export default function ChallengeDetailView({ challenge: c, submissions, myArts }) {
  const { user: u, router } = useApp();
  const act = useChallengeActions(myArts);
  const s = c.status;
  const canJudge = !!u && u.role === 'curator' && c.ownerId === u.id;
  const mine = u ? submissions.find((x) => x.userId === u.id) : null;
  const back = '/challenges';
  const att = c.attachment;
  const win = submissions.filter((x) => x.rank).sort((a, b) => a.rank - b.rank || (a.createdAt < b.createdAt ? -1 : 1));
  const shared = (r) => win.filter((x) => x.rank === r).length > 1;
  const hasTie = [1, 2, 3].some(shared);
  const order = hasTie || win.length < 3 ? win : [win[1], win[0], win[2]];
  const st = standings(submissions);
  const tiedPlace = (p) => [...st.place.values()].filter((x) => x === p).length > 1;
  const sorted = [...submissions].sort((a, b) => {
    const pa = st.place.get(a.id), pb = st.place.get(b.id);
    if (pa && pb) return pa - pb || st.order.indexOf(a) - st.order.indexOf(b);
    if (pa) return -1; if (pb) return 1;
    return a.createdAt < b.createdAt ? -1 : 1;
  });
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
              <div className={'pod r' + w.rank} key={w.id}><span className="rk">Juara {w.rank}{shared(w.rank) ? ' bersama' : ''}</span><div className="im"><img src={w.image} alt={w.title} /></div><h4>{w.title}</h4>
                <p>{w.painter} · <Link href={`/gallery/${w.artworkId}`} style={{ color: 'var(--terra-d)' }}>lihat karya</Link></p></div>))}</div>
          ) : <Void title="Belum diumumkan"><p style={{ margin: 0 }}>{s === 'ended' ? 'Curator belum mengumumkan pemenang.' : 'Pemenang akan diumumkan setelah challenge berakhir.'}</p></Void>}
        </section>

        <section className="sec" style={{ paddingTop: 'clamp(50px,7vw,90px)' }}>
          <div className="sec-head" style={{ marginBottom: 26 }}><div><span className="eyebrow">Galeri submisi</span><h2 className="h-lg" style={{ fontSize: 'clamp(36px,4.4vw,60px)' }}>{submissions.length} karya <em>mengikuti.</em></h2></div></div>
          {!submissions.length ? <Void title="Belum ada submisi"><p style={{ margin: 0 }}>Belum ada karya yang didaftarkan ke challenge ini.</p></Void> : (
            <>
              {canJudge && <p className="rate-rule small mute">Total = Kreativitas 30% + Teknik 25% + Orisinalitas 25% + Estetika 20%. Bila total sama, urutan ditentukan oleh nilai Kreativitas, lalu Orisinalitas, Teknik, dan Estetika. Jika semuanya masih sama persis, karya dinyatakan juara bersama.</p>}
              <div className={'sub-list' + (canJudge ? ' judge' : '')} role="list">
                <div className="sub-head" aria-hidden="true">{canJudge && <span>#</span>}<span>Karya</span><span>Judul &amp; seniman</span><span>Total</span><span>{canJudge ? 'Penilaian' : 'Catatan'}</span></div>
                {sorted.map((sb) => {
                  const showScore = canJudge || (u && u.id === sb.userId);
                  const place = st.place.get(sb.id);
                  return (
                    <article className="sub-row" role="listitem" key={sb.id}>
                      {canJudge && <div className="no">{place ? <><b>{place}</b>{tiedPlace(place) && <small>sama</small>}</> : <span>—</span>}</div>}
                      <Link className="pic" href={`/gallery/${sb.artworkId}`} aria-label={`Lihat ${sb.title} di galeri`}><span className="mat"><img src={sb.image} alt={sb.title} /></span></Link>
                      <div className="who">
                        {sb.rank && c.announcedAt && <span className="badge curator">Juara {sb.rank}{shared(sb.rank) ? ' bersama' : ''}</span>}
                        <h4>{sb.title}</h4><p>{sb.painter}</p>
                      </div>
                      <div className="tot">{showScore && sb.score != null ? <><b>{fmtScore(sb.score)}</b><small>dari 100</small></> : <span className="mute">{showScore ? 'Belum dinilai' : '—'}</span>}</div>
                      <div className="jd">
                        {canJudge ? <RateForm s={sb} /> : showScore && hasAll(sb) ? (
                          <div className="rate view"><ul className="crit-view">{CRITERIA.map((cr) => <li key={cr.key}><span>{cr.label}</span><b>{sb[cr.key]}</b></li>)}</ul>
                            {sb.note && <p className="small" style={{ margin: 0 }}><b>Catatan curator:</b> {sb.note}</p>}</div>
                        ) : showScore && sb.note ? <div className="rate view"><p className="small" style={{ margin: 0 }}><b>Catatan curator:</b> {sb.note}</p></div> : <span className="mute small">—</span>}
                      </div>
                    </article>);
                })}
              </div>
            </>
          )}
        </section>
      </div>
      <Foot>Challenge · {c.title}</Foot>
    </div>
  );
}
