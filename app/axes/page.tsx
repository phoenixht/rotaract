import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas of Focus / Axes d'intervention",
};

const axes = [
  { en: "Disease Prevention & Treatment", fr: "Prévention et traitement des maladies", icon: "🏥", color: "bg-red-50 border-red-200" },
  { en: "Water, Sanitation & Hygiene", fr: "Eau, assainissement et hygiène", icon: "💧", color: "bg-blue-50 border-blue-200" },
  { en: "Maternal & Child Health", fr: "Santé maternelle et infantile", icon: "👶", color: "bg-pink-50 border-pink-200" },
  { en: "Basic Education & Literacy", fr: "Éducation de base et alphabétisation", icon: "📚", color: "bg-yellow-50 border-yellow-200" },
  { en: "Economic & Community Development", fr: "Développement économique et communautaire", icon: "🤝", color: "bg-green-50 border-green-200" },
  { en: "Peace & Conflict Prevention", fr: "Paix et prévention des conflits", icon: "☮️", color: "bg-purple-50 border-purple-200" },
  { en: "Environment", fr: "Environnement", icon: "🌿", color: "bg-emerald-50 border-emerald-200" },
];

export default function AxesPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-mist text-center">
        <span className="text-xs tracking-widest uppercase text-love font-medium mb-4 block">District 7020</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mb-4">
          Areas of Focus
        </h1>
        <p className="text-gray-500 text-lg">Axes d&apos;intervention</p>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {axes.map((axe) => (
            <div key={axe.en} className={`p-8 rounded-2xl border-2 ${axe.color}`}>
              <span className="text-4xl block mb-4">{axe.icon}</span>
              <h3 className="font-display font-bold text-lg text-ink mb-1">{axe.en}</h3>
              <p className="text-sm text-gray-500 italic">{axe.fr}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
