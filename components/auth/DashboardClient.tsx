"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Users, Mail, LogOut, Shield, Upload } from "lucide-react";
import type { User } from "@supabase/supabase-js";

export default function DashboardClient() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { window.location.href = "/auth/login"; return; }
      setUser(user);
      setLoading(false);
    })();
  }, []);

  const handleLogout = async () => {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.signOut();
    window.location.href = "/auth/login";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-mist flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-love border-t-transparent animate-spin" />
      </div>
    );
  }

  const sections = [
    { icon: <FileText size={22} />, title: "Reports", desc: "Upload and access club reports securely.", color: "text-love", bg: "bg-love-subtle", href: "#reports" },
    { icon: <Users size={22} />, title: "Members", desc: "Manage club members and registrations.", color: "text-navy", bg: "bg-navy-light", href: "#members" },
    { icon: <Mail size={22} />, title: "Email Accounts", desc: "Manage professional email addresses.", color: "text-gold", bg: "bg-gold-light", href: "#emails" },
    { icon: <Shield size={22} />, title: "Admin", desc: "District admin tools and settings.", color: "text-gray-600", bg: "bg-gray-100", href: "#admin" },
  ];

  return (
    <div className="min-h-screen bg-mist">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-love flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-ink">District Portal</p>
              <p className="text-xs text-gray-400">Rotaract District 7020</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs text-gray-500 hidden sm:block">{user?.email}</p>
            <button onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-love transition-colors">
              <LogOut size={14} /> Sign out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-ink">Welcome back 👋</h1>
          <p className="text-gray-500 text-sm mt-1">{user?.email}</p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sections.map((s) => (
            <a key={s.title} href={s.href}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className={`w-10 h-10 rounded-xl ${s.bg} ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-base text-ink mb-1">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </a>
          ))}
        </div>

        {/* Reports section */}
        <div id="reports" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-bold text-ink">Secure Reports</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-love text-white text-xs rounded-full hover:bg-love-dark transition-colors">
              <Upload size={14} /> Upload Report
            </button>
          </div>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center">
            <FileText size={32} className="text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-400">No reports uploaded yet.</p>
            <p className="text-xs text-gray-300 mt-1">Connect Supabase Storage to enable file uploads.</p>
          </div>
        </div>

        {/* Setup note */}
        <div className="bg-navy/5 border border-navy/10 rounded-xl p-5">
          <p className="text-xs text-navy font-medium mb-1">🔧 Setup required</p>
          <p className="text-xs text-gray-500">
            Add <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
            <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to your <code className="bg-gray-100 px-1 rounded">.env.local</code> file to activate authentication and file storage.
          </p>
        </div>
      </div>
    </div>
  );
}
