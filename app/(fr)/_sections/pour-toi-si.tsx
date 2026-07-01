export function PourToiSi() {
  const items = [
    "Tu cherches un Senior PM, Lead PM ou 1st PM pour concevoir et lancer (0 to 1) un produit ou de nouveaux chantiers post-levée.",
    "Tu veux un profil autonome, capable de naviguer dans le flou sans avoir besoin d'être managé.",
    "Tu apprécies un PM qui comprend les contraintes des développeurs et sait « drafter » des prototypes pour dérisquer le delivery.",
  ];

  return (
    <section className="border-y border-zinc-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-6">
          Pour toi si...
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-zinc-600">
                <span className="text-indigo-600 font-bold shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="text-sm md:border-l border-zinc-100 md:pl-8">
            <p className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-3">
              Pas pour toi si
            </p>
            <p className="text-zinc-500 mb-4">
              Tu cherches un PM pour simplement faire de la maintenance de backlog (Run)
              ou gérer des processus rigides dans une grande organisation structurée.
            </p>
            <p className="text-zinc-500">
              Ouvert aussi aux missions freelance ponctuelles —{" "}
              <a
                href="#contact"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                écris-moi
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
