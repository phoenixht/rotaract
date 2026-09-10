import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Achievements / Nos projets",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-mist text-center">
        <span className="text-xs tracking-widest uppercase text-love font-medium mb-4 block">District 7020</span>
        <h1 className="font-display text-5xl font-bold text-ink mb-2">Projects & Achievements</h1>
        <p className="text-gray-500 text-lg">Nos projets / Réalisations</p>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-16 rounded-2xl border-2 border-dashed border-gray-200 bg-mist">
            <span className="text-5xl block mb-4">🚧</span>
            <h2 className="font-display text-2xl font-bold text-ink mb-3">Coming Soon</h2>
            <p className="text-gray-500">District projects and achievements will be listed here. Contact us to submit your club&apos;s project.</p>
          </div>
        </div>
      </section>
    </>
  );
}
