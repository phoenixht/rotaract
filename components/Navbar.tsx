"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import Image from "next/image";

type Locale = "en" | "fr";

const labels: Record<Locale, {
  aboutUs: string; axes: string; district: string; projects: string;
  clubs: string; team: string; conference: string; theme: string;
  districtAbout: string; districtDRR: string; districtClubs: string; districtTeam: string;
}> = {
  en: {
    aboutUs: "About Us", axes: "Areas of Focus", district: "District", theme: "Our Theme",
    projects: "Projects & Achievements", clubs: "Our Clubs", team: "The Team",
    conference: "District Conference",
    districtAbout: "About the District", districtDRR: "Our DRR",
    districtClubs: "Our Clubs", districtTeam: "District Team",
  },
  fr: {
    aboutUs: "À propos de nous", axes: "Axes d'intervention", district: "District", theme: "Notre Thème",
    projects: "Nos projets / Réalisations", clubs: "Nos clubs", team: "L'équipe",
    conference: "Conférence du District",
    districtAbout: "À propos du District", districtDRR: "Notre DRR",
    districtClubs: "Nos clubs", districtTeam: "L'équipe du District",
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [locale, setLocale] = useState<Locale>("en");
  const pathname = usePathname();
  const L = labels[locale];

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "en" || stored === "fr") setLocale(stored);
  }, []);

  const toggleLocale = () => {
    const next: Locale = locale === "en" ? "fr" : "en";
    setLocale(next);
    localStorage.setItem("locale", next);
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [pathname]);

  const navLinks = [
    { label: L.aboutUs, href: "/about-us" },
    { label: L.theme, href: "/theme" },
    { label: L.axes, href: "/axes" },
    {
      label: L.district, href: "#",
      children: [
        { label: L.districtAbout, href: "/about-the-district" },
        { label: L.districtDRR, href: "/about-the-district#drr" },
        { label: L.districtClubs, href: "/clubs" },
        { label: L.districtTeam, href: "/team" },
      ],
    },
    { label: L.projects, href: "/projects" },
    { label: L.clubs, href: "/clubs" },
    { label: L.team, href: "/team" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || mobileOpen ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/assets/logos/district-7020-logo.png" alt="Rotaract District 7020"
              width={44} height={44} className="object-contain" priority />
            <span className="font-display font-bold text-love text-base leading-tight hidden sm:block">District 7020</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink hover:text-love transition-colors rounded-md"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}>
                    {link.label}
                    <ChevronDown size={13} className="opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                      openDropdown === link.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        className="block px-4 py-2.5 text-sm text-ink hover:text-love hover:bg-love-subtle transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === link.href ? "text-love" : "text-ink hover:text-love"
                  }`}>
                  {link.label}
                </Link>
              )
            )}
            <a href="https://conference.rotaractd7020.com" target="_blank" rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm font-medium rounded-full border-2 border-love text-love hover:bg-love hover:text-white transition-all">
              {L.conference}
            </a>
            <button onClick={toggleLocale}
              className="ml-2 flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-500 hover:text-love transition-colors rounded-md">
              <Globe size={14} />
              {locale === "en" ? "FR" : "EN"}
            </button>
          </nav>

          <div className="xl:hidden flex items-center gap-2">
            <button onClick={toggleLocale} className="p-2 text-gray-500"><Globe size={18} /></button>
            <button className="p-2 text-ink" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-2 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-ink border-b border-gray-50"
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}>
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-4 pb-2">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href}
                          className="block py-2.5 text-sm text-gray-600 hover:text-love">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href}
                  className="block py-3 text-sm font-medium text-ink border-b border-gray-50 hover:text-love transition-colors">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <a href="https://conference.rotaractd7020.com" target="_blank" rel="noopener noreferrer"
            className="block mt-4 py-3 px-4 text-center text-sm font-medium rounded-full border-2 border-love text-love">
            {L.conference}
          </a>
        </div>
      )}
    </header>
  );
}