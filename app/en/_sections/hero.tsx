export function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-24">
      <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-6">
        Senior Product Manager · Available
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-none tracking-tight mb-8">
        Louis Bolatre
      </h1>
      <p className="text-xl md:text-2xl font-semibold text-zinc-800 max-w-2xl mb-4 leading-snug">
        Senior PM — 7 years XP — Build &amp; Scale.
      </p>
      <p className="text-lg text-zinc-500 max-w-xl mb-12 leading-relaxed">
        Solid theoretical foundations, pragmatic style. I mix rigorous
        discovery with fast AI-assisted engineering to design and ship
        complex products.
      </p>
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="#track-record"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors"
        >
          See the track record →
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
        >
          Get in touch →
        </a>
        <a
          href="/cv-louis-bolatre-en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
        >
          Download CV ↓
        </a>
      </div>
      <p className="text-xs text-zinc-500 italic">
        I coded this portfolio myself with{" "}
        <span className="text-zinc-600 font-medium not-italic">Claude Code</span>.
      </p>
    </section>
  );
}
