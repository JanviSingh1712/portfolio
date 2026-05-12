'use client';

const projects = [
  {
    num: '01',
    meta: 'Full-Stack Platform',
    name: 'Event Management System',
    desc: 'Full-stack event & ticket booking platform with secure authentication, categorised listings, ticket resale with commission logic, and role-based access control.',
    stack: ['React.js','Node.js','MongoDB','Tailwind CSS','Express.js'],
    accent: 'ac-coral',
    tagClass: 't-coral',
    live: '#',
    github: '#',
  },
  {
    num: '02',
    meta: 'Smart Application',
    name: 'Smart Excel / Spreadsheet',
    desc: 'Intelligent spreadsheet app with automated data entry, dynamic calculations, real-time updates, and structured data management — all through a clean, responsive UI.',
    stack: ['React.js','Python','Express.js','MongoDB','Vite'],
    accent: 'ac-lav',
    tagClass: 't-lav',
    live: '#',
    github: '#',
  },
  {
    num: '03',
    meta: 'E-Commerce',
    name: 'Medicine Delivery Platform',
    desc: 'Responsive e-commerce platform built for medicine delivery — user auth, cart management, and a secure, streamlined checkout experience.',
    stack: ['React.js','Node.js','MongoDB','Bootstrap'],
    accent: 'ac-sage',
    tagClass: 't-sage',
    live: '#',
    github: '#',
  },
];

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1 }}>
      <div className="sec-wrap">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p className="chip rv">Projects</p>
            <h2 className="h-display rv d1">Work I&apos;m<br /><em>proud of</em></h2>
          </div>
          <div className="rv" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', fontSize: '5rem', fontWeight: 300, color: 'var(--border-med)', lineHeight: 1 }}>03</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <div key={p.num} className={`proj-card ${p.accent} rv`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.8rem' }}>
                    {p.num} / {p.meta}
                  </p>
                  <h3 style={{ fontFamily: 'Fraunces,Georgia,serif', fontWeight: 600, fontSize: '1.6rem', letterSpacing: '-.02em', marginBottom: '.8rem', color: 'var(--navy)' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '.95rem', lineHeight: 1.7, color: 'var(--ink)', fontWeight: 300, maxWidth: 560, marginBottom: '1.4rem' }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                    {p.stack.map(s => (
                      <span key={s} className={`tech-tag ${p.tagClass}`}>{s}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem', flexShrink: 0 }}>
                  <a href={p.live} className="p-btn" title="Live Demo">↗</a>
                  <a href={p.github} className="p-btn" title="GitHub"><GithubIcon /></a>
                </div>
              </div>
              <div className="ghost-num">{p.num}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:700px){
          .proj-card > div { grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}
