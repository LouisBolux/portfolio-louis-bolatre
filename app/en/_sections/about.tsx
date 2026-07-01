import { SectionLabel } from "@/app/_components/section-label";

export function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>About</SectionLabel>
        <div className="max-w-2xl space-y-5 text-zinc-600 leading-relaxed text-[17px]">
          <p>
            After several years launching products from scratch in startups
            (notably as first PM at{" "}
            <span className="text-zinc-900 font-medium">Pyxo</span> post-Series
            A), I joined the consulting firm{" "}
            <span className="text-zinc-900 font-medium">Thiga</span>. This
            consulting chapter was the key stage to consolidate, structure and
            theorize my Product Management practice in contact with highly
            demanding environments (Ledger, Electra, Kolecto).
          </p>
          <p>
            Today, I combine these elite theoretical foundations (structured
            Discovery, prioritization frameworks, Shape Up, OKRs) with a
            resolutely pragmatic, action-oriented style. I put this dual
            strength to work for agile organizations to design and drive new
            products (Build).
          </p>
          <p className="text-zinc-900 font-medium">
            I&apos;m looking for a Senior PM, Lead PM, or 1st PM role in a startup
            with ambition and a genuine product culture.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10 text-sm">
          {[
            { lang: "French", level: "Native" },
            { lang: "English", level: "Fluent" },
            { lang: "Spanish", level: "Fluent" },
            { lang: "German", level: "Basic" },
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
