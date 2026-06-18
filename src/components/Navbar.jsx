"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    {
      name: "Listings",
      href: "https://www.dealacres.com/properties/commercial-properties-for-sale-in-faridabad",
      external: true,
    },
    {
      name: "Projects",
      href: "https://www.dealacres.com/projects/omaxe-ltd-in-faridabad",
      external: true,
    },
    {
      name: "Sell With Us",
      href: "https://www.dealacres.com/faridabad/property-dealer",
      external: true,
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
<header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0d2f72]/95 via-[#16408c]/95 to-[#0d2f72]/95 backdrop-blur-md border-b border-white/10">      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <div className="cursor-pointer">
            <h2 className="text-white text-2xl sm:text-2xl lg:text-3xl font-serif leading-none font-semibold">
              WORLD STREET
            </h2>

            <p className="text-blue-100 tracking-[6px] sm:tracking-[10px] text-[10px] sm:text-xs mt-2">
              FARIDABAD
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-8 text-white text-[15px] font-medium">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-all duration-300"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-200 transition-all duration-300"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-white"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 w-full bg-[#0d2f72]/98 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-white py-4 border-b border-white/10 hover:text-blue-200 transition"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white py-4 border-b border-white/10 hover:text-blue-200 transition"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}