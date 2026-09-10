"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  { src: "/assets/img/cap-haitien-square.png", alt: "Cap-Haïtien, Haiti", caption: "Cap-Haïtien, Haïti" },
  { src: "/assets/img/citadelle-laferriere.png", alt: "Citadelle Laferrière, Haiti", caption: "Citadelle Laferrière, Haïti" },
  { src: "/assets/img/haiti-flag.png", alt: "Haiti", caption: "Haïti" },
  { src: "/assets/img/bamboo-river-rafting.jpg", alt: "Bamboo River Rafting, Jamaica", caption: "Bamboo River Rafting, Jamaica" },
  { src: "/assets/img/devon-house.jpg", alt: "Devon House, Kingston", caption: "Devon House, Kingston" },
  { src: "/assets/img/dunns-river-falls.jpg", alt: "Dunn's River Falls", caption: "Dunn's River Falls, Jamaica" },
  { src: "/assets/img/kingston.jpg", alt: "Kingston, Jamaica", caption: "Kingston, Jamaica" },
  { src: "/assets/img/pelican-bar.jpg", alt: "Pelican Bar, Jamaica", caption: "Pelican Bar, Jamaica" },
  { src: "/assets/img/blue-hole.jpg", alt: "Blue Hole, Jamaica", caption: "Blue Hole, Jamaica" },
  { src: "/assets/img/mystic-mountain.jpg", alt: "Mystic Mountain", caption: "Mystic Mountain, Jamaica" },
  { src: "/assets/img/seven-mile-beach.jpg", alt: "Seven Mile Beach, Negril", caption: "Seven Mile Beach, Negril" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((index + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5500);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative h-screen min-h-[560px] max-h-[900px] overflow-hidden">
      {slides.map((slide, i) => (
        <div key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== current}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="mb-6">
          <Image src="/assets/logos/district-7020-logo-white.jpeg" alt="Rotaract District 7020"
            width={80} height={80} className="object-contain mx-auto rounded-full" priority />
        </div>
        <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-3 font-body">
          Welcome to / Bienvenue chez
        </p>
        <h1 className="font-display text-white text-5xl md:text-7xl font-bold mb-2 leading-none">Rotaract</h1>
        <div className="w-16 h-0.5 bg-love mx-auto my-4" />
        <p className="text-white/90 text-xl md:text-2xl font-display italic mb-1">District 7020</p>
        

        <div className="mt-8 mb-10">
          <Image src="/assets/logos/theme-love-white.png" alt="Rooted in L.O.V.E."
            width={220} height={110} className="object-contain mx-auto opacity-90" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/about-us"
            className="px-7 py-3 bg-love text-white rounded-full text-sm font-medium hover:bg-love-dark transition-colors">
            Learn More / En savoir plus
          </a>
          <a href="/theme"
            className="px-7 py-3 bg-white/15 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/25 transition-colors">
            Our Theme / Notre Thème
          </a>
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <p className="text-white/50 text-xs tracking-widest uppercase">{slides[current].caption}</p>
      </div>

      <button onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        aria-label="Previous"><ChevronLeft size={20} /></button>
      <button onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        aria-label="Next"><ChevronRight size={20} /></button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-love" : "w-2 h-2 bg-white/40"}`}
            aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
