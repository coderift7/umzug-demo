"use client";

import { useState, useEffect } from "react";
import { Menu, X, Truck, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Truck
              className={`h-7 w-7 ${isScrolled ? "text-accent" : "text-white"}`}
            />
            <span
              className={`font-heading text-xl font-bold ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              {siteConfig.company.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-secondary" : "text-white/90"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
              className={`flex items-center gap-1.5 text-sm font-medium ${
                isScrolled ? "text-secondary" : "text-white/90"
              }`}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.company.phone}
            </a>
            <a
              href="#kontakt"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-lg"
            >
              Kostenlos anfragen
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden ${isScrolled ? "text-primary" : "text-white"}`}
            aria-label="Menü"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-border bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-secondary transition-colors hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setIsMobileOpen(false)}
              className="mt-2 rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Kostenlos anfragen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
