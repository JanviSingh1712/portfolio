'use client';

const achievements = [
  { emoji: '📄', title: 'Research Paper — ICASET 2025', sub: 'Fraud Detection in Federated Financial Systems Using Distributed Learning · Feb–Mar 2025', g: 'g1' },
  { emoji: '🏆', title: 'Top 10 — Technovate Hackathon', sub: '24-Hour Hackathon · Team WebMaster · GDSC UIET Punjab University · March 2024', g: 'g2' },
  { emoji: '⚛️', title: 'React.js Web Dev Certification', sub: 'Infosys Spring Board · July 2025', g: 'g3' },
  { emoji: '☁️', title: 'Cloud Computing Certification', sub: 'Foundation of Cloud Computing · IIT Kharagpur (NPTEL) · May 2024', g: 'g4' },
];

export default function Achievements() {
  return (
    <section id="achievements" style={{ position: 'relative', zIndex: 1, background: 'var(--warm)' }}>
      <div className="sec-wrap" style={{ textAlign: 'center' }}>
        <p className="chip rv" style={{ justifyContent: 'center' }}>Recognition</p>
        <h2 className="h-display rv d1">Achievements &<br /><em>Certifications</em></h2>

        <div className="rv d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(255px,1fr))', gap: '1.4rem', marginTop: '3.5rem' }}>
          {achievements.map((a, i) => (
            <div key={i} className={`ach-card ${a.g}`} style={{ textAlign: 'left', transitionDelay: `${i * 0.1}s` }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--warm)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.2rem' }}>
                {a.emoji}
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--navy)', marginBottom: '.5rem', lineHeight: 1.4 }}>{a.title}</div>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{a.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
