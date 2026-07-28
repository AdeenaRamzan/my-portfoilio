import { Boxes, Brain, Cpu, LayoutTemplate } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { skillGroups } from '@/lib/portfolio-data'

const icons = [Brain, Cpu, Boxes, LayoutTemplate]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Skills
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Reveal key={group.title} delay={index * 80}>
                <div className="glass glass-hover glass-glow h-full rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
