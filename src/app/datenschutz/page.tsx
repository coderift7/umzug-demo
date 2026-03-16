import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-6 text-secondary">
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              1. Verantwortlicher
            </h2>
            <p className="mt-2 leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:
              <br />
              {siteConfig.company.legalName}
              <br />
              {siteConfig.company.address}
              <br />
              E-Mail: {siteConfig.company.email}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="mt-2 leading-relaxed">
              Beim Besuch unserer Webseite werden automatisch Informationen
              durch den Browser an unseren Server übermittelt. Diese
              Informationen werden temporär in einem sogenannten Logfile
              gespeichert.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              3. Kontaktformular
            </h2>
            <p className="mt-2 leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              4. Ihre Rechte
            </h2>
            <p className="mt-2 leading-relaxed">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Sie
              haben zudem das Recht, sich bei einer Aufsichtsbehörde zu
              beschweren.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Dies ist eine Demo-Webseite. Diese Datenschutzerklärung dient nur
            zur Veranschaulichung und stellt keine rechtsgültige
            Datenschutzerklärung dar.
          </p>
        </div>
      </div>
    </div>
  );
}
