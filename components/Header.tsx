"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:opacity-80 transition-all duration-150"
          >
            THE SHICO GROUP
          </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary navigation"
        >
            <Link
              href="#about"
              className="text-base font-medium hover:opacity-70 transition-all duration-150"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-base font-medium hover:opacity-70 transition-all duration-150"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-base font-medium hover:opacity-70 transition-all duration-150"
            >
              Contact
            </Link>
            <Button href="#contact" className="px-6 py-2.5 text-base">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          >
            <span
              className={`block h-0.5 w-full bg-black transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-black transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-black transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            className="md:hidden pb-6 pt-4 border-t border-black/10"
            aria-label="Mobile primary navigation"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium py-2 hover:opacity-70 transition-all duration-150"
              >
                About
              </Link>
              <Link
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium py-2 hover:opacity-70 transition-all duration-150"
              >
                Services
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium py-2 hover:opacity-70 transition-all duration-150"
              >
                Contact
              </Link>
              <Button
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 w-fit px-6 py-2.5 text-base"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
