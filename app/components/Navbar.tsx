'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.2rem 4rem',
        background: scrolled ? 'rgba(255,248,240,0.92)' : 'rgba(255,248,240,0.7)',
        backdropFilter: 'blur(24px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.5rem', fontWeight: 600, fontStyle: 'italic', color: 'var(--coral)', letterSpacing: '-0.02em' }}>
        Janvi.
      </div>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2.2rem', listStyle: 'none', alignItems: 'center' }}
        className="hidden md:flex">
        {links.map(l => (
          <li key={l}>
            {l === 'Contact' ? (
              <a href="#contact"
                style={{
                  padding: '0.55rem 1.4rem', background: 'var(--navy)', color: '#fff',
                  borderRadius: '100px', fontSize: '0.82rem', fontWeight: 700,
                  textDecoration: 'none', transition: 'background 0.2s, transform 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--coral)'; (e.target as HTMLElement).style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.background = 'var(--navy)'; (e.target as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                Hire Me
              </a>
            ) : (
              <a href={`#${l.toLowerCase()}`} className="nav-a">{l}</a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
      >
        <div style={{ width: 24, height: 2, background: 'var(--navy)', marginBottom: 5, borderRadius: 2, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
        <div style={{ width: 24, height: 2, background: 'var(--navy)', marginBottom: 5, borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
        <div style={{ width: 24, height: 2, background: 'var(--navy)', borderRadius: 2, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(255,248,240,0.97)', backdropFilter: 'blur(24px)',
          borderTop: '1px solid var(--border)', padding: '1.5rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--navy)', textDecoration: 'none' }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
