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

  return (
    <header className="w-full bg-igbe-purple text-igbe-white shadow-md">
      {/* Top Row */}
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
        {/* Logo and Site Name */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 items-center gap-3"
        >
          <Image
            src="/Orhe.PNG"
            alt="Orhe Symbol"
            width={120}
            height={120}
            className="h-14 w-14 shrink-0 rounded-full border-2 border-yellow-500 object-cover sm:h-20 sm:w-20 sm:border-4"
            priority
          />

          <h1 className="min-w-0 text-lg font-bold leading-tight text-yellow-500 sm:text-2xl">
            Waters of Heaven Temple
          </h1>
        </Link>

        {/* Hamburger Menu */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-3xl text-white transition hover:text-igbe-gold focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Hamburger Dropdown */}
          {menuOpen && (
            <nav
              id="main-navigation"
              className="absolute right-0 top-full z-50 mt-2 w-60 max-w-[calc(100vw-2rem)] rounded-xl bg-white p-4 shadow-xl"
            >
              <div className="flex flex-col gap-1">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-3 font-semibold text-igbe-purple transition hover:bg-purple-50 hover:text-igbe-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Desktop Navigation — Original Design */}
      <div className="hidden bg-igbe-white px-4 py-3 lg:block">
        <nav className="container mx-auto flex items-center justify-center gap-9">
          <Link
            href="/"
            className="whitespace-nowrap text-xl font-bold text-blue-600 hover:text-igbe-gold"
          >
            Home (Waters of Heaven Temple)
          </Link>

          <Link
            href="/communities"
            className="whitespace-nowrap text-xl font-bold text-red-600 hover:text-igbe-gold"
          >
            Communities (Igbe Heritage)
          </Link>

          <Link
            href="/gallery"
            className="whitespace-nowrap text-xl font-bold text-yellow-500 hover:text-igbe-gold"
          >
            Gallery
          </Link>

          <Link
            href="/events"
            className="whitespace-nowrap text-xl font-bold text-pink-600 hover:text-igbe-gold"
          >
            Events & Ceremonies
          </Link>

          <Link
            href="/articles"
            className="whitespace-nowrap text-xl font-bold text-purple-700 hover:text-igbe-gold"
          >
            Articles / News
          </Link>
        </nav>
      </div>

      {/* Tablet Navigation — Wraps When Necessary */}
      <div className="hidden bg-igbe-white px-4 py-3 md:block lg:hidden">
        <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-bold text-igbe-purple transition hover:text-igbe-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

