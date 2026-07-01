import Link from "next/link";
import { cases } from "@/content/cases";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <PourToiSi />
        <About />
        <SideProjects />
        <TrackRecord />
        <HowIWork />
      </main>
      <Contact />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-zinc-900 text-sm hover:text-zinc-600 transition-colors">
          Louis Bolatre
        </Link>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#about" className="hover:text-zinc-900 transition-colors">
            À propos
          </a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">
            Projets
          </a>
          <a href="#track-record" className="hover:text-zinc-900 transition-colors">
            Track Record
          </a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
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
      </div>
      <p className="text-xs text-zinc-400 italic">
        Ce portfolio a été codé en autonomie avec{" "}
        <span className="text-zinc-600 font-medium not-italic">Claude Code</span>{" "}
        — preuve opérationnelle de ma capacité à matérialiser mes idées et à comprendre la technique de l&apos;intérieur.
      </p>
    </section>
  );
}

function PourToiSi() {
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
            <p className="text-xs font-semibold text-zinc-400 tracking-widest uppercase mb-3">
              Pas pour toi si
            </p>
            <p className="text-zinc-400 mb-4">
              Tu cherches un PM pour simplement faire de la maintenance de backlog (Run)
              ou gérer des processus rigides dans une grande organisation structurée.
            </p>
            <p className="text-zinc-400">
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

function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>À propos</SectionLabel>
        <div className="max-w-2xl space-y-5 text-zinc-600 leading-relaxed text-[17px]">
          <p>
            Après plusieurs années passées à lancer des produits de zéro en
            startup (notamment comme premier PM chez{" "}
            <span className="text-zinc-900 font-medium">Pyxo</span> post-Série
            A), j&apos;ai rejoint le cabinet{" "}
            <span className="text-zinc-900 font-medium">Thiga</span>. Cette
            étape de conseil a été le moment clé pour consolider, structurer et
            théoriser ma pratique du Product Management au contact
            d&apos;environnements hautement exigeants (Ledger, Electra,
            Kolecto).
          </p>
          <p>
            Aujourd&apos;hui, je combine ces bases théoriques d&apos;élite
            (Discovery structurée, frameworks de priorisation, Shape Up, OKRs)
            avec un style résolument pragmatique et orienté &laquo;&nbsp;faire&nbsp;&raquo;.
            Je mets cette double force au service de structures agiles pour
            concevoir et propulser de nouveaux produits (Build).
          </p>
          <p className="text-zinc-900 font-medium">
            Je cherche un poste de Senior PM, Lead PM, ou 1st PM dans une
            startup avec de l&apos;ambition et une vraie culture produit.
          </p>
        </div>
      </div>
    </section>
  );
}

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

function SideProjects() {
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

const trackRecordItems = [
  {
    company: "Kolecto",
    period: "2025 – présent",
    domain: "FinTech · SaaS B2B",
    tagline: "Module Devis & Facturation · Discovery agriculture & bâtiment",
    highlight:
      "1ère feature de vente de la plateforme. Anticipation e-facturation 2026.",
    slug: "kolecto",
  },
  {
    company: "Thiga",
    period: "2024 – présent",
    domain: "Conseil PM",
    tagline: "Senior PM Consultant · Missions scale-ups",
    highlight:
      "Kolecto, Electra, Ledger. Ownership total dès J1.",
    slug: "thiga",
  },
  {
    company: "Thiga Academy",
    period: "janv. 2025 – présent",
    domain: "Formation PM",
    tagline: "Formateur Product Management & Product Discovery",
    highlight:
      "Sessions pour des groupes de PMs en entreprise. Sujets Senior PM & Discovery.",
    slug: "thiga-academy",
  },
  {
    company: "Electra",
    period: "janv. – mai 2025",
    domain: "GreenTech",
    tagline: "4 000 → 11 000 bornes via Spark Alliance",
    highlight:
      "UX recharge repensée. App Android Auto. Discovery planificateur EV.",
    slug: "electra",
  },
  {
    company: "Ledger",
    period: "2024",
    domain: "Crypto",
    tagline: "Feature SWAP → 70% du CA de Ledger Live",
    highlight:
      "Delivery dans les délais. Intégrations DEX opérationnelles.",
    slug: "ledger-swap",
  },
  {
    company: "Pyxo",
    period: "2021 – 2023",
    domain: "FoodTech",
    tagline: "1er PM · 2 apps de zéro · 5 devs · post-Série A",
    highlight:
      "Grands comptes signés : McDonald's, CROUS, Sushi Shop, Metro.",
    slug: "pyxo",
  },
  {
    company: "Calldesk",
    period: "2019 – 2021",
    domain: "IA Conversationnelle",
    tagline: "Time-to-production : 6 mois → 2 semaines",
    highlight: "1 CSM suffit là où il fallait 2 devs + 1 CSM.",
    slug: "calldesk",
  },
];

function TrackRecord() {
  return (
    <section id="track-record" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>PM Track Record</SectionLabel>
        <p className="text-zinc-500 mb-12 max-w-xl">
          7 ans de delivery en startup et scale-up.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {trackRecordItems.map((item) => (
            <Link
              key={item.slug}
              href={`/case/${item.slug}`}
              className="group border border-zinc-100 bg-white rounded-xl p-6 hover:border-indigo-200 hover:shadow-sm transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-bold text-zinc-900 text-lg">
                  {item.company}
                </h3>
                <span className="text-xs text-zinc-400 mt-1">{item.period}</span>
              </div>
              <span className="text-xs font-medium text-indigo-600 mb-4">
                {item.domain}
              </span>
              <p className="text-sm font-semibold text-zinc-800 mb-2 flex-1">
                {item.tagline}
              </p>
              <p className="text-sm text-zinc-500 mb-5">{item.highlight}</p>
              <span className="text-xs font-medium text-indigo-600 group-hover:text-indigo-800 transition-colors">
                Lire le case study →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowIWork() {
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
              équipes techniques et de m&apos;assurer que ce que nous
              développerons en équipe sera d&apos;une pertinence absolue.
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

function Contact() {
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
              href="#"
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
            href="https://www.linkedin.com/in/louisbolatre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/louisbolatre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4">
      {children}
    </p>
  );
}
