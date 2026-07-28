import { Award } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { certifications } from '@/lib/portfolio-data'

export function Certifications() {
  return (
    <section className="scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            Certifications
          </h2>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Continuous learning across AI, machine learning, and full-stack
            development.
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal
              key={`${cert.name}-${cert.issuer}`}
              delay={i * 40}
              as="li"
              className="glass glass-hover glass-glow flex gap-3.5 rounded-xl p-5"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-[18px] w-[18px] text-accent" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="text-pretty text-sm font-semibold leading-snug">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-primary">{cert.issuer}</p>
                {cert.date && (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Issued {cert.date}
                  </p>
                )}
                {cert.credentialId && (
                  <p className="mt-1.5 break-all font-mono text-[11px] text-muted-foreground/80">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
