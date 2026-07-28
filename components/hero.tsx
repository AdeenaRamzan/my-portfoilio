import { ArrowRight, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const stats = [
  { value: '12+', label: 'Projects Shipped' },
  { value: '5+', label: 'Live Demos' },
  { value: '2', label: 'Internships' },
  { value: '1', label: 'Hospital Collaboration' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40"
    >
      {/* background pattern + glow */}
      <div className="grid-pattern absolute inset-0 -z-10 opacity-40" aria-hidden />
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.10), transparent 70%)',
        }}
      />
      <div
        className="animate-orb absolute left-1/2 top-24 -z-10 h-[420px] w-[620px] max-w-[90vw] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        aria-hidden
        style={{
          background:
            'radial-gradient(closest-side, rgba(59,130,246,0.35), transparent), radial-gradient(closest-side, rgba(139,92,246,0.30), transparent)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40"
        aria-hidden
        style={{
          background: 'linear-gradient(to top, var(--background), transparent)',
        }}
      />

      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            ML Engineer @ Syslab · Currently Building
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-7xl">
            Adeena <span className="text-gradient">Ramzan</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-4 text-balance text-lg font-medium text-foreground sm:text-xl">
            AI/ML Engineer · Generative AI &amp; RAG Systems · LLM Fine-tuning
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            I design, train, and deploy production AI systems, from LLM-powered
            RAG pipelines to fine-tuned transformers and full-stack ML
            applications.
          </p>
        </Reveal>

        <Reveal delay={230}>
          <div className="mx-auto mt-8 max-w-lg">
            <div className="glass overflow-hidden rounded-xl border border-border">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">pipeline.py</span>
              </div>
              <pre className="px-4 py-4 font-mono text-xs leading-relaxed sm:text-sm">
                <code>
                  <span className="text-purple-400">from</span> <span className="text-blue-400">securescope</span> <span className="text-purple-400">import</span> <span className="text-emerald-400">CascadeDetector</span>{`\n`}
                  <span className="text-purple-400">from</span> <span className="text-blue-400">langchain</span> <span className="text-purple-400">import</span> <span className="text-emerald-400">RAGPipeline</span>{`\n\n`}
                  <span className="text-muted-foreground"># Production AI systems that ship</span>{`\n`}
                  <span className="text-foreground">pipeline</span> <span className="text-purple-400">=</span> <span className="text-emerald-400">RAGPipeline</span>(<span className="text-orange-400">provider</span>=<span className="text-amber-300">"Groq"</span>)
                </code>
              </pre>
            </div>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary sm:w-auto"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Get In Touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass glass-hover rounded-xl p-4 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-gradient sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground text-pretty">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
