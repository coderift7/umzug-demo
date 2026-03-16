import { Check, ArrowRight, Users, Award, ThumbsUp } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="ueber-uns" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              {about.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {about.description}
            </p>

            <ul className="mt-8 space-y-4">
              {about.usps.map((usp, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-secondary">{usp}</span>
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-lg"
            >
              {about.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Visual / Stats Card */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 p-8 lg:p-10">
              {/* Decorative cards */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-primary">
                      12
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Erfahrene Mitarbeiter
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-primary">
                      15+ Jahre
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Am Markt seit 2009
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                    <ThumbsUp className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-primary">
                      98%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Weiterempfehlungsrate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
