import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Rotaract, its history, organization goals, and code of conduct.",
};

const history = [
  { year: "1935", text: "Paul Harris encounters a youth organization based on Rotary principles in Australia." },
  { year: "1950s", text: 'Rotary-sponsored youth clubs flourish under various names: "Paul Harris Circles" in Europe and "Rotors" clubs in American universities.' },
  { year: "1962", text: "Interact Program is launched by Rotary International." },
  { year: "1965", text: 'Growth in youth clubs inspired by Interact. Many older Interactors, having reached the age limit, began starting "Senior Interact" clubs.' },
  { year: "1968", text: 'Rotaract was founded — the Rotaract Club of North Charlotte, Carolina became the first club chartered on March 13, 1968. The aim: "to develop leadership and responsible citizenship through service to the community."' },
  { year: "1990s", text: "Rotaractors combined their organizations internationally with Multi-District Organizations in Europe, Australia and South America." },
  { year: "Present", text: "Rotaract has grown to 184,000+ members, 8,000+ clubs, represented in 163 countries and geographical areas. Strongest presence in Asia, Africa, South America, and Europe." },
];

const goals = [
  "Develop professional and leadership skills.",
  "Emphasize respect for the rights of others, based on recognition of the worth of each individual.",
  "Recognize the dignity and value of all occupations as opportunities to serve.",
  "Recognize, practice and promote ethical standards as leadership qualities and vocational responsibilities.",
  "Develop knowledge and understanding of the needs, problems and opportunities in the community and worldwide.",
  "Provide opportunities for personal and group activities to serve the community and promote international understanding and goodwill toward all people.",
];

const codeOfConduct = [
  {
    title: "Fellowship Through Service",
    color: "text-gold",
    bg: "bg-gold-light",
    text: 'The official motto of Rotaract. "Fellowship Through Service" represents the spirit and enthusiasm of individuals bonded through the Rotaract experience — making a difference at the local grassroots level while promoting international understanding and peace.',
  },
  {
    title: "Service Above Self",
    color: "text-love",
    bg: "bg-love-subtle",
    text: "The guiding principle that every Rotaractor lives by: placing the needs of others above personal gain. Service is how we transform passion into purpose and turn ideals into action.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-mist text-center">
        <span className="text-xs tracking-widest uppercase text-love font-medium mb-4 block">Who We Are</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mb-6">About Us</h1>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
          Rotaract is a global movement of young leaders aged 18+ dedicated to service, leadership, and building meaningful connections across the world.
        </p>
      </section>

      {/* What is Rotaract */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-ink mb-6">
              <span className="text-love">Rotaract</span> = Rotary + Action
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Rotaract is a service club for young people over 18 years old who are dedicated to finding innovative solutions to the world's most pressing challenges while developing leadership skills and making friends from around the world.
              </p>
              <p>
                The core mission: provide opportunities for young men and women to enhance their knowledge and skills, address the physical and social needs of communities, and promote better relations between all people worldwide through a framework of friendship and service.
              </p>
              <p>
                Most clubs hold two meetings per month — one as a business meeting, the other as a social event — plus service projects and special events throughout the year.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: "🌍", label: "184,000+ members worldwide" },
              { icon: "🏛️", label: "8,000+ clubs in 163 countries" },
              { icon: "🤝", label: "For young people aged 18+" },
              { icon: "⭐", label: "Service, leadership & friendship" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 bg-mist rounded-xl">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-700 font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 px-4 bg-mist">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center text-ink mb-16">History</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[3.25rem] top-0 bottom-0 w-0.5 bg-love/20 hidden md:block" />

            <div className="space-y-8">
              {history.map((item, i) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="shrink-0 w-24 text-right">
                    <span className="inline-block px-3 py-1 bg-love text-white text-xs font-bold rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organization Goals */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center text-ink mb-12">Organization Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.map((goal, i) => (
              <div key={i} className="flex gap-3 p-5 bg-mist rounded-xl">
                <span className="text-love font-bold text-sm shrink-0 mt-0.5">✓</span>
                <p className="text-gray-600 text-sm leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-20 px-4 bg-mist">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center text-ink mb-12">Code of Conduct</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {codeOfConduct.map((item) => (
              <div key={item.title} className={`p-8 rounded-2xl ${item.bg} border border-gray-100`}>
                <h3 className={`font-display text-xl font-bold mb-4 ${item.color}`}>{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Four-Way Test */}
          <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-100 text-center">
            <h3 className="font-display text-2xl font-bold text-ink mb-2">The Four-Way Test</h3>
            <p className="text-gray-500 text-sm mb-6">Rotary's ethical guide — applied to everything we think, say, or do:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Is it the TRUTH?",
                "Is it FAIR to all concerned?",
                "Will it build GOODWILL and BETTER FRIENDSHIPS?",
                "Will it be BENEFICIAL to all concerned?",
              ].map((q, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-mist rounded-xl text-left">
                  <span className="w-6 h-6 rounded-full bg-love text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 text-sm font-medium">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-love text-white text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Ready to Learn More?</h2>
        <p className="text-white/80 mb-8">Discover District 7020 — its clubs, countries, and people.</p>
        <Link
          href="/about-the-district"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-love rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Explore The District
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
