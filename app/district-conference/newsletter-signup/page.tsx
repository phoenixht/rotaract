import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NewsletterForm from "@/components/conference/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter Sign Up",
  description: "Stay updated on the Rotaract District 7020 Conference 2026.",
};

export default function NewsletterPage() {
  return (
    <>
      <section className="pt-32 pb-10 px-4 bg-navy text-white text-center">
        <Link href="/district-conference" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Conference
        </Link>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Newsletter Sign Up</h1>
        <p className="text-white/70">Stay informed about NEXUS 2026</p>
      </section>
      <section className="py-16 px-4 bg-mist min-h-screen">
        <div className="max-w-xl mx-auto">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
