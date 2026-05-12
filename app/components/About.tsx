'use client';
import { useEffect, useRef } from 'react';

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // 3D tilt on photo card
  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 20;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 20;
      card.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.02)`;
      card.style.transition = 'transform 0.1s';
    };
    const onLeave = () => {
      card.style.transform = 'perspective(700px) rotateY(0) rotateX(0) scale(1)';
      card.style.transition = 'transform 0.6s ease';
    };
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);
    return () => { wrap.removeEventListener('mousemove', onMove); wrap.removeEventListener('mouseleave', onLeave); };
  }, []);

  // Count-up on scroll
  useEffect(() => {
    const els = document.querySelectorAll('[data-count]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = parseFloat(el.dataset.count || '0');
        const dec = el.dataset.dec ? parseInt(el.dataset.dec) : 0;
        const dur = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          el.textContent = (p * target).toFixed(dec);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target.toFixed(dec);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
      <div className="sec-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '7rem', alignItems: 'center' }}>

        {/* Photo col */}
        <div ref={wrapRef} className="rv" style={{ position: 'relative' }}>
          <div
            ref={cardRef}
            className="photo-3d"
            style={{
              width: '100%', maxWidth: 360, aspectRatio: '3/4',
              borderRadius: 24, overflow: 'hidden',
              background: 'linear-gradient(145deg,var(--blush),var(--lav-light))',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {/* ── REPLACE THIS DIV WITH YOUR <img> TAG ──
                <img src="/photo.jpg" alt="Janvi" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            */}
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--muted)', padding: '2rem', textAlign: 'center' }}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ opacity: 0.3 }}>
                <circle cx="28" cy="20" r="12" stroke="#8B7EC8" strokeWidth="1.5" />
                <path d="M4 54c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="#8B7EC8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--lavender)' }}>Your Photo Here</div>
              <div style={{ fontSize: '.7rem', color: 'var(--muted)' }}>Drop your image in /public/photo.jpg</div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="fl-chip" style={{ top: '-1rem', left: '-1.5rem', animationDelay: '0s' }}>
            <div className="ch-ico" style={{ background: 'var(--gold-light)' }}>🏆</div>
            <div>
              <div style={{ fontSize: '.68rem', color: 'var(--muted)', fontWeight: 400 }}>Hackathon</div>
              <div>Top 10</div>
            </div>
          </div>
          <div className="fl-chip" style={{ bottom: '-1rem', right: '-1.5rem', animationDelay: '-2.5s' }}>
            <div className="ch-ico" style={{ background: 'var(--lav-light)' }}>📄</div>
            <div>
              <div style={{ fontSize: '.68rem', color: 'var(--muted)', fontWeight: 400 }}>Research</div>
              <div>ICASET-2025</div>
            </div>
          </div>
        </div>

        {/* Text col */}
        <div>
          <p className="chip rv">About Me</p>
          <h2 className="h-display rv d1" style={{ marginBottom: '1.6rem' }}>
            I build things<br />people <em>remember</em>
          </h2>
          <p className="rv d2" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--ink)', fontWeight: 300, marginBottom: '1.2rem' }}>
            Final-year <strong style={{ fontWeight: 700, color: 'var(--navy)' }}>CSE student</strong> at Chandigarh University with a CGPA of 8.08. I&apos;m a MERN stack developer who crafts end-to-end web applications — from architecting databases to polishing pixel-perfect UIs.
          </p>
          <p className="rv d3" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--ink)', fontWeight: 300, marginBottom: '2.4rem' }}>
            My research on fraud detection in federated financial systems was accepted at <strong style={{ fontWeight: 700, color: 'var(--navy)' }}>ICASET-2025</strong> — proof that I&apos;m just as comfortable in research as shipping production code.
          </p>

          {/* Stats */}
          <div className="rv d4" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            <div className="stat-box">
              <div className="stat-num" data-count="8.08" data-dec="2">0</div>
              <div className="stat-lbl">CGPA</div>
            </div>
            <div className="stat-box">
              <div className="stat-num" data-count="3" data-dec="0">0</div>
              <div className="stat-lbl">Live Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">2025</div>
              <div className="stat-lbl">Graduating</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:900px) {
          #about .sec-wrap { grid-template-columns:1fr !important; gap:3rem !important; }
        }
      `}</style>
    </section>
  );
}
