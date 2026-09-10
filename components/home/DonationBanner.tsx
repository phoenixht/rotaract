import Link from "next/link";
import { Heart } from "lucide-react";

export default function DonationBanner() {
  return (
    <section className="py-16 px-4 bg-love-subtle border-y border-love/10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="w-14 h-14 rounded-full bg-love/10 flex items-center justify-center shrink-0">
          <Heart size={24} className="text-love" />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-2xl font-bold text-love mb-1">
            Relief Efforts for Hurricane Melissa
          </h2>
          <p className="text-gray-500 text-sm">
            Make a donation to support relief and recovery efforts across the Caribbean. Every contribution helps families rebuild.
          </p>
        </div>
        <Link href="/donate"
          className="shrink-0 px-8 py-3.5 bg-love text-white rounded-full text-sm font-medium hover:bg-love-dark transition-colors">
          Donate Now / Faire un Don
        </Link>
      </div>
    </section>
  );
}
