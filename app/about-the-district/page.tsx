import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About The District",
  description: "Rotaract District 7020 spans 7 territories, 43+ clubs, and 884+ Rotaractors across the Caribbean.",
};

const countries = [
  { flag: "🇧🇸", name: "The Bahamas", clubs: ["Rotaract Club of Nassau", "Rotaract Club of East Nassau", "Rotaract Club of Cable Beach"] },
  { flag: "🇻🇬", name: "British Virgin Islands", clubs: ["Rotaract Club of Tortola"] },
  { flag: "🇰🇾", name: "Cayman Islands", clubs: ["Rotaract Club of Grand Cayman"] },
  { flag: "🇭🇹", name: "Haiti", clubs: ["Rotaract Club of Port-au-Prince", "Rotaract Club of Pétion-Ville", "Rotaract Club of Cap-Haïtien"] },
  { flag: "🇯🇲", name: "Jamaica", clubs: ["Rotaract Club of Kingston", "Rotaract Club of Portmore", "Rotaract Club of Montego Bay", "Rotaract Club of Spanish Town", "Rotaract Club of New Kingston"] },
  { flag: "🇹🇨", name: "Turks & Caicos", clubs: ["Rotaract Club of Providenciales"] },
  { flag: "🇻🇮", name: "U.S. Virgin Islands", clubs: ["Rotaract Club of St. Thomas", "Rotaract Club of St. Croix"] },
];

const rolesEN = [
  "Club President", "Community Service Chair", "International Service Chair",
  "Youth Services Chair", "District Disaster Relief Chair",
  "District International Service Chair", "District Project Chair",
];

export default function AboutDistrictPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-navy text-white text-center">
        <span className="text-xs tracking-widest uppercase text-white/50 mb-4 block">Rotaract</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gold">District 7020</span>
        </h1>
        <p className="max-w-2xl mx-auto text-white/70 text-lg leading-relaxed">
          Out of 529 districts around the world, District 7020 stands as a beacon of service across the Caribbean, uniting diverse cultures and languages.
        </p>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "7", label: "Territories" },
            { value: "43+", label: "Clubs" },
            { value: "884+", label: "Rotaractors" },
            { value: "3", label: "Languages" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl font-bold text-love mb-2">{s.value}</p>
              <p className="text-gray-500 text-sm uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 px-4 bg-mist">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center text-ink mb-4">Member Territories</h2>
          <p className="text-center text-gray-500 mb-14">
            Seven Caribbean territories across three languages — English, French, and Creole.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {countries.map((country) => (
              <div key={country.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50">
                  <span className="text-5xl block mb-3">{country.flag}</span>
                  <h3 className="font-display text-lg font-bold text-ink">{country.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{country.clubs.length} club{country.clubs.length !== 1 ? "s" : ""}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {country.clubs.map((club) => (
                      <li key={club} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-love mt-0.5 shrink-0">•</span>{club}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRR Section */}
      <section id="drr" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-ink mb-3">
              Notre DRR / Our DRR
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The District Rotaract Representative — elected liaison between Rotaract clubs, the District Committee, and Rotary International.
            </p>
          </div>

          {/* DRR Hero Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo + banner */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/img/drr-herode.png"
                  alt="Herode Metellus — DRR District 7020"
                  width={900}
                  height={600}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-xs tracking-widest uppercase text-love font-medium mb-2">Rotary Year 2026–2027</p>
              <h3 className="font-display text-4xl font-bold text-ink mb-1">Herode Metellus</h3>
              <p className="text-love font-medium mb-6">District Rotaract Representative</p>

              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  Born and raised in Haiti, Herode Metellus is a finance and project management professional, a passionate Rotaractor, and a committed advocate for nonprofit development, peacebuilding, and lasting social impact.
                </p>
                <p>
                  He is currently pursuing a <strong>Master of Public Policy at the University of Chicago</strong> as a Rotary Global Scholar, with a focus on data analytics, international development, and survey research. This summer, he joins the <strong>World Bank</strong> as a Cost-Effectiveness Analyst Intern.
                </p>
                <p>
                  Herode has been an active member of the <strong>Rotaract Club of Pétion-Ville</strong> since 2016. In 2024, he expanded his international experience through the <strong>Rotary New Generations Service Exchange Program in India</strong>.
                </p>
              </div>

              {/* Leadership roles */}
              <div className="mt-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Leadership Roles</p>
                <div className="flex flex-wrap gap-2">
                  {rolesEN.map((r) => (
                    <span key={r} className="text-xs px-3 py-1.5 bg-love-subtle text-love rounded-full border border-love/20">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full bio tabs FR / EN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EN */}
            <div className="bg-mist rounded-2xl p-8">
              <p className="text-[10px] tracking-widest uppercase text-love font-medium mb-4">English</p>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  His leadership is guided by a strong belief in building a more inclusive, peaceful, and empowered Rotaract in District 7020 and the global community.
                </p>
                <p>
                  Beyond his professional journey, Herode is an avid reader, a nature and animal lover, and someone who deeply enjoys the arts. He loves singing, visiting museums, watching sports, and listening to podcasts.
                </p>
                <p className="italic text-gray-400">
                  "Through both his leadership and personal passions, Herode brings warmth, creativity, discipline, and purpose to everything he does."
                </p>
              </div>
            </div>

            {/* FR */}
            <div className="bg-mist rounded-2xl p-8">
              <p className="text-[10px] tracking-widest uppercase text-love font-medium mb-4">Français</p>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Son leadership est guidé par une forte conviction : contribuer à bâtir un mouvement Rotaract du District 7020 et une communauté mondiale plus inclusive, pacifique et autonome.
                </p>
                <p>
                  Au-delà de son parcours professionnel, Hérode est un lecteur passionné, un amoureux de la nature et des animaux, ainsi qu'une personne qui apprécie profondément les arts. Il aime chanter, visiter des musées, regarder du sport et écouter des podcasts.
                </p>
                <p className="italic text-gray-400">
                  « À travers son leadership et ses passions personnelles, Hérode apporte chaleur, créativité, discipline et sens du devoir dans tout ce qu'il entreprend. »
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 px-4 bg-mist">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center text-ink mb-10">District History</h2>
          <div className="text-gray-600 space-y-4 leading-relaxed">
            <p>
              The first chartered club in District 7020 was the <strong>Rotaract Club of Kingston</strong>, chartered in June 1969 — just one year after Rotaract was introduced globally.
            </p>
            <p>
              The District structure was introduced by Rotarian Paul Brown in 1998, recognizing the rapid growth of the young professional arm of Rotary across the Caribbean.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-love text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4">Rooted in L.O.V.E. — 2026–27</h2>
          <p className="text-white/80 mb-8">Leading with empathy, serving with compassion, building communities with love.</p>
          <Link href="/clubs" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-love rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Explore Our Clubs
          </Link>
        </div>
      </section>
    </>
  );
}
