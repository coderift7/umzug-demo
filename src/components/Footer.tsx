import { Truck, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Truck className="h-6 w-6 text-accent" />
              <span className="font-heading text-lg font-bold">
                {siteConfig.company.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {siteConfig.company.tagline} Ihr zuverlässiger Partner für
              professionelle Umzüge in Berlin und Umgebung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/50">
              Schnellzugriff
            </h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/impressum"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/50">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-white/70">
                  {siteConfig.company.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {siteConfig.company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {siteConfig.company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/50">
              Öffnungszeiten
            </h3>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div className="text-sm leading-relaxed text-white/70 whitespace-pre-line">
                {siteConfig.company.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} {siteConfig.company.legalName}. Alle
          Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
