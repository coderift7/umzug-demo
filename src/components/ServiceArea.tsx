import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ServiceArea() {
  const { serviceArea } = siteConfig;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              {serviceArea.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {serviceArea.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {serviceArea.regions.map((region, i) => (
                <div key={i} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-secondary">{region}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/5 to-primary/5">
            <div className="flex aspect-square items-center justify-center sm:aspect-[4/3]">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Navigation className="h-8 w-8 text-accent" />
                </div>
                <p className="font-heading text-lg font-semibold text-primary">
                  Berlin & Umgebung
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Bis zu 100 km Umkreis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
