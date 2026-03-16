"use client";

import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

export default function ServiceArea() {
  const { serviceArea } = siteConfig;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <Reveal variants={slideFromLeft}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Einsatzgebiet
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                {serviceArea.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {serviceArea.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {serviceArea.regions.map((region, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.04,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-2"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-cta" />
                    <span className="text-sm font-medium text-secondary">
                      {region}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Map Placeholder */}
          <Reveal variants={slideFromRight} delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/[0.04] via-transparent to-cta/[0.03]">
              <div className="flex aspect-square items-center justify-center sm:aspect-[4/3]">
                {/* Decorative rings */}
                <div className="absolute h-48 w-48 rounded-full border border-accent/10" />
                <div className="absolute h-72 w-72 rounded-full border border-accent/5" />
                <div className="absolute h-96 w-96 rounded-full border border-accent/[0.03]" />

                <div className="relative text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                    <Navigation className="h-7 w-7 text-accent" />
                  </div>
                  <p className="font-heading text-xl font-bold text-primary">
                    Berlin & Umgebung
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Bis zu 100 km Umkreis
                  </p>
                  <div className="mt-3 inline-flex items-center rounded-full bg-cta/10 px-3 py-1 text-xs font-medium text-cta">
                    + Deutschlandweite Fernumzüge
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
