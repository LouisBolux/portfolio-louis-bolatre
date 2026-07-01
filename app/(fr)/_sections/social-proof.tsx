const companies = [
  "Ledger",
  "Electra",
  "Kolecto",
  "McDonald's",
  "CROUS",
  "Sushi Shop",
  "Metro",
];

export function SocialProof() {
  return (
    <section className="border-y border-zinc-100 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-6 text-center">
          Ils m&apos;ont fait confiance
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {companies.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-zinc-500 border border-zinc-200 rounded-full px-4 py-1.5"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
