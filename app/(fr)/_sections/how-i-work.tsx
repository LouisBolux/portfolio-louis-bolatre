import { SectionLabel } from "@/app/_components/section-label";

export function HowIWork() {
  return (
    <section id="how-i-work" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Comment je travaille</SectionLabel>
        <div className="grid gap-10 md:grid-cols-2 mt-2">
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">Méthodes</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Shape Up quand l&apos;équipe a besoin de focus et
              d&apos;itérations courtes. Agile dans les organisations déjà
              structurées. OKRs pour aligner vision et exécution sur le temps
              long. Je m&apos;adapte — ce qui compte c&apos;est que
              l&apos;équipe avance, pas le nom du processus.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">
              IA dans ma pratique PM
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              J&apos;utilise l&apos;IA tous les jours : synthèse
              d&apos;interviews utilisateurs, analyse de feedback, rédaction de
              specs, préparation de présentations, exploration de solutions. Ce
              n&apos;est pas une posture — c&apos;est devenu une partie
              intégrante de comment je travaille.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">
              IA comme outil de build
            </h3>
            <p className="text-zinc-800 text-sm font-medium mb-2">
              Drafter le plus loin possible avec l&apos;IA.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Je ne me contente pas de rédiger des spécifications fonctionnelles
              abstraites. J&apos;utilise la puissance de l&apos;IA pour coder et
              déployer de vraies applications de test (Mescla, Darts Score). Mon
              but n&apos;est pas de pousser mon code en production dans votre
              entreprise, mais de pousser le &laquo;&nbsp;draft&nbsp;&raquo; au
              plus proche de la réalité. Cela me permet d&apos;identifier les
              failles de spécifications, de parler le même langage que mes
              équipes techniques et de m&apos;assurer que ce qu&apos;on
              développe ensemble est vraiment pertinent.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">Outils</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Figma",
                "Notion",
                "Jira",
                "Miro",
                "Mixpanel",
                "Metabase",
                "Intercom",
                "Claude Code",
                "Lovable",
                "Bolt.new",
                "Supabase",
              ].map((tool) => (
                <span
                  key={tool}
                  className="text-xs bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
