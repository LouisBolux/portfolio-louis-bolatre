import { SectionLabel } from "@/app/_components/section-label";

const sideProjects = [
  {
    name: "Mescla",
    tagline: "Web app mobile-first de partage de recettes et de liste de courses",
    problem:
      "Créer un menu de la semaine prend du temps, faire les courses aussi. Avec des proches, c'est encore plus complexe.",
    solution:
      "Une app sociale où tu ajoutes tes recettes, pioches dans celles de tes proches, et génères ta liste de courses en 2 min.",
    stack: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    links: [
      { label: "Voir l'app", href: "https://mescla-recipes.vercel.app/recipes" },
    ],
  },
  {
    name: "Darts Score Counter",
    tagline: "Compteur de score fléchettes — PWA installable",
    problem:
      "Les apps de fléchettes existantes sont surchargées, lentes, ou payantes.",
    solution:
      "Une PWA minimaliste, offline-first, qui démarre en 2 secondes.",
    stack: ["Vite", "React", "PWA"],
    links: [
      { label: "Voir l'app", href: "https://darts-score-counter.vercel.app/" },
    ],
  },
  {
    name: "Épicétout2A",
    tagline: "Site vitrine pour une épicerie corse",
    problem:
      "Mon père avait besoin d'une présence en ligne pour son épicerie. Aucun budget agence.",
    solution:
      "Un site complet avec présentation, carte des produits et contact — construit avec Claude, déployé en autonomie.",
    stack: [],
    links: [
      { label: "Voir le site", href: "https://epicetout2a.fr/" },
      { label: "Instagram", href: "https://www.instagram.com/epicetout2a/" },
    ],
  },
];

export function SideProjects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Side Projects</SectionLabel>
        <p className="text-zinc-500 mb-12 max-w-xl">
          3 apps construites en autonomie avec l&apos;IA, de l&apos;idée à la
          production.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {sideProjects.map((p) => (
            <div
              key={p.name}
              className="border border-zinc-100 rounded-xl p-6 hover:border-zinc-200 hover:shadow-sm transition-all flex flex-col"
            >
              <h3 className="font-semibold text-zinc-900 mb-1">{p.name}</h3>
              <p className="text-xs text-indigo-600 font-medium mb-4">
                {p.tagline}
              </p>
              <div className="space-y-3 text-sm text-zinc-500 flex-1">
                <p>
                  <span className="font-medium text-zinc-700">Problème — </span>
                  {p.problem}
                </p>
                <p>
                  <span className="font-medium text-zinc-700">Solution — </span>
                  {p.solution}
                </p>
              </div>
              {p.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
              {p.links.length > 0 && (
                <div className="mt-4 flex gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
