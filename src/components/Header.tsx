"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="group flex items-center">
            <Image
              src="/umzug-demo/images/logo-moverpro.png"
              alt={siteConfig.company.name}
              width={450}
              height={140}
              className="h-8 w-auto object-contain lg:h-10"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 ${
                  isScrolled
                    ? "text-secondary hover:bg-muted hover:text-primary"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-white/75"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.company.phone}
            </a>
            <a
              href="#kontakt"
              className="cursor-pointer rounded-lg bg-cta px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(249,115,22,0.35)] transition-all duration-200 hover:bg-cta/90 hover:shadow-[0_4px_16px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
            >
              Kostenlos anfragen
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`cursor-pointer rounded-lg p-2 transition-colors lg:hidden ${
              isScrolled
                ? "text-primary hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Menü öffnen"
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-white shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {siteConfig.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg px-3 py-2.5 text-secondary transition-colors hover:bg-muted"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#kontakt"
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-2 cursor-pointer rounded-lg bg-cta px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Kostenlos anfragen
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
