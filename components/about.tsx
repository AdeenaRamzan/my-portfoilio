import { Reveal } from '@/components/reveal'
import { aboutSkills } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            About
          </p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal>
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Building end-to-end AI systems that actually ship.
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                I&apos;m a Computer Science student at UBIT, University of
                Karachi, and a Machine Learning Engineer at Syslab. I build
                end-to-end AI systems by designing the pipeline, training the
                models, and actually shipping them to production. My work spans
                generative AI and RAG systems, computer vision, healthcare ML,
                and full-stack application development.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Core toolkit
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {aboutSkills.map((skill) => (
                  <li
                    key={skill}
                    className="glass glass-hover flex items-center gap-2.5 rounded-lg px-4 py-3 text-sm font-medium"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-gradient-brand"
                      aria-hidden
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
