import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Login — District Portal" };

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-mist flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-love flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-display font-bold text-xl">R</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-ink">District Portal</h1>
          <p className="text-gray-500 text-sm mt-1">Rotaract District 7020</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
