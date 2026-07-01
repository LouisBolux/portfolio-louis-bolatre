import Link from "next/link";

export default function HomeEn() {
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
        <Link href="/en" className="font-semibold text-zinc-900 text-sm hover:text-zinc-600 transition-colors">
          Louis Bolatre
        </Link>
        <div className="flex gap-6 text-sm text-zinc-500 items-center">
          <a href="#about" className="hover:text-zinc-900 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">
            Projects
          </a>
          <a href="#track-record" className="hover:text-zinc-900 transition-colors">
            Track Record
          </a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">
            Contact
          </a>
          <Link
            href="/"
            className="text-xs font-medium border border-zinc-200 rounded-md px-2 py-1 hover:bg-zinc-50 transition-colors"
          >
            FR
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-24">
      <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-6">
        Senior Product Manager · Available
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-none tracking-tight mb-8">
        Louis Bolatre
      </h1>
      <p className="text-xl md:text-2xl font-semibold text-zinc-800 max-w-2xl mb-4 leading-snug">
        Senior PM. Product designer &amp; builder (0 to 1).
      </p>
      <p className="text-lg text-zinc-500 max-w-xl mb-12 leading-relaxed">
        Combining solid theoretical foundations with a resolutely pragmatic
        style. I blend rigorous discovery with the velocity of rapid,
        AI-assisted engineering to design, structure and ship complex products.
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
          href="/cv-louis-bolatre.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
        >
          Download CV ↓
        </a>
      </div>
      <p className="text-xs text-zinc-400 italic">
        This portfolio was coded autonomously with{" "}
        <span className="text-zinc-600 font-medium not-italic">Claude Code</span>{" "}
        — operational proof of my ability to turn ideas into reality and understand the technical side from within.
      </p>
    </section>
  );
}

