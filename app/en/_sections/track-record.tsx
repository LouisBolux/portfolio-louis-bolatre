import Link from "next/link";
import { SectionLabel } from "@/app/_components/section-label";

const trackRecordItems = [
  {
    company: "Kolecto",
    period: "2025 – present",
    domain: "FinTech · SaaS B2B",
    via: "Mission via Thiga",
    tagline: "Quotes & Billing module · Agriculture & construction discovery",
    highlight:
      "1st sales-generating feature of the platform. 2026 e-invoicing anticipated.",
    slug: "kolecto",
  },
  {
    company: "Thiga",
    period: "2024 – present",
    domain: "PM Consulting",
    via: undefined as string | undefined,
    tagline: "Senior PM Consultant · Scale-up missions",
    highlight:
      "The consulting firm that staffed me at Kolecto, Electra and Ledger. Full ownership from day 1.",
    slug: "thiga",
  },
  {
    company: "Thiga Academy",
    period: "Jan. 2025 – present",
    domain: "PM Training",
    via: "Thiga's training arm",
    tagline: "Product Management & Product Discovery Trainer",
    highlight:
      "Sessions for groups of in-house PMs. Senior PM & Discovery topics.",
    slug: "thiga-academy",
  },
  {
    company: "Electra",
    period: "Jan. – May 2025",
    domain: "GreenTech",
    via: "Mission via Thiga",
    tagline: "4,000 → 11,000 chargers via Spark Alliance",
    highlight:
      "Charging UX redesigned. Android Auto app. EV planner discovery.",
    slug: "electra",
  },
  {
    company: "Ledger",
    period: "2024",
    domain: "Crypto",
    via: "Mission via Thiga",
    tagline: "SWAP feature → 70% of Ledger Live's revenue",
    highlight:
      "Delivered on time. DEX integrations operational.",
    slug: "ledger-swap",
  },
  {
    company: "Pyxo",
    period: "2021 – 2023",
    domain: "FoodTech",
    via: undefined as string | undefined,
    tagline: "1st PM · 2 apps from scratch · 5 devs · post-Series A",
    highlight:
      "Major accounts signed: McDonald's, CROUS, Sushi Shop, Metro.",
    slug: "pyxo",
  },
  {
    company: "Calldesk",
    period: "2019 – 2021",
    domain: "Conversational AI",
    via: undefined as string | undefined,
    tagline: "Time-to-production: 6 months → 2 weeks",
    highlight: "1 CSM is enough where it used to take 2 devs + 1 CSM.",
    slug: "calldesk",
  },
];

export function TrackRecord() {
  return (
    <section id="track-record" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>PM Track Record</SectionLabel>
        <p className="text-zinc-500 mb-12 max-w-xl">
          7 years of delivery in startups and scale-ups.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {trackRecordItems.map((item) => (
            <Link
              key={item.slug}
              href={`/en/case/${item.slug}`}
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
                Read the case study →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
