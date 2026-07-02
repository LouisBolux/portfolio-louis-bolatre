export function PourToiSi() {
  const items = [
    "You're looking for a 1st PM, Senior PM or Lead PM to build (0 to 1) or scale a product — at a startup, scaleup, or SME building out its product practice.",
    "You want an autonomous profile, able to navigate ambiguity without needing close management.",
    "You value a PM who understands developer constraints and can draft prototypes to de-risk delivery.",
  ];

  return (
    <section className="border-y border-zinc-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-6">
          Good fit if...
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-zinc-600">
                <span className="text-indigo-600 font-bold shrink-0">✓</span>
                {item}
              </li>
            ))}
            <li className="flex gap-3 text-sm text-zinc-600">
              <span className="text-indigo-600 font-bold shrink-0">✓</span>
              <span>
                Also open to occasional freelance missions —{" "}
                <a
                  href="#contact"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  reach out
                </a>
                .
              </span>
            </li>
          </ul>
          <div className="text-sm md:border-l border-zinc-100 md:pl-8">
            <p className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-3">
              Not a fit if
            </p>
            <p className="text-zinc-500">
              You&apos;re looking for a PM to simply maintain a backlog (Run) or
              manage rigid processes in a large, heavily structured organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
