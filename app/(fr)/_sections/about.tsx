import { SectionLabel } from "@/app/_components/section-label";

export function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>À propos</SectionLabel>
        <div className="max-w-2xl space-y-5 text-zinc-600 leading-relaxed text-[17px]">
          <p>
            Après plusieurs années passées à lancer des produits de zéro en
            startup (notamment comme premier PM chez{" "}
            <span className="text-zinc-900 font-medium">Pyxo</span> post-Série
            A), j&apos;ai rejoint le cabinet{" "}
            <span className="text-zinc-900 font-medium">Thiga</span>. Cette
            étape de conseil a été le moment clé pour consolider, structurer et
            théoriser ma pratique du Product Management au contact
            d&apos;environnements hautement exigeants (Ledger, Electra,
            Kolecto).
          </p>
          <p>
            Aujourd&apos;hui, je combine ces bases théoriques d&apos;élite
            (Discovery structurée, frameworks de priorisation, Shape Up, OKRs)
            avec un style résolument pragmatique et orienté &laquo;&nbsp;faire&nbsp;&raquo;.
            Je mets cette double force au service de structures agiles pour
            concevoir et propulser de nouveaux produits (Build).
          </p>
          <p className="text-zinc-900 font-medium">
            Je cherche un poste de Senior PM, Lead PM, ou 1st PM dans une
            startup avec de l&apos;ambition et une vraie culture produit.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10 text-sm">
          {[
            { lang: "Français", level: "Natif" },
            { lang: "Anglais", level: "Courant" },
            { lang: "Espagnol", level: "Courant" },
            { lang: "Allemand", level: "Notions" },
          ].map((l) => (
            <span key={l.lang} className="text-zinc-500">
              <span className="text-zinc-800 font-medium">{l.lang}</span> — {l.level}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
