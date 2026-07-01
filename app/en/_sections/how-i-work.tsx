import { SectionLabel } from "@/app/_components/section-label";

export function HowIWork() {
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
