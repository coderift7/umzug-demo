import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Testimonials() {
  return (
    <section id="bewertungen" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Das sagen unsere Kunden
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Über 500 zufriedene Kunden vertrauen uns. Lesen Sie, was sie über
            ihre Erfahrung mit {siteConfig.company.name} sagen.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {siteConfig.testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/10" />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-secondary">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-heading text-sm font-bold text-accent">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
