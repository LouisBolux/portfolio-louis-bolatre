import { SectionLabel } from "@/app/_components/section-label";

export function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>About</SectionLabel>
        <div className="max-w-2xl space-y-5 text-zinc-600 leading-relaxed text-[17px]">
          <p>
            I started out in 2019 at Calldesk, building conversational AI
            bots. After several years launching products from scratch in
            startups (notably as first PM at{" "}
            <span className="text-zinc-900 font-medium">Pyxo</span>{" "}
            post-Series A), I took a career break — including a brewing
            process technician certification (CQP, La Beer Fabrique) —
            before joining the consulting firm{" "}
            <span className="text-zinc-900 font-medium">Thiga</span>. Those
            consulting missions helped me structure and theorize my Product
            Management practice, in contact with demanding environments
            (Ledger, Electra, Kolecto).
          </p>
          <p>
            Today, I combine those theoretical foundations (structured
            Discovery, prioritization frameworks, Shape Up, OKRs) with a
            pragmatic, action-oriented style. I use that mix to design and
            ship new products (Build).
          </p>
          <p className="text-zinc-900 font-medium">
            I&apos;m looking for a 1st PM, Senior PM or Lead PM role, at a
            startup, scaleup, or SME building out its product practice.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10 text-sm">
          {[
            { flag: "🇫🇷", lang: "French", level: "Native" },
            { flag: "🇬🇧", lang: "English", level: "Fluent" },
            { flag: "🇪🇸", lang: "Spanish", level: "Fluent" },
            { flag: "🇩🇪", lang: "German", level: "Basic" },
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
