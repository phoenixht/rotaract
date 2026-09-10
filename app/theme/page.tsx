import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rooted in L.O.V.E. — 2026-27 Theme",
  description: "Rooted in L.O.V.E. — Leadership, Opportunities, Vibe, Excellence. Rotaract District 7020 theme for the 2026-2027 Rotary Year.",
};

const pillars = [
  {
    letter: "L", en: "Leadership", fr: "Leadership",
    color: "text-love", border: "border-love", bg: "bg-love-subtle",
    en_desc: "Lead with intention and integrity. Every Rotaractor in District 7020 is a leader — in their club, their community, and their career. This year, we commit to developing leaders who inspire action and drive change.",
    fr_desc: "Diriger avec intention et intégrité. Chaque Rotaractien du District 7020 est un leader — dans son club, sa communauté et sa carrière. Cette année, nous nous engageons à développer des leaders qui inspirent l'action et conduisent le changement.",
  },
  {
    letter: "O", en: "Opportunities", fr: "Opportunités",
    color: "text-navy", border: "border-navy", bg: "bg-navy-light",
    en_desc: "Create and embrace opportunities for growth and service. Like the Citadelle Laferrière standing strong against the Caribbean sky, we rise to every opportunity with resilience, heritage, and pride — building a brighter future for all.",
    fr_desc: "Créer et saisir des opportunités de croissance et de service. Comme la Citadelle Laferrière dressée contre le ciel caribéen, nous saisissons chaque opportunité avec résilience, héritage et fierté — construisant un avenir meilleur pour tous.",
    symbol: { icon: "🏰", label: "Citadelle Laferrière (Haiti)", desc_en: "Inside the \"O\" — strength, leadership, resilience, hope and renewal.", desc_fr: "Dans le « O » — force, leadership, résilience, espoir et renouveau." },
  },
  {
    letter: "V", en: "Vibe", fr: "Vibe (Ambiance)",
    color: "text-gold", border: "border-gold", bg: "bg-gold-light",
    en_desc: "Cultivate a positive, vibrant, and unified Caribbean spirit. Our collective energy is what makes District 7020 unique — vibrant, connected, and united as one people across 7 territories and 3 languages.",
    fr_desc: "Cultiver un esprit caribéen positif, vibrant et uni. Notre énergie collective est ce qui rend le District 7020 unique — vibrant, connecté et uni en un seul peuple à travers 7 territoires et 3 langues.",
    symbol: { icon: "🌺", label: "Hibiscus Flower / Fleur d'Hibiscus", desc_en: "Above the \"V\" — Caribbean identity, beauty in diversity, a shared spirit.", desc_fr: "Au-dessus du « V » — identité caribéenne, beauté dans la diversité, esprit partagé." },
  },
  {
    letter: "E", en: "Excellence", fr: "Excellence",
    color: "text-love-dark", border: "border-love", bg: "bg-love-subtle",
    en_desc: "Strive for excellence in every initiative. We raise the bar — for the quality of our projects, the depth of our service, and the legacy we leave in our communities and across District 7020.",
    fr_desc: "Viser l'excellence dans chaque initiative. Nous relevons la barre — pour la qualité de nos projets, la profondeur de notre service et l'héritage que nous laissons dans nos communautés et à travers le District 7020.",
  },
];

