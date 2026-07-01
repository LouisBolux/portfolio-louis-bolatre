export function Contact() {
  return (
    <footer id="contact" className="bg-zinc-900 text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">Parlons-en.</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Option CDI — prioritaire */}
          <div className="border border-zinc-700 rounded-xl p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">
                Poste CDI · Prioritaire
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Tu cherches ton futur Senior PM, Lead PM ou premier PM à temps
                plein (sur Lille, Paris ou en télétravail) pour structurer et
                lancer un nouveau produit&nbsp;? Discutons de vos défis produit
                du moment autour d&apos;un café virtuel.
              </p>
            </div>
            <a
              href="https://calendar.app.google/ZkfWTL3oL6zpArWeA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors self-start"
            >
              Réserver un créneau →
            </a>
          </div>

          {/* Option Freelance */}
          <div className="border border-zinc-700 rounded-xl p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold text-zinc-400 tracking-widest uppercase mb-3">
                Mission Freelance · Conseil
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Tu as besoin d&apos;un coup de boost méthodologique ponctuel,
                d&apos;un sprint de Discovery express ou d&apos;un prototype
                fonctionnel (MVP) drafté à la vitesse de l&apos;éclair grâce à
                l&apos;IA&nbsp;? Sollicite une mission de conseil ou de
                transition.
              </p>
            </div>
            <a
              href="mailto:louis.bolatre@gmail.com"
              className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 px-5 py-3 rounded-lg text-sm font-medium hover:border-zinc-400 hover:text-white transition-colors self-start"
            >
              Écrire un e-mail →
            </a>
          </div>
        </div>

        <div className="flex gap-4 border-t border-zinc-800 pt-8">
          <a
            href="https://www.linkedin.com/in/louis-bolatre-product-manager-pm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/louisbolatre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
