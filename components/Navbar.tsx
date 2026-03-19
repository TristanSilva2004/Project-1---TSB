"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span className="text-black font-heading font-bold text-lg">M</span>
            </div>
            <div>
              <span className="text-white font-heading text-xl font-semibold tracking-wide">
                Marina Towers
              </span>
              <span className="block text-gold-400 text-xs tracking-[0.3em] uppercase">
                Rentals
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/80 hover:text-gold-400 transition-colors text-sm tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/listings"
              className="text-white/80 hover:text-gold-400 transition-colors text-sm tracking-wide uppercase"
            >
              Listings
            </Link>
            <Link
              href="/submit"
              className="text-white/80 hover:text-gold-400 transition-colors text-sm tracking-wide uppercase"
            >
              List Your Property
            </Link>
            <Link
              href="/listings"
              className="bg-gold-500 hover:bg-gold-600 text-black px-6 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors"
            >
              Find Your Stay
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-gold-400 transition-colors text-sm tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/listings"
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-gold-400 transition-colors text-sm tracking-wide uppercase"
            >
              Listings
            </Link>
            <Link
              href="/submit"
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-gold-400 transition-colors text-sm tracking-wide uppercase"
            >
              List Your Property
            </Link>
            <Link
              href="/listings"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-6 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors"
            >
              Find Your Stay
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