function PourToiSi() {
  const items = [
    "You're looking for a Senior PM, Lead PM or 1st PM to design and launch (0 to 1) a product or new initiatives post-fundraise.",
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
          </ul>
          <div className="text-sm md:border-l border-zinc-100 md:pl-8">
            <p className="text-xs font-semibold text-zinc-400 tracking-widest uppercase mb-3">
              Not a fit if
            </p>
            <p className="text-zinc-400 mb-4">
              You&apos;re looking for a PM to simply maintain a backlog (Run) or
              manage rigid processes in a large, heavily structured organization.
            </p>
            <p className="text-zinc-400">
              Also open to occasional freelance missions —{" "}
              <a
                href="#contact"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                reach out
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
        <SectionLabel>About</SectionLabel>
        <div className="max-w-2xl space-y-5 text-zinc-600 leading-relaxed text-[17px]">
          <p>
            After several years launching products from scratch in startups
            (notably as first PM at{" "}
            <span className="text-zinc-900 font-medium">Pyxo</span> post-Series
            A), I joined the consulting firm{" "}
            <span className="text-zinc-900 font-medium">Thiga</span>. This
            consulting chapter was the key stage to consolidate, structure and
            theorize my Product Management practice in contact with highly
            demanding environments (Ledger, Electra, Kolecto).
          </p>
          <p>
            Today, I combine these elite theoretical foundations (structured
            Discovery, prioritization frameworks, Shape Up, OKRs) with a
            resolutely pragmatic, action-oriented style. I put this dual
            strength to work for agile organizations to design and drive new
            products (Build).
          </p>
          <p className="text-zinc-900 font-medium">
            I&apos;m looking for a Senior PM, Lead PM, or 1st PM role in a startup
            with ambition and a genuine product culture.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10 text-sm">
          {[
            { lang: "French", level: "Native" },
            { lang: "English", level: "Fluent" },
            { lang: "Spanish", level: "Fluent" },
            { lang: "German", level: "Basic" },
          ].map((l) => (
            <span key={l.lang} className="text-zinc-500">
              <span className="text-zinc-800 font-medium">{l.lang}</span> — {l.level}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

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

function SideProjects() {
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

const trackRecordItems = [
  {
    company: "Kolecto",
    period: "2025 – present",
    domain: "FinTech · SaaS B2B",
    via: "Mission via Thiga",
    tagline: "Quotes & Billing module · Agriculture & construction discovery",
    highlight:
      "1st sales-generating feature of the platform. 2026 e-invoicing anticipated.",
    slug: "kolecto",
  },
  {
    company: "Thiga",
    period: "2024 – present",
    domain: "PM Consulting",
    via: undefined as string | undefined,
    tagline: "Senior PM Consultant · Scale-up missions",
    highlight:
      "The consulting firm that staffed me at Kolecto, Electra and Ledger. Full ownership from day 1.",
    slug: "thiga",
  },
  {
    company: "Thiga Academy",
    period: "Jan. 2025 – present",
    domain: "PM Training",
    via: "Thiga's training arm",
    tagline: "Product Management & Product Discovery Trainer",
    highlight:
      "Sessions for groups of in-house PMs. Senior PM & Discovery topics.",
    slug: "thiga-academy",
  },
  {
    company: "Electra",
    period: "Jan. – May 2025",
    domain: "GreenTech",
    via: "Mission via Thiga",
    tagline: "4,000 → 11,000 chargers via Spark Alliance",
    highlight:
      "Charging UX redesigned. Android Auto app. EV planner discovery.",
    slug: "electra",
  },
  {
    company: "Ledger",
    period: "2024",
    domain: "Crypto",
    via: "Mission via Thiga",
    tagline: "SWAP feature → 70% of Ledger Live's revenue",
    highlight:
      "Delivered on time. DEX integrations operational.",
    slug: "ledger-swap",
  },
  {
    company: "Pyxo",
    period: "2021 – 2023",
    domain: "FoodTech",
    via: undefined as string | undefined,
    tagline: "1st PM · 2 apps from scratch · 5 devs · post-Series A",
    highlight:
      "Major accounts signed: McDonald's, CROUS, Sushi Shop, Metro.",
    slug: "pyxo",
  },
  {
    company: "Calldesk",
    period: "2019 – 2021",
    domain: "Conversational AI",
    via: undefined as string | undefined,
    tagline: "Time-to-production: 6 months → 2 weeks",
    highlight: "1 CSM is enough where it used to take 2 devs + 1 CSM.",
    slug: "calldesk",
  },
];

function TrackRecord() {
  return (
    <section id="track-record" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>PM Track Record</SectionLabel>
        <p className="text-zinc-500 mb-12 max-w-xl">
          7 years of delivery in startups and scale-ups.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {trackRecordItems.map((item) => (
            <Link
              key={item.slug}
              href={`/en/case/${item.slug}`}
              className="group border border-zinc-100 bg-white rounded-xl p-6 hover:border-indigo-200 hover:shadow-sm transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-bold text-zinc-900 text-lg">
                  {item.company}
                </h3>
                <span className="text-xs text-zinc-400 mt-1">{item.period}</span>
              </div>
              <span className="text-xs font-medium text-indigo-600 mb-1">
                {item.domain}
              </span>
              <span className="text-xs text-zinc-400 mb-4 block h-4">
                {item.via}
              </span>
              <p className="text-sm font-semibold text-zinc-800 mb-2 flex-1">
                {item.tagline}
              </p>
              <p className="text-sm text-zinc-500 mb-5">{item.highlight}</p>
              <span className="text-xs font-medium text-indigo-600 group-hover:text-indigo-800 transition-colors">
                Read the case study →
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
        <SectionLabel>How I work</SectionLabel>
        <div className="grid gap-10 md:grid-cols-2 mt-2">
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">Methods</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Shape Up when the team needs focus and short iterations. Agile
              in already-structured organizations. OKRs to align vision and
              execution over the long run. I adapt — what matters is that the
              team moves forward, not the name of the process.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">
              AI in my PM practice
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              I use AI every day: synthesizing user interviews, analyzing
              feedback, drafting specs, preparing presentations, exploring
              solutions. It&apos;s not a posture — it has become an integral part
              of how I work.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">
              AI as a build tool
            </h3>
            <p className="text-zinc-800 text-sm font-medium mb-2">
              Drafting as far as possible with AI.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              I don&apos;t just write abstract functional specs. I use the power
              of AI to code and deploy real test applications (Mescla, Darts
              Score). My goal isn&apos;t to push my code to production in your
              company, but to push the &quot;draft&quot; as close to reality as
              possible. This lets me spot spec gaps, speak the same language
              as my technical teams, and make sure what we build together is
              absolutely relevant.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">Tools</h3>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-14">Let&apos;s talk.</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Full-time option — priority */}
          <div className="border border-zinc-700 rounded-xl p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">
                Full-time role · Priority
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Looking for your next Senior PM, Lead PM, or first full-time
                PM (Lille, Paris, or remote) to structure and launch a new
                product? Let&apos;s discuss your current product challenges over
                a virtual coffee.
              </p>
            </div>
            <a
              href="https://calendar.app.google/ZkfWTL3oL6zpArWeA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors self-start"
            >
              Book a slot →
            </a>
          </div>

          {/* Freelance option */}
          <div className="border border-zinc-700 rounded-xl p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold text-zinc-400 tracking-widest uppercase mb-3">
                Freelance mission · Consulting
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Need a one-off methodology boost, an express discovery
                sprint, or a functional prototype (MVP) drafted at
                lightning speed with AI? Reach out for a consulting or
                transition mission.
              </p>
            </div>
            <a
              href="mailto:louis.bolatre@gmail.com"
              className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 px-5 py-3 rounded-lg text-sm font-medium hover:border-zinc-400 hover:text-white transition-colors self-start"
            >
              Send an e-mail →
            </a>
          </div>
        </div>

        <div className="flex gap-4 border-t border-zinc-800 pt-8">
          <a
            href="https://www.linkedin.com/in/louis-bolatre-product-manager-pm/"
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
