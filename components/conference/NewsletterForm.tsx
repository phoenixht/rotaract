"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
        <span className="text-5xl block mb-4">✅</span>
        <h2 className="font-display text-2xl font-bold text-ink mb-3">You&apos;re on the list!</h2>
        <p className="text-gray-500 text-sm">We&apos;ll keep you updated on everything NEXUS 2026.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="font-display text-2xl font-bold text-ink mb-2 text-center">Stay in the Loop</h2>
      <p className="text-gray-500 text-sm text-center mb-8">
        Sign up to receive updates about conference registration, speakers, schedule, and more.
      </p>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-love/30 focus:border-love transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-love/30 focus:border-love transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Club Name <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            placeholder="Rotaract Club of..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-love/30 focus:border-love transition-colors"
          />
        </div>
        <button
          onClick={() => setSubmitted(true)}
          className="w-full py-3.5 bg-love text-white rounded-xl text-sm font-medium hover:bg-love-dark transition-colors"
        >
          Subscribe to Newsletter
        </button>
        <p className="text-xs text-gray-400 text-center">
          No spam. Only important conference updates.
        </p>
      </div>
    </div>
  );
}
