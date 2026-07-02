import Link from "next/link";
import { SectionLabel } from "@/app/_components/section-label";

const trackRecordItems = [
  {
    company: "Kolecto",
    period: "2025 – présent",
    domain: "FinTech · SaaS B2B",
    via: "Mission via Thiga",
    tagline: "Module Devis & Facturation · Discovery agriculture & bâtiment",
    highlight:
      "1ère feature de vente de la plateforme. Anticipation e-facturation 2026.",
    slug: "kolecto",
  },
  {
    company: "Thiga Academy",
    period: "janv. 2025 – présent",
    domain: "Formation PM",
    via: "Pôle formation de Thiga",
    tagline: "Formateur Product Management & Product Discovery",
    highlight:
      "Sessions pour des groupes de PMs en entreprise. Sujets Senior PM & Discovery.",
    slug: "thiga-academy",
  },
  {
    company: "Electra",
    period: "janv. – mai 2025",
    domain: "GreenTech",
    via: "Mission via Thiga",
    tagline: "4 000 → 11 000 bornes via Spark Alliance",
    highlight:
      "UX recharge repensée. App Android Auto. Discovery planificateur EV.",
    slug: "electra",
  },
  {
    company: "Ledger",
    period: "2024",
    domain: "Crypto",
    via: "Mission via Thiga",
    tagline: "Feature SWAP → 70% du CA de Ledger Live",
    highlight:
      "Delivery dans les délais. Intégrations DEX opérationnelles.",
    slug: "ledger-swap",
  },
  {
    company: "Thiga",
    period: "2024 – présent",
    domain: "Conseil PM",
    via: undefined as string | undefined,
    tagline: "Senior PM Consultant · Missions scale-ups",
    highlight:
      "Cabinet de conseil qui m'a staffé chez Kolecto, Electra et Ledger. Ownership total dès J1.",
    slug: "thiga",
  },
  {
    company: "Pyxo",
    period: "2021 – 2023",
    domain: "FoodTech",
    via: undefined as string | undefined,
    tagline: "1er PM · 2 apps de zéro · 5 devs · post-Série A",
    highlight:
      "Grands comptes signés : McDonald's, CROUS, Sushi Shop, Metro.",
    slug: "pyxo",
  },
  {
    company: "Calldesk",
    period: "2019 – 2021",
    domain: "IA Conversationnelle",
    via: undefined as string | undefined,
    tagline: "Time-to-production : 6 mois → 2 semaines",
    highlight: "1 CSM suffit là où il fallait 2 devs + 1 CSM.",
    slug: "calldesk",
  },
];

export function TrackRecord() {
  return (
    <section id="track-record" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>PM Track Record</SectionLabel>
        <p className="text-zinc-500 mb-12 max-w-xl">
          7 ans de delivery en startup et scale-up.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {trackRecordItems.map((item) => (
            <Link
              key={item.slug}
              href={`/case/${item.slug}`}
              className="group border border-zinc-100 bg-white rounded-xl p-6 hover:border-indigo-200 hover:shadow-sm transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-bold text-zinc-900 text-lg">
                  {item.company}
                </h3>
                <span className="text-xs text-zinc-500 mt-1">{item.period}</span>
              </div>
              <span className="text-xs font-medium text-indigo-600 mb-1">
                {item.domain}
              </span>
              <span className="text-xs text-zinc-500 mb-4 block h-4">
                {item.via}
              </span>
              <p className="text-sm font-semibold text-zinc-800 mb-2 flex-1">
                {item.tagline}
              </p>
              <p className="text-sm text-zinc-500 mb-5">{item.highlight}</p>
              <span className="text-xs font-medium text-indigo-600 group-hover:text-indigo-800 transition-colors">
                Lire l&apos;étude de cas →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
