"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const calc = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-14 px-4 bg-ink text-white">
      <p className="text-center text-white/50 text-xs tracking-widest uppercase mb-8">Countdown to NEXUS</p>
      <div className="flex justify-center gap-4 md:gap-8">
        {units.map((u) => (
          <div key={u.label} className="text-center">
            <div className="bg-white/8 rounded-2xl px-4 py-5 min-w-[70px] md:min-w-[90px] mb-2">
              <span className="font-display font-bold text-3xl md:text-5xl text-magenta">
                {u.label === "Days" ? u.value : pad(u.value)}
              </span>
            </div>
            <p className="text-white/40 text-xs uppercase tracking-widest">{u.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
