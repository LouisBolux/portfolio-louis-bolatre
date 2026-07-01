export function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-24">
      <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-6">
        Senior Product Manager · Disponible
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-none tracking-tight mb-8">
        Louis Bolatre
      </h1>
      <p className="text-xl md:text-2xl font-semibold text-zinc-800 max-w-2xl mb-4 leading-snug">
        Senior PM. Concepteur &amp; Bâtisseur de produits (0 to 1).
      </p>
      <p className="text-lg text-zinc-500 max-w-xl mb-12 leading-relaxed">
        Allier des bases théoriques solides à un style résolument pragmatique.
        Je combine la rigueur de la Discovery et la vélocité de l&apos;ingénierie
        rapide avec l&apos;IA pour concevoir, structurer et lancer des produits complexes.
      </p>
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="#track-record"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors"
        >
          Voir le track record →
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
        >
          Me contacter →
        </a>
        <a
          href="/cv-louis-bolatre.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
        >
          Télécharger le CV ↓
        </a>
      </div>
      <p className="text-xs text-zinc-500 italic">
        Ce portfolio a été codé en autonomie avec{" "}
        <span className="text-zinc-600 font-medium not-italic">Claude Code</span>{" "}
        — preuve opérationnelle de ma capacité à matérialiser mes idées et à comprendre la technique de l&apos;intérieur.
      </p>
    </section>
  );
}
