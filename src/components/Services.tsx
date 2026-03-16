import {
  Home,
  Building2,
  Trash2,
  Wrench,
  Package,
  Warehouse,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Trash2,
  Wrench,
  Package,
  Warehouse,
};

export default function Services() {
  return (
    <section id="leistungen" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Von der ersten Kiste bis zum letzten Möbelstück – wir kümmern uns um
            alles.
          </p>
        </div>

        {/* Service Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Package;
            return (
              <div
                key={i}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
