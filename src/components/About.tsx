"use client";

import { Check, ArrowRight, Users, Award, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

const stats = [
  {
    icon: Users,
    value: "12",
    label: "Erfahrene Mitarbeiter",
    color: "bg-accent/8 text-accent",
  },
  {
    icon: Award,
    value: "15+ Jahre",
    label: "Am Markt seit 2009",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Weiterempfehlungsrate",
    color: "bg-amber-500/10 text-amber-600",
  },
];

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="ueber-uns" className="noise-overlay relative bg-white py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <Reveal variants={slideFromLeft}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Über uns
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                {about.heading}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {about.description}
              </p>

              <ul className="mt-8 space-y-4">
                {about.usps.map((usp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span className="font-medium text-secondary">{usp}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-cta px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(249,115,22,0.3)] transition-all duration-200 hover:bg-cta/90 hover:-translate-y-0.5"
              >
                {about.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          {/* Stats Cards */}
          <Reveal variants={slideFromRight} delay={0.15}>
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-cta/5 blur-2xl" />

              <div className="relative space-y-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.12,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${stat.color}`}
                    >
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold tracking-tight text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
