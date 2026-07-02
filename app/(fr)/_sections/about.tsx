import { SectionLabel } from "@/app/_components/section-label";

export function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>À propos</SectionLabel>
        <div className="max-w-2xl space-y-5 text-zinc-600 leading-relaxed text-[17px]">
          <p>
            J&apos;ai commencé en 2019 chez Calldesk, à concevoir des bots
            d&apos;IA conversationnelle. Après plusieurs années passées à
            lancer des produits de zéro en startup (notamment comme premier
            PM chez{" "}
            <span className="text-zinc-900 font-medium">Pyxo</span>{" "}
            post-Série A), j&apos;ai pris une pause professionnelle —
            l&apos;occasion de passer un CQP Technicien process brassicole à
            La Beer Fabrique — avant de rejoindre le cabinet{" "}
            <span className="text-zinc-900 font-medium">Thiga</span>. Ces
            missions de conseil m&apos;ont servi à structurer et théoriser ma
            pratique du Product Management, au contact d&apos;environnements
            exigeants (Ledger, Electra, Kolecto).
          </p>
          <p>
            Aujourd&apos;hui, je combine ces bases théoriques (Discovery
            structurée, frameworks de priorisation, Shape Up, OKRs) avec un
            style pragmatique, orienté &laquo;&nbsp;faire&nbsp;&raquo;.
            J&apos;utilise ce mix pour concevoir et lancer de nouveaux produits
            (Build).
          </p>
          <p className="text-zinc-900 font-medium">
            Je cherche un poste de 1st PM, Senior PM ou Lead PM, dans une
            startup, scaleup ou une TPE/PME qui structure sa pratique
            produit.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10 text-sm">
          {[
            { flag: "🇫🇷", lang: "Français", level: "Natif" },
            { flag: "🇬🇧", lang: "Anglais", level: "Courant" },
            { flag: "🇪🇸", lang: "Espagnol", level: "Courant" },
            { flag: "🇩🇪", lang: "Allemand", level: "Notions" },
          ].map((l) => (
            <span key={l.lang} className="text-zinc-500">
              <span aria-hidden="true">{l.flag}</span>{" "}
              <span className="text-zinc-800 font-medium">{l.lang}</span> — {l.level}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
