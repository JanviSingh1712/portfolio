'use client';
import { useState } from 'react';

const tabs = [
  { id: 'frontend', label: 'Frontend', pills: ['React.js','HTML5','CSS3','Tailwind CSS','Bootstrap','Vite','Responsive Design'] },
  { id: 'backend',  label: 'Backend & DB', pills: ['Node.js','Express.js','MongoDB','REST APIs','SOAP','SQL','RDBMS'] },
  { id: 'langs',    label: 'Languages', pills: ['JavaScript','Java','Python','SQL','PL/SQL'] },
  { id: 'tools',    label: 'Tools', pills: ['Git','Vercel','PowerBI','Microsoft Excel','Cloud Computing','Postman'] },
  { id: 'soft',     label: 'Soft Skills', pills: ['Team Leadership','Decision Making','Management','Coordination','Problem Solving'] },
];

export default function Skills() {
  const [active, setActive] = useState('frontend');

  const current = tabs.find(t => t.id === active)!;

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1 }}>
      <div className="sec-wrap" style={{ textAlign: 'center' }}>
        <p className="chip rv" style={{ justifyContent: 'center' }}>What I Know</p>
        <h2 className="h-display rv d1">Technical <em>Stack</em></h2>

        {/* Tabs */}
        <div className="rv d2" style={{ display: 'flex', gap: '.6rem', justifyContent: 'center', flexWrap: 'wrap', margin: '2.8rem 0 2.4rem' }}>
          {tabs.map(t => (
            <button
              key={t.id}
              className={`tab-btn${active === t.id ? ' on' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Pills */}
        <div
          key={active}
          className="rv d3"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', justifyContent: 'center', animation: 'fadeSlide .4s ease' }}
        >
          {current.pills.map(p => (
            <span key={p} className="skill-pill">{p}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
