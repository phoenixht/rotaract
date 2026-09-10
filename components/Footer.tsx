import Link from "next/link";
import { Mail, MapPin, Lock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <Image src="/assets/logos/district-7020-logo-white.jpeg" alt="Rotaract District 7020"
                width={60} height={60} className="object-contain mb-3 rounded-full" />
              <p className="text-white/50 text-xs leading-relaxed">
                Rotaract District 7020<br />
              </p>
            </div>
            <Image src="/assets/logos/rooted-in-love.png" alt="Rooted in L.O.V.E."
              width={140} height={70} className="object-contain opacity-80" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Our Theme — L.O.V.E.", href: "/theme" },
                { label: "Areas of Focus", href: "/axes" },
                { label: "About the District", href: "/about-the-district" },
                { label: "Our Clubs", href: "/clubs" },
                { label: "The Team", href: "/team" },
                { label: "Projects", href: "/projects" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/50 hover:text-love transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-sm">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={15} className="mt-0.5 shrink-0 text-love" />
                
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Mail size={15} className="mt-0.5 shrink-0 text-love" />
                <a href="mailto:drr.rd7020@gmail.com" className="hover:text-love transition-colors break-all">
                  drr.rd7020@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Mail size={15} className="mt-0.5 shrink-0 text-love" />
                <a href="mailto:rotaract7020conference@gmail.com" className="hover:text-love transition-colors break-all">
                  rotaract7020conference@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex gap-2 mt-6">
              {[
                { label: "IG", href: "https://www.instagram.com/rotaractd7020" },
                { label: "FB", href: "https://www.facebook.com/rotaractd7020" },
                { label: "TT", href: "https://www.tiktok.com/@rotaractd7020" },
                { label: "YT", href: "https://www.youtube.com/@rotaractd7020" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-love hover:text-white transition-all text-xs font-bold">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Rotaract District 7020. All rights reserved.</p>
          <p className="text-xs text-white/20">
            Developed by{" "}
            <a href="https://updatetech.co" target="_blank" rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors underline underline-offset-2">
              UpDate Tech & Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
