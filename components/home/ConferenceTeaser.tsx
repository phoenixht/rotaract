import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConferenceTeaser() {
  return (
    <section className="py-24 px-4 bg-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-love blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="text-xs tracking-[0.25em] uppercase text-white/50 mb-6 block">Kingston, Jamaica · June 2026</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-3 leading-tight">
          District Conference<br />
          <span className="text-love">2026</span>
        </h2>
        <p className="text-white/70 text-lg font-display italic mb-4">Rotaract District 7020</p>
        <p className="text-gold text-xs tracking-widest uppercase mb-12">Kingston, Jamaica · June 2026</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-left">
          {[
            { icon: "⚡", title: "Immersive Impact", desc: "Interactive workshops, expert-led training, and tech-powered leadership insights." },
            { icon: "🌿", title: "Rooted in Legacy", desc: "Hands-on community service projects and a deep connection to our Caribbean heritage." },
            { icon: "✨", title: "The Pinnacle Experience", desc: "Unforgettable excursions and networking with Rotaractors from across District 7020." },
          ].map((p) => (
            <div key={p.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl mb-3 block">{p.icon}</span>
              <h3 className="font-display font-semibold text-base text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://rotaract7020conference.org" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-love text-white rounded-full text-sm font-medium hover:bg-love-dark transition-colors">
            Visit Conference Site <ArrowRight size={16} />
          </a>
          <Link href="/district-conference"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
            More Info / Plus d'infos
          </Link>
        </div>
      </div>
    </section>
  );
}
