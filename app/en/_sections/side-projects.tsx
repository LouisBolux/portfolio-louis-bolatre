import { SectionLabel } from "@/app/_components/section-label";

const sideProjects = [
  {
    name: "Mescla",
    tagline: "Mobile-first web app for recipe sharing and grocery lists",
    problem:
      "Planning a week's menu takes time, so does grocery shopping. With friends and family, it gets even more complex.",
    solution:
      "A social app where you add your recipes, pick from your circle's, and generate your grocery list in 2 minutes.",
    stack: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    links: [
      { label: "View the app", href: "https://mescla-recipes.vercel.app/recipes" },
    ],
  },
  {
    name: "Darts Score Counter",
    tagline: "Darts score counter — installable PWA",
    problem:
      "Existing darts apps are bloated, slow, or paywalled.",
    solution:
      "A minimalist, offline-first PWA that starts in 2 seconds.",
    stack: ["Vite", "React", "PWA"],
    links: [
      { label: "View the app", href: "https://darts-score-counter.vercel.app/" },
    ],
  },
  {
    name: "Épicétout2A",
    tagline: "Showcase site for a Corsican grocery store",
    problem:
      "My father needed an online presence for his grocery store. No agency budget.",
    solution:
      "A complete site with presentation, product listing and contact — built with Claude, deployed autonomously.",
    stack: [],
    links: [
      { label: "View the site", href: "https://epicetout2a.fr/" },
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
          3 apps built autonomously with AI, from idea to production.
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
                  <span className="font-medium text-zinc-700">Problem — </span>
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
