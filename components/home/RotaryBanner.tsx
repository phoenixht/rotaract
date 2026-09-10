import Image from "next/image";
import Link from "next/link";

export default function RotaryBanner() {
  return (
    <section className="py-6 px-4 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/logos/rotary-president-banner.png"
            alt="Rotary International President 2026-27"
            width={60}
            height={60}
            className="object-contain rounded-lg"
          />
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Rotary International · 2026–27</p>
            <p className="font-display font-semibold text-sm text-ink">Rotary Year 2026–2027</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/assets/logos/rotary-international.png"
            alt="Rotary International"
            width={100}
            height={40}
            className="object-contain"
          />
          <a href="https://my.rotary.org" target="_blank" rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-love transition-colors">
            rotary.org →
          </a>
        </div>
      </div>
    </section>
  );
}
