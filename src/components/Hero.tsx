import { ArrowRight, ChevronDown, Star, Shield, TrendingUp } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const { hero, trustStats } = siteConfig;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/30" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
          <Shield className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-white/90">
            Vollversichert & TÜV-geprüft
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
          >
            {hero.cta1}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            {hero.cta2}
          </a>
        </div>

        {/* Trust micro-bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {trustStats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70">
              {i === 0 && <TrendingUp className="h-4 w-4 text-accent" />}
              {i === 3 && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
              <span className="text-sm font-medium">
                <span className="font-bold text-white">{stat.value}</span>{" "}
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 transition-colors hover:text-white"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}
