import { Reveal } from '@/components/reveal'
import { experience } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <ol className="mt-12 relative pl-8">
          <span className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-transparent" aria-hidden />
          {experience.map((item, index) => (
            <Reveal as="li" key={`${item.company}-${item.period}`} delay={index * 60}>
              <div className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_8px_rgba(59,130,246,0.3)]" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-brand" />
                </span>

                <div className="glass rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    {item.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Current
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {item.company}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {item.period}
                  </p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
