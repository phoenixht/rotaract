"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 7, label: "Territories / Territoires", suffix: "" },
  { value: 43, label: "Clubs", suffix: "+" },
  { value: 884, label: "Rotaractors", suffix: "+" },
  { value: 3, label: "Languages / Langues", suffix: "" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-love">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-white/70 text-xs tracking-[0.2em] uppercase mb-12 font-body">
          District 7020 at a Glance
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-bold text-5xl md:text-6xl text-white mb-2">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white/60 text-xs tracking-wider uppercase leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-white/50 text-sm mt-12 max-w-2xl mx-auto">
          Out of 529 districts around the world, District 7020 unites the Caribbean in Leadership, Opportunities, Vibe and Excellence.
        </p>
      </div>
    </section>
  );
}
