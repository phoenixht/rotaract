import type { Metadata } from "next";
import MemberCard from "@/components/MemberCard";

export const metadata: Metadata = {
  title: "The Team / L'équipe",
  description: "Meet the District 7020 team for the 2026-27 Rotary Year.",
};

const teams = [
  
  {
    name: "Executive Committee",
    nameFr: "Comité Exécutif",
    color: "border-love",
    members: [
      { name: "Herode Metellus", role: "District Rotaract Representative", img: "/assets/img/team/herode-metellus.jpg" },
      { name: "Cyd Grant", role: "District Rotaract Chair (DRC)", img: "/assets/img/team/cyd-grant.jpg" },
      { name: "Juliann Grant", role: "District Rotaract Representative Elect (DRRE)", img: "/assets/img/team/juliann-grant.jpg" },
      { name: "Ruth Prime Flore Desravines", role: "District Rotaract Representative Nominee (DRRN)", img: "/assets/img/team/ruth-prime-flore-desravines.jpg" },
      { name: "Mikhail Raymore ", role: "Immediate Past District Rotaract Representative (IPDRR)", img: "/assets/img/team/mikhail-raymore.jpg" },
    ],
  },
  {
    name: "Administration Team",
    nameFr: "Équipe Administration",
    color: "border-navy",
    members: [
      { name: "Elisabeth Compas", role: "District Rotaract Secretary and Administration Lead (DRS)", img: "/assets/img/team/elisabeth-compas.jpg" },
      { name: "Tesharna Williams", role: "Asst. District Rotaract Secretary and Administration Lead (ADRS)", img: "/assets/img/team/tesharna-williams.jpg" },
      { name: "Taisha Dieuseul", role: "District Rotaract Translation and Language Access Chair (DRTC)", img: "/assets/img/team/taisha-dieuseul.jpg" },
    
    ],
  },
  {
    name: "Finance Team",
    nameFr: "Équipe Finance",
    color: "border-navy",
    members: [
      { name: "Sedric Jacques Antoine ", role: "District Rotaract Treasurer (DRT)", img: "/assets/img/team/sedric-jacques-antoine.jpg" },
      { name: "Jacqueline Narcisse", role: "Assistant District Rotaract Treasurer (ADRT)", img: "/assets/img/team/jacqueline-narcisse.jpg" },
      { name: "Peterson Hyacinthe", role: "District Rotaract Fundraising Chair (DRFC)", img: "/assets/img/team/peterson-hyacinthe.jpg" },
      { name: "Julmir Cantave", role: "District Rotaract Merchandising Chair (DRMC)", img: "/assets/img/team/julmir-cantave.jpg" },
    ],
  },
  {
    name: "Conference Team",
    nameFr: "Équipe Conférence",
    color: "border-love",
    members: [
      { name: "Stefani Tieri Georges ", role: "District Rotaract Conference Co-Chair (DRCC)", img: "/assets/img/team/stefanie-tieri-georges.jpg" },
      { name: "Neferti Gracia", role: "District Rotaract Conference Co-Chair (DRCC)", img: "/assets/img/team/neferti-gracia.jpg" },
       { name: "Erinique Johnson", role: "District Rotaract Conference Co-Chair (DRCC)", img: "/assets/img/team/erinique-johnson.jpg" },
    ],
  },
  {
    name: "Engagement Team",
    nameFr: "Équipe Engagement",
    color: "border-gold",
    members: [
      { name: "Nideka Misick", role: "District Rotaract Learning and Development Chair", img: "/assets/img/team/nideka-misick.jpg" },
      { name: "Joel Nelson", role: "District Rotaract Diversity, Equity, and Inclusion Chair (DEI)", img: "/assets/img/team/joel-nelson.jpg" },
      { name: "Shakiah Lewis", role: "District Rotaract Membership and Transition Chair (DRMTC)", img: "/assets/img/team/shakiah-lewis.jpg" },
      { name: "Shanee Hussey", role: "Assistant District Rotaract Membership and Transition Chair (DRMTC)", img: "/assets/img/team/shanee-hussey.jpg" },
      { name: "May Lissa Laguerre Bigor", role: "District Rotaract Wellness Chair (DRWC)", img: "/assets/img/team/may-lissa-laguerre-bigor.jpg" },
    ],
  },
  {
    name: "Projects Team",
    nameFr: "Équipe Projets",
    color: "border-love",
    members: [
      { name: "Ruth Prime Flore Desravines", role: "District Rotaract Projects and Sustainability Chair (DRPC)", img: "/assets/img/team/ruth-prime-flore.jpg" },
      { name: "Claricia Clerveaux", role: "District Rotaract Disaster Risk Management and Environmental Sustainability", img: "/assets/img/team/claricia-clerveaux.jpg" },
      { name: "Raynae Myers", role: "District Rotaract Intl Service Chair (DRISC)", img: "/assets/img/team/raynae-myers.jpg" },
      { name: "Junior Bailey", role: "District Rotaract Foundation Chair (DRFC)", img: "/assets/img/team/junior-bailey.jpg" },
    ],
  },
  
  {
    name: "Media & Communications",
    nameFr: "Médias & Communications",
    color: "border-gold",
    members: [
      { name: "Maxon Michel", role: "District Rotaract Communications Chair (DRCC)", img: "/assets/img/team/maxon-michel.jpg" },
      { name: "Lyne Prisca Desravines", role: "District Rotaract Public Image Chair (DRPIC)", img: "/assets/img/team/lyne-prisca-desravines.jpg" },
      { name: "Dorotheline PAUL", role: "Assistant District Rotaract Public Image Chair (ADRPIC)", img: "/assets/img/team/dorotheline-paul.jpg" },
      { name: "Exalus Valery Magloire", role: "District Rotaract Technology Chair and Webmaster (DRTC)", img: "/assets/img/team/valery-magloire-exalus.jpg" },
    ],
  },
  {
    name: "Assistant District Rotaract Representative (ADRR)",
    nameFr: "Représentant(e) Rotaract de District Adjoint(e) (ADRR)",
    color: "border-gold",
    members: [
      { name: "Assistant District Rotaract Representative Team", role: "ADDRs", img: "/assets/img/team/addrs.jpg" },
    ],
  },
  
  
];

export default function TeamPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-ink text-white text-center">
        <span className="text-xs tracking-widest uppercase text-white/40 mb-4 block">2026–27</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
          The Team / <span className="text-love">L&apos;équipe</span>
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          The dedicated leaders of District 7020 — Rooted in L.O.V.E.
        </p>
      </section>

      <section className="py-20 px-4 bg-mist">
        <div className="max-w-7xl mx-auto space-y-20">
          {teams.map((team) => (
            <div key={team.name}>
              <div className="mb-8">
                <h2 className={`font-display text-2xl font-bold text-ink pb-3 border-b-2 ${team.color} inline-block`}>
                  {team.name}
                </h2>
                <p className="text-gray-400 text-sm italic mt-1">{team.nameFr}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {team.members.map((member) => (
                  <MemberCard key={`${team.name}-${member.name}`} {...member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
