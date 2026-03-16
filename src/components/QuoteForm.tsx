"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function QuoteForm() {
  const { quoteForm } = siteConfig;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              {quoteForm.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {quoteForm.subheading}
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Unverbindlich & kostenlos",
                "Antwort innerhalb von 24 Stunden",
                "Persönliche Beratung inklusive",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">
                  Anfrage gesendet!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {quoteForm.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-secondary"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Max Mustermann"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-secondary"
                    >
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="max@beispiel.de"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                {/* Phone & Move Type */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-secondary"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+49 123 456 789"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="moveType"
                      className="mb-1.5 block text-sm font-medium text-secondary"
                    >
                      Umzugsart *
                    </label>
                    <select
                      id="moveType"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Bitte wählen</option>
                      {quoteForm.moveTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* From & To */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="from"
                      className="mb-1.5 block text-sm font-medium text-secondary"
                    >
                      Von (Adresse) *
                    </label>
                    <input
                      type="text"
                      id="from"
                      required
                      placeholder="Straße, PLZ, Ort"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="to"
                      className="mb-1.5 block text-sm font-medium text-secondary"
                    >
                      Nach (Adresse) *
                    </label>
                    <input
                      type="text"
                      id="to"
                      required
                      placeholder="Straße, PLZ, Ort"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label
                    htmlFor="date"
                    className="mb-1.5 block text-sm font-medium text-secondary"
                  >
                    Wunschtermin
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-secondary"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Weitere Details zu Ihrem Umzug..."
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                {/* Privacy */}
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 rounded border-border"
                  />
                  <span className="text-xs text-muted-foreground">
                    Ich stimme der{" "}
                    <a
                      href="/datenschutz"
                      className="text-accent underline hover:text-accent/80"
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    zu. *
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  {quoteForm.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
