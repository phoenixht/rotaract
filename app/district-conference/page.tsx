import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "@/components/conference/Countdown";

export const metadata: Metadata = {
  title: "District Conference 2026",
  description: "Rotaract District 7020 Conference 2026 — Kingston, Jamaica.",
};

export default function ConferencePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-love blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative z-10">
          <span className="text-xs tracking-[0.25em] uppercase text-gold/70 mb-6 block">Kingston, Jamaica · June 2026</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            District Conference<br />
            <span className="text-love">2026</span>
          </h1>
          <p className="text-white/70 text-xl font-display italic mb-4">Rotaract District 7020</p>
          <p className="text-gold text-sm tracking-widest uppercase mb-12">Kingston, Jamaica · June 2026</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://rotaract7020conference.org"
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 bg-love text-white rounded-full text-sm font-medium hover:bg-love-dark transition-colors"
            >
              Visit Conference Site →
            </a>
            <Link href="/district-conference/registration"
              className="px-8 py-3.5 bg-white/10 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
              Register / S'inscrire
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <Countdown targetDate="June 10, 2026 00:00:00" />

      {/* What to expect */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center text-ink mb-4">What to Expect</h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            Three dimensions of an experience designed to challenge, connect, and inspire Rotaractors from across District 7020.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Immersive Impact",
                titleFr: "Impact immersif",
                color: "border-love bg-love-subtle",
                titleColor: "text-love",
                desc: "Interactive workshops, expert-led training, and tech-powered leadership insights. Make meaningful impact through hands-on community service.",
              },
              {
                icon: "🌿",
                title: "Rooted in Legacy",
                titleFr: "Ancrés dans l'héritage",
                color: "border-navy bg-navy-light",
                titleColor: "text-navy",
                desc: "Discover new places and dive into unforgettable excursions across Jamaica. Honor the rich heritage and legacy of Rotaract District 7020.",
              },
              {
                icon: "✨",
                title: "The Pinnacle Experience",
                titleFr: "L'expérience ultime",
                color: "border-gold bg-gold-light",
                titleColor: "text-gold",
                desc: "Connect, vibe, and network with Rotaractors from across District 7020. Build lasting friendships and professional connections beyond borders.",
              },
            ].map((p) => (
              <div key={p.title} className={`p-8 rounded-2xl border-2 ${p.color}`}>
                <span className="text-4xl block mb-4">{p.icon}</span>
                <h3 className={`font-display text-xl font-bold mb-1 ${p.titleColor}`}>{p.title}</h3>
                <p className={`text-xs italic mb-4 ${p.titleColor} opacity-70`}>{p.titleFr}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 bg-mist">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-ink mb-12">Event Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              { icon: "🎓", text: "Interactive workshops and expert-led training sessions" },
              { icon: "💡", text: "Tech-powered leadership insights and futuristic thinking" },
              { icon: "🤲", text: "Hands-on community service projects with real impact" },
              { icon: "🗺️", text: "Unforgettable excursions and cultural discovery in Jamaica" },
              { icon: "🤝", text: "Networking with Rotaractors from all 7 territories of District 7020" },
              { icon: "🎉", text: "Caribbean vibe, fellowship, and celebration of our shared identity" },
            ].map((item) => (
              <div key={item.text} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-700 text-sm leading-relaxed self-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kingston */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-ink mb-4">Kingston, Jamaica</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Jamaica's vibrant capital — a city of culture, history, and energy — sets the perfect stage for the District Conference 2026.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "/assets/img/devon-house.jpg", label: "Devon House" },
              { img: "/assets/img/kingston.jpg", label: "Kingston" },
              { img: "/assets/img/blue-hole.jpg", label: "Blue Hole" },
              { img: "/assets/img/dunns-river-falls.jpg", label: "Dunn's River Falls" },
            ].map((item) => (
              <div key={item.label} className="relative rounded-xl overflow-hidden aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-xs font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-love text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-white/80 mb-10">
            Register now and secure your spot at the most immersive Rotaract experience in the Caribbean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://rotaract7020conference.org" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white text-love rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              Visit Conference Site
            </a>
            <Link href="/district-conference/registration"
              className="px-8 py-3.5 bg-white/15 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/25 transition-colors">
              Register / S'inscrire
            </Link>
            <Link href="/district-conference/newsletter-signup"
              className="px-8 py-3.5 bg-white/15 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/25 transition-colors">
              Newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
