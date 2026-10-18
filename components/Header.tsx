"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Communities", href: "/communities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Articles / News", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="relative z-50 w-full bg-igbe-purple text-igbe-white shadow-md">
      {/* Top Row: Logo and Title on the Left, Hamburger on the Right */}
      <div className="container relative mx-auto flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3"
        >
          <Image
            src="/Orhe.PNG"
            alt="Waters of Heaven Temple symbol"
            width={120}
            height={120}
            priority
            className="h-14 w-14 shrink-0 rounded-full border-2 border-yellow-500 object-cover sm:h-20 sm:w-20 sm:border-4"
          />

          <h1 className="min-w-0 text-lg font-bold leading-tight text-yellow-500 sm:text-2xl">
            Waters of Heaven Temple
          </h1>
        </Link>

        {/* Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="shrink-0 rounded-lg p-2 text-3xl text-white transition hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation-menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

            {/* Compact Hamburger Dropdown Card */}
      {menuOpen && (
        <nav
          id="main-navigation-menu"
          aria-label="Main navigation"
          className="absolute right-4 top-full z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] rounded-xl border border-purple-200 bg-white p-3 shadow-xl sm:right-6 sm:w-72"
        >
          <div className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-purple-800 transition hover:bg-purple-100 hover:text-purple-950 sm:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Existing Lower Desktop Navigation: Preserved */}
      <div className="hidden bg-igbe-white px-4 py-3 lg:block">
        <nav
          aria-label="Desktop navigation"
          className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          <Link
            href="/"
            className="whitespace-nowrap text-base font-bold text-blue-600 transition hover:text-purple-700 xl:text-lg"
          >
            Home (Waters of Heaven Temple)
          </Link>

          <Link
            href="/communities"
            className="whitespace-nowrap text-base font-bold text-red-600 transition hover:text-purple-700 xl:text-lg"
          >
            Communities (Igbe Heritage)
          </Link>

          <Link
            href="/gallery"
            className="whitespace-nowrap text-base font-bold text-yellow-600 transition hover:text-purple-700 xl:text-lg"
          >
            Gallery
          </Link>

          <Link
            href="/events"
            className="whitespace-nowrap text-base font-bold text-pink-600 transition hover:text-purple-700 xl:text-lg"
          >
            Events & Ceremonies
          </Link>

          <Link
            href="/articles"
            className="whitespace-nowrap text-base font-bold text-purple-700 transition hover:text-purple-950 xl:text-lg"
          >
            Articles / News
          </Link>
        </nav>
      </div>
    </header>
  );
}

