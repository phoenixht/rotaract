import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clubs / Nos clubs",
  description: "All Rotaract clubs in District 7020 across 7 Caribbean territories.",
};

const clubs = [
  { country: "🇧🇸 Bahamas", name: "Rotaract Club of Nassau", website: "#", instagram: "#" },
  { country: "🇧🇸 Bahamas", name: "Rotaract Club of East Nassau", website: "#", instagram: "#" },
  { country: "🇻🇬 British Virgin Islands", name: "Rotaract Club of Tortola", website: "#", instagram: "#" },
  { country: "🇰🇾 Cayman Islands", name: "Rotaract Club of Grand Cayman", website: "#", instagram: "#" },
  { country: "🇭🇹 Haiti", name: "Rotaract Club of Port-au-Prince", website: "#", instagram: "#" },
  { country: "🇭🇹 Haiti", name: "Rotaract Club of Pétion-Ville", website: "#", instagram: "#" },
  { country: "🇭🇹 Haiti", name: "Rotaract Club of Cap-Haïtien", website: "#", instagram: "#" },
  { country: "🇯🇲 Jamaica", name: "Rotaract Club of Kingston", website: "#", instagram: "#" },
  { country: "🇯🇲 Jamaica", name: "Rotaract Club of Portmore", website: "#", instagram: "#" },
  { country: "🇯🇲 Jamaica", name: "Rotaract Club of Montego Bay", website: "#", instagram: "#" },
  { country: "🇯🇲 Jamaica", name: "Rotaract Club of Spanish Town", website: "#", instagram: "#" },
  { country: "🇯🇲 Jamaica", name: "Rotaract Club of New Kingston", website: "#", instagram: "#" },
  { country: "🇹🇨 Turks & Caicos", name: "Rotaract Club of Providenciales", website: "#", instagram: "#" },
  { country: "🇻🇮 U.S. Virgin Islands", name: "Rotaract Club of St. Thomas", website: "#", instagram: "#" },
  { country: "🇻🇮 U.S. Virgin Islands", name: "Rotaract Club of St. Croix", website: "#", instagram: "#" },
];

const grouped = clubs.reduce<Record<string, typeof clubs>>((acc, club) => {
  if (!acc[club.country]) acc[club.country] = [];
  acc[club.country].push(club);
  return acc;
}, {});

export default function ClubsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-love text-white text-center">
        <span className="text-xs tracking-widest uppercase text-white/60 mb-4 block">District 7020</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Our Clubs / Nos clubs</h1>
        <p className="max-w-xl mx-auto text-white/80">
          {clubs.length} clubs across 7 territories, united by LOVE and service.
        </p>
      </section>

      <section className="py-20 px-4 bg-mist">
        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(grouped).map(([country, countryClubs]) => (
            <div key={country}>
              <h2 className="font-display text-2xl font-bold text-ink mb-6">{country}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {countryClubs.map((club) => (
                  <div key={club.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
                    <h3 className="font-display font-semibold text-base text-ink">{club.name}</h3>
                    <div className="flex gap-3 mt-auto">
                      <a href={club.website}
                        className="text-xs px-3 py-1.5 rounded-full border border-love text-love hover:bg-love hover:text-white transition-colors">
                        Website
                      </a>
                      <a href={club.instagram}
                        className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-love hover:text-love transition-colors">
                        Instagram
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
