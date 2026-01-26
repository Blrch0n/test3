"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: "Бидний тухай" },
    { href: "#trainings", label: "Сургалтууд" },
    { href: "#community", label: "Нийгэмлэг" },
    { href: "#faq", label: "Асуулт" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:surface focus:rounded-lg focus:shadow-custom focus-ring"
      >
        Skip to content
      </a>

      <nav className="fixed top-0 w-full z-50 glass border-b border-custom backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 accent-bg rounded-xl flex items-center justify-center font-bold text-white">
              S&C
            </div>
            <span className="font-bold text-xl hidden sm:block">
              Sys&CoTech
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-(--accent) transition-colors focus-ring rounded"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="primary">Элсэх</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:surface transition-colors focus-ring"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-[280px] surface border-l border-custom z-50 md:hidden overflow-y-auto">
            <div className="p-6 space-y-8">
              {/* Close button */}
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:surface transition-colors focus-ring"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 rounded-lg hover:surface transition-colors text-lg focus-ring"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* CTA + Theme Toggle */}
              <div className="space-y-3 pt-6 border-t border-custom">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={handleLinkClick}
                >
                  Элсэх
                </Button>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
