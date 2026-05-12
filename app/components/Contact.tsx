'use client';
import { useState } from 'react';

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle');

  const handleSubmit = () => {
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1 }}>
      <div className="sec-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

        {/* Left */}
        <div>
          <p className="chip rv">Say Hello</p>
          <h2 className="h-display rv d1">Let&apos;s build<br />something <em>great</em></h2>
          <p className="rv d2" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--ink)', fontWeight: 300, margin: '1.4rem 0 2.4rem' }}>
            Open to full-time roles, internships, and interesting projects. I respond fast — usually within 24 hours.
          </p>
          <a href="mailto:janvisingh1708@gmail.com" className="rv d3"
            style={{ display: 'flex', alignItems: 'center', gap: '.8rem', fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', textDecoration: 'none', padding: '1.2rem 1.8rem', background: '#fff', border: '1.5px solid var(--border-med)', borderRadius: 16, boxShadow: 'var(--shadow-sm)', transition: 'all .25s', width: 'fit-content' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--coral)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(255,107,71,.15)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-med)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            <div style={{ width: 38, height: 38, background: 'var(--coral)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '.9rem', flexShrink: 0 }}>✉</div>
            janvisingh1708@gmail.com
          </a>

          <div className="rv d4" style={{ display: 'flex', gap: '.8rem', marginTop: '1.6rem', flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/janvi-singh1708/" target="_blank" rel="noreferrer" className="soc-link"><LinkedinIcon /> LinkedIn</a>
            <a href="https://github.com/JanviSingh1712" target="_blank" rel="noreferrer" className="soc-link"><GithubIcon /> GitHub</a>
            <a href="tel:+918707775051" className="soc-link">📞 +91 87077 75051</a>
          </div>
        </div>

        {/* Right – form */}
        <div className="c-card rv d2">
          <div style={{ fontFamily: 'Fraunces,Georgia,serif', fontSize: '1.6rem', fontWeight: 600, marginBottom: '1.8rem', color: 'var(--navy)' }}>
            Send a Message
          </div>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.5rem' }}>Your Name</label>
            <input className="f-input" type="text" placeholder="e.g. Priya Sharma" />
          </div>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.5rem' }}>Email Address</label>
            <input className="f-input" type="email" placeholder="priya@company.com" />
          </div>
          <div style={{ marginBottom: '1.4rem' }}>
            <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.5rem' }}>Message</label>
            <textarea className="f-ta" placeholder="Tell me about the opportunity..." />
          </div>
          <button
            onClick={handleSubmit}
            style={{
              width: '100%', padding: '1rem',
              background: status === 'sent' ? 'var(--sage)' : 'var(--coral)',
              color: '#fff', fontFamily: 'inherit', fontWeight: 700, fontSize: '1rem',
              border: 'none', borderRadius: 12, cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(255,107,71,.35)',
              transition: 'transform .2s, box-shadow .2s, background .3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            {status === 'idle' && 'Send Message ✦'}
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && 'Message Sent! ✓'}
          </button>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          #contact .sec-wrap { grid-template-columns:1fr !important; gap:3rem !important; }
        }
      `}</style>
    </section>
  );
}
