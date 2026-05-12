'use client';

const items = ['React.js','Node.js','MongoDB','Express.js','JavaScript','Tailwind CSS','Python','REST APIs','CGPA 8.08','ICASET-2025','Git & Vercel','Full-Stack Dev'];

export default function Marquee() {
  const all = [...items, ...items];
  return (
    <div className="mq-outer">
      <div className="mq-inner">
        {all.map((item, i) => (
          <span key={i}>
            <span className="mq-item">{item}</span>
            <span className="mq-item mq-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
