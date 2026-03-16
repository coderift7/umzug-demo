import { Clock, Truck, ShieldCheck, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

const icons = [Clock, Truck, ShieldCheck, Star];

export default function TrustSignals() {
  return (
    <section id="trust" className="border-b border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {siteConfig.trustStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="font-heading text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
