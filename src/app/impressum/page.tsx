import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-accent hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </a>

        <h1 className="font-heading text-3xl font-bold text-primary">
          Impressum
        </h1>

        <div className="mt-8 space-y-6 text-secondary">
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-2 leading-relaxed">
              {siteConfig.company.legalName}
              <br />
              {siteConfig.company.address}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Kontakt
            </h2>
            <p className="mt-2 leading-relaxed">
              Telefon: {siteConfig.company.phone}
              <br />
              E-Mail: {siteConfig.company.email}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Vertreten durch
            </h2>
            <p className="mt-2 leading-relaxed">
              Max Mustermann, Geschäftsführer
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Registereintrag
            </h2>
            <p className="mt-2 leading-relaxed">
              Eintragung im Handelsregister.
              <br />
              Registergericht: Amtsgericht Berlin-Charlottenburg
              <br />
              Registernummer: HRB 123456 B
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Umsatzsteuer-ID
            </h2>
            <p className="mt-2 leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              DE 123456789
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Dies ist eine Demo-Webseite. Alle Angaben sind fiktiv und dienen nur
            zur Veranschaulichung.
          </p>
        </div>
      </div>
    </div>
  );
}
