"use client";

import { useState } from "react";

interface MemberCardProps {
  name: string;
  role: string;
  img: string;
}

export default function MemberCard({ name, role, img }: MemberCardProps) {
  const [imgError, setImgError] = useState(false);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="text-center group">
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md mb-3 border-2 border-white group-hover:border-love transition-colors">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-love-subtle flex items-center justify-center">
            <span className="text-love font-display font-bold text-xl">{initials}</span>
          </div>
        )}
      </div>
      <p className="font-display font-semibold text-sm text-ink leading-tight">{name}</p>
      <p className="text-xs text-gray-400 mt-0.5">{role}</p>
    </div>
  );
}
