import Image from "next/image";

const pillars = [
  {
    letter: "L",
    en: "Leadership",
    fr: "Leadership",
    color: "text-love",
    bg: "bg-love-subtle border-love/30",
    desc_en: "Lead with intention and integrity in every club, initiative, and community effort.",
    desc_fr: "Diriger avec intention et intégrité dans chaque club, initiative et effort communautaire.",
  },
  {
    letter: "O",
    en: "Opportunities",
    fr: "Opportunités",
    color: "text-navy",
    bg: "bg-navy-light border-navy/20",
    desc_en: "Create and embrace opportunities for personal growth, professional development, and service.",
    desc_fr: "Créer et saisir des opportunités de croissance personnelle, de développement professionnel et de service.",
    symbol_en: "The Citadelle Laferrière (Haiti) inside the O — strength, heritage, resilience, and the promise of a brighter future.",
    symbol_fr: "La Citadelle Laferrière (Haïti) dans le « O » — force, héritage, résilience et promesse d'un avenir meilleur.",
  },
  {
    letter: "V",
    en: "Vibe",
    fr: "Vibe (Ambiance)",
    color: "text-gold",
    bg: "bg-gold-light border-gold/30",
    desc_en: "Cultivate a positive, vibrant, and unified Caribbean spirit across all clubs and territories.",
    desc_fr: "Cultiver un esprit caribéen positif, vibrant et uni dans tous les clubs et territoires.",
    symbol_en: "The hibiscus flower above the V — Caribbean identity, beauty in diversity, and a shared regional spirit.",
    symbol_fr: "La fleur d'hibiscus au-dessus du « V » — identité caribéenne, beauté dans la diversité et esprit régional partagé.",
  },
  {
    letter: "E",
    en: "Excellence",
    fr: "Excellence",
    color: "text-love-dark",
    bg: "bg-love-subtle border-love/20",
    desc_en: "Strive for excellence in every initiative, elevating the standard of service across District 7020.",
    desc_fr: "Viser l'excellence dans chaque initiative, en élevant le niveau de service dans tout le District 7020.",
  },
];

export default function LoveTheme() {
  return (
    <section className="py-24 px-4 bg-white" id="theme">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-love-subtle border border-love/20 rounded-full text-xs font-medium text-love tracking-widest uppercase">
            Thème 2026–27 · 2026–27 Theme
          </span>
        </div>

        {/* Official logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/logos/rooted-in-love-color.png"
            alt="Rooted in L.O.V.E. — Rotaract District 7020 2026-27"
            width={520}
            height={300}
            className="object-contain max-w-full"
            priority
          />
        </div>

        <div className="w-16 h-0.5 bg-love mx-auto mb-12" />

        {/* Bilingual intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-love mb-3 font-medium">English</p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-love">Rooted in L.O.V.E.</strong> is a unifying vision for all Rotaractors across District 7020 for the 2026–2027 Rotary year — both a philosophy and a call to action, inviting every club and member to ground their service, leadership, and impact in core values that define who we are as a Caribbean Rotaract community.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              Just as roots nourish a tree, our values of Leadership, Opportunities, Vibe and Excellence nourish our actions and define our impact.
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-widest uppercase text-love mb-3 font-medium">Français</p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-love">Rooted in L.O.V.E.</strong> représente une vision unificatrice pour tous les Rotaractiens du District 7020 pour l&apos;année rotarienne 2026–2027 — à la fois une philosophie et un appel à l&apos;action, invitant chaque club et chaque membre à ancrer leur service dans des valeurs fondamentales qui définissent qui nous sommes en tant que communauté Rotaract caraïbéenne.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              Tout comme les racines nourrissent un arbre, nos valeurs de Leadership, d&apos;Opportunités, de Vibe et d&apos;Excellence nourrissent nos actions et définissent notre impact.
            </p>
          </div>
        </div>

        {/* L.O.V.E. Pillars */}
        <h2 className="font-display text-3xl font-bold text-center text-ink mb-10">
          <span className="text-love">L</span>.<span className="text-navy">O</span>.<span className="text-gold">V</span>.<span className="text-love-dark">E</span>. — The Four Pillars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p) => (
            <div key={p.letter} className={`rounded-2xl border-2 p-6 ${p.bg}`}>
              <div className={`font-display text-6xl font-bold mb-3 ${p.color}`}>{p.letter}</div>
              <h3 className={`font-display text-lg font-bold mb-1 ${p.color}`}>{p.en}</h3>
              <p className="text-xs text-gray-400 italic mb-3">{p.fr}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc_en}</p>
              {p.symbol_en && (
                <p className="text-xs text-gray-400 leading-relaxed mt-3 border-t border-gray-200 pt-3">
                  🏛️ {p.symbol_en}
                </p>
              )}
              {p.letter === "V" && (
                <p className="text-xs text-gray-400 leading-relaxed mt-1">
                  🌺 {p.symbol_en}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Logo symbolism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-mist rounded-2xl p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-ink mb-4">Logo Symbolism</h3>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-love font-bold shrink-0">✦</span>
                <span><strong>The Roots</strong> — beneath L.O.V.E., visible roots symbolize deep connection to our values and stability from a strong foundation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-navy font-bold shrink-0">✦</span>
                <span><strong>Citadelle Laferrière</strong> (inside O) — Haiti&apos;s historic fortress representing strength, heritage, and the promise of a brighter future.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold shrink-0">✦</span>
                <span><strong>Hibiscus Flower</strong> (above V) — the Caribbean symbol of identity, beauty in diversity, and our shared regional spirit.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-ink mb-4">Symbolisme du Logo</h3>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-love font-bold shrink-0">✦</span>
                <span><strong>Les Racines</strong> — sous L.O.V.E., des racines visibles symbolisent un lien profond avec nos valeurs et la stabilité d&apos;une fondation solide.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-navy font-bold shrink-0">✦</span>
                <span><strong>Citadelle Laferrière</strong> (dans le O) — la forteresse historique d&apos;Haïti représentant la force, l&apos;héritage et la promesse d&apos;un avenir meilleur.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold shrink-0">✦</span>
                <span><strong>Fleur d&apos;Hibiscus</strong> (au-dessus du V) — symbole caribéen de l&apos;identité, la beauté dans la diversité et notre esprit régional partagé.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* White logo on colored bg */}
        <div className="mt-10 rounded-2xl bg-love p-10 flex justify-center">
          <Image
            src="/assets/logos/theme-love-white.png"
            alt="Rooted in L.O.V.E. — white version"
            width={400}
            height={200}
            className="object-contain max-w-full"
          />
        </div>

      </div>
    </section>
  );
}
