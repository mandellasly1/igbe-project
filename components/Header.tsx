"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-igbe-purple text-igbe-white shadow-md">
      {/* Top Row */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Image
            src="/Orhe.PNG"
            alt="Orhe Symbol"
            width={120}
            height={120}
            className="rounded-full border-4 border-yellow-500 object-cover"
            loading="eager"
          />

          {/* Site Name */}
          <h1 className="text-2xl font-bold text-yellow-500">
            Waters of Heaven Temple
          </h1>
        </div>

        {/* Hamburger Menu */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white hover:text-igbe-gold"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <nav className="absolute right-0 top-12 z-50 w-52 rounded-xl bg-white p-5 shadow-lg">
              <div className="flex flex-col gap-4">
                <a
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-igbe-purple hover:text-igbe-gold"
                >
                  Home
                </a>

                <a
                  href="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-igbe-purple hover:text-igbe-gold"
                >
                  Shop
                </a>

                <a
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-igbe-purple hover:text-igbe-gold"
                >
                  About
                </a>

                <a
                  href="/events"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-igbe-purple hover:text-igbe-gold"
                >
                  Events
                </a>

                <a
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-igbe-purple hover:text-igbe-gold"
                >
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Secondary Row */}
      <div className="bg-igbe-white py-3">
        <div className="container mx-auto flex justify-center space-x-9">
          <a
            href="/"
            className="text-xl font-bold text-blue-600 hover:text-igbe-gold"
          >
            Home (Waters of Heaven Temple)
          </a>

          <a
            href="/communities"
            className="text-xl font-bold text-red-600 hover:text-igbe-gold"
          >
            Communities (Igbe Heritage)
          </a>

          <a
            href="/gallery"
            className="text-xl font-bold text-yellow-500 hover:text-igbe-gold"
          >
            Gallery
          </a>

          <a
            href="/events"
            className="text-xl font-bold text-pink-600 hover:text-igbe-gold"
          >
            Events & Ceremonies
          </a>

          <a
            href="/articles"
            className="text-xl font-bold text-purple-700 hover:text-igbe-gold"
          >
            Articles / News
          </a>
        </div>
      </div>
    </header>
  );
}

