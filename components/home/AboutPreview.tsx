import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-24 px-4 bg-mist">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="text-xs tracking-widest uppercase text-magenta font-medium mb-4 block">
            About Rotaract
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
            Rotary + Action =<br />
            <span className="text-magenta">Rotaract</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Rotaract is a service club for young people over 18 dedicated to finding innovative solutions to the world's most pressing challenges, while developing leadership skills and making friends from around the world.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our core mission: enhance knowledge and skills for personal development, address the physical and social needs of communities, and promote better relations between all people worldwide through a framework of friendship and service.
          </p>
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-magenta text-white rounded-full text-sm font-medium hover:bg-magenta-dark transition-colors"
          >
            Learn About Us
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4">
          {[
            {
              icon: "🌎",
              title: "Fun Networking & Social Activities",
              desc: "Build lifelong connections with young leaders from across the Caribbean and beyond.",
            },
            {
              icon: "📈",
              title: "Professional Development",
              desc: "Workshops, leadership training, and skill-building opportunities tailored to your growth.",
            },
            {
              icon: "🤝",
              title: "International Network",
              desc: "Join 184,000+ members across 8,000+ clubs in 163 countries and geographical areas.",
            },
          ].map((card) => (
            <div key={card.title} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
              <span className="text-2xl mt-0.5">{card.icon}</span>
              <div>
                <h3 className="font-display font-semibold text-base text-ink mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
