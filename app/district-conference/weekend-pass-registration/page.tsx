import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Weekend Pass Registration",
  description: "Register for the Rotaract District 7020 Conference 2026 Weekend Pass.",
};

export default function WeekendPassPage() {
  return (
    <>
      <section className="pt-32 pb-10 px-4 bg-navy text-white text-center">
        <Link href="/district-conference" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Conference
        </Link>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Weekend Pass Registration</h1>
        <p className="text-white/70">NEXUS: The 360° Experience · Kingston, Jamaica · June 2026</p>
      </section>
      <section className="py-16 px-4 bg-mist min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <span className="text-5xl block mb-4">🎟️</span>
            <h2 className="font-display text-2xl font-bold text-ink mb-3">Weekend Pass</h2>
            <p className="text-gray-500 text-sm mb-6">
              Enjoy the NEXUS conference weekend experience. Registration details coming soon.
            </p>
            <Link
              href="/district-conference/newsletter-signup"
              className="inline-flex items-center gap-2 px-7 py-3 bg-love text-white rounded-full text-sm font-medium hover:bg-love-dark transition-colors"
            >
              Get Notified via Newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