export default function ThemePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-ink text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-love blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-xs tracking-widest uppercase text-white/40 mb-6 block">District 7020 · Rotary Year 2026–2027</span>
          <Image
            src="/assets/logos/theme-love-white.png"
            alt="Rooted in L.O.V.E."
            width={500}
            height={260}
            className="object-contain mx-auto mb-8 max-w-full"
            priority
          />
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            A unifying vision for all Rotaractors across District 7020 — a philosophy and a call to action, rooted in the values that define our Caribbean Rotaract community.
          </p>
        </div>
      </section>

      {/* Color logo */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <Image
            src="/assets/logos/rooted-in-love-color.png"
            alt="Rooted in L.O.V.E. — color logo"
            width={560}
            height={320}
            className="object-contain mx-auto max-w-full"
          />
        </div>
      </section>

      {/* Acronym */}
      <section className="py-20 px-4 bg-mist">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-ink mb-3">
              <span className="text-love">L</span>.<span className="text-navy">O</span>.<span className="text-gold">V</span>.<span className="text-love-dark">E</span>.
            </h2>
            <p className="text-gray-500">Four pillars. One district. United in purpose.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.letter} className={`bg-white rounded-2xl border-2 ${p.border} p-8`}>
                <div className="flex items-center gap-4 mb-5">
                  <span className={`font-display text-7xl font-bold leading-none ${p.color}`}>{p.letter}</span>
                  <div>
                    <h3 className={`font-display text-2xl font-bold ${p.color}`}>{p.en}</h3>
                    <p className="text-gray-400 text-sm italic">{p.fr}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">{p.en_desc}</p>
                <p className="text-gray-400 text-xs leading-relaxed italic">{p.fr_desc}</p>
                {p.symbol && (
                  <div className={`mt-5 p-4 rounded-xl ${p.bg} border border-gray-100`}>
                    <p className="text-sm font-medium text-gray-700">{p.symbol.icon} {p.symbol.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{p.symbol.desc_en}</p>
                    <p className="text-xs text-gray-400 italic mt-0.5">{p.symbol.desc_fr}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Symbolism */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center text-ink mb-4">Logo Symbolism / Symbolisme du Logo</h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">Every element of the logo carries meaning rooted in our Caribbean identity and shared values.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌱",
                title_en: "The Roots",
                title_fr: "Les Racines",
                desc_en: "Beneath the word L.O.V.E. are visible roots, symbolizing deep connection to our values, stability, and the idea that meaningful service begins from within.",
                desc_fr: "Sous le mot L.O.V.E. se trouvent des racines visibles, symbolisant un lien profond avec nos valeurs, la stabilité et l'idée que le service significatif commence de l'intérieur.",
                color: "text-love",
                bg: "bg-love-subtle border-love/20",
              },
              {
                icon: "🏰",
                title_en: "Citadelle Laferrière",
                title_fr: "Citadelle Laferrière",
                desc_en: "Inside the \"O\" — Haiti's historic fortress. Symbolizes strength, leadership, resilience, the enduring spirit of the Haitian people, and endless opportunities for growth. Behind it, a sunrise: new beginnings, hope, and renewal.",
                desc_fr: "Dans le « O » — la forteresse historique d'Haïti. Symbolise la force, le leadership, la résilience, l'esprit indéfectible du peuple haïtien et des opportunités infinies. Derrière, un lever de soleil : nouveaux commencements, espoir et renouveau.",
                color: "text-navy",
                bg: "bg-navy-light border-navy/20",
              },
              {
                icon: "🌺",
                title_en: "Hibiscus Flower",
                title_fr: "Fleur d'Hibiscus",
                desc_en: "Above the \"V\" — a widely recognized Caribbean symbol. Represents Caribbean identity, cultural unity, beauty in diversity, and our shared regional spirit across 7 territories.",
                desc_fr: "Au-dessus du « V » — un symbole caribéen largement reconnu. Représente l'identité caribéenne, l'unité culturelle, la beauté dans la diversité et notre esprit régional partagé dans 7 territoires.",
                color: "text-gold",
                bg: "bg-gold-light border-gold/20",
              },
            ].map((item) => (
              <div key={item.title_en} className={`p-6 rounded-2xl border-2 ${item.bg}`}>
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className={`font-display text-lg font-bold mb-1 ${item.color}`}>{item.title_en}</h3>
                <p className={`text-xs italic mb-3 ${item.color} opacity-70`}>{item.title_fr}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc_en}</p>
                <p className="text-xs text-gray-400 leading-relaxed italic">{item.desc_fr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4 bg-love text-white text-center">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/assets/logos/rooted-in-love-black.png"
            alt="Rooted in L.O.V.E."
            width={360}
            height={180}
            className="object-contain mx-auto mb-10 invert"
          />
          <h2 className="font-display text-3xl font-bold mb-6">Vision for the Year</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            Together, as one district, we will <strong>lead</strong>, create <strong>opportunities</strong>, embrace our Caribbean <strong>vibe</strong>, and pursue <strong>excellence</strong> — firmly rooted in L.O.V.E.
          </p>
          <p className="text-white/70 italic text-sm">
            Ensemble, en tant que district uni, nous dirigerons, créerons des opportunités, embrasserons notre vibe caraïbéenne et poursuivrons l'excellence, fermement ancrés dans L.O.V.E.
          </p>
          <div className="mt-10">
            <Link href="/about-the-district" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-love rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              Explore District 7020
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
