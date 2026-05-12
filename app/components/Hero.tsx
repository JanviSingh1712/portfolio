'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Staggered entrance
    const els = heroRef.current?.querySelectorAll('[data-entrance]');
    els?.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      setTimeout(() => {
        (el as HTMLElement).style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 200 + i * 180);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 2rem', overflow: 'hidden' }}
    >
      {/* Blobs */}
      <div className="blob" style={{ width: 520, height: 520, background: 'radial-gradient(circle,#FFD4C2,#FFB89A)', top: -120, right: -120, animationDelay: '0s' }} />
      <div className="blob" style={{ width: 420, height: 420, background: 'radial-gradient(circle,#C8D8FF,#B4C8FF)', bottom: -100, left: -100, animationDelay: '-4s' }} />
      <div className="blob" style={{ width: 320, height: 320, background: 'radial-gradient(circle,#D4EDDA,#B8E0C4)', top: '28%', left: '6%', animationDelay: '-2s' }} />

      {/* Headline */}
      <h1 data-entrance style={{
        fontFamily: 'Fraunces, Georgia, serif',
        fontWeight: 600,
        fontSize: 'clamp(3.6rem, 11vw, 9.5rem)',
        lineHeight: 0.92,
        letterSpacing: '-0.045em',
        color: 'var(--navy)',
      }}>
        Full-Stack<br />
        <em style={{ fontStyle: 'italic', color: 'var(--coral)' }}>Developer</em>
      </h1>

      {/* Sub */}
      <p data-entrance style={{ fontSize: 'clamp(1rem,1.9vw,1.28rem)', color: 'var(--ink)', maxWidth: 530, lineHeight: 1.78, marginTop: '1.8rem', fontWeight: 300 }}>
        Hi, I&apos;m{' '}
        <strong style={{ fontWeight: 700, color: 'var(--navy)' }}>Janvi</strong>{' '}
        — a MERN stack developer & CSE engineer crafting{' '}
        <strong style={{ fontWeight: 700, color: 'var(--sage)' }}>scalable, beautiful web apps</strong>{' '}
        that users actually love.
      </p>

      {/* CTAs */}
      <div data-entrance style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#projects" className="btn-fill">See My Work</a>
        <a href="#contact" className="btn-ghost">Let&apos;s Talk →</a>
      </div>

      {/* Scroll indicator */}
      <div data-entrance style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
        color: 'var(--muted)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
      }}>
        <div className="s-mouse"><div className="s-dot" /></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
