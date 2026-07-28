'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GithubIcon } from '@/components/brand-icons'
import { featuredProjects, type ProjectImage } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { ProjectImageBlock } from '@/components/project-image'
import { Lightbox } from '@/components/lightbox'

export function FeaturedProjects() {
  const [active, setActive] = useState<ProjectImage | null>(null)

  return (
    <section id="projects" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Projects
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            The work I&apos;m most proud of
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16 lg:gap-24">
          {featuredProjects.map((project, index) => {
            const imageLeft = index % 2 === 1
            return (
              <Reveal as="article" key={project.id}>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Media cluster */}
                  <div className={cn(imageLeft && 'lg:order-2')}>
                    <div className="glass overflow-hidden rounded-2xl">
                      <ProjectImageBlock
                        image={project.hero}
                        onClick={() => setActive(project.hero)}
                        fit="natural"
                      />
                    </div>
                    {project.supporting && project.supporting.length > 0 ? (
                      <div
                        className={cn(
                          'mt-4 grid gap-4',
                          project.supporting.length > 1
                            ? 'grid-cols-2'
                            : 'grid-cols-1',
                        )}
                      >
                        {project.supporting.map((img) => (
                          <div
                            key={img.alt}
                            className="glass aspect-video w-full overflow-hidden rounded-xl"
                          >
                            <ProjectImageBlock
                              image={img}
                              onClick={() => setActive(img)}
                              fit="cover"
                            />
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* Content */}
                  <div className={cn(imageLeft && 'lg:order-1')}>
                    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.tag}
                    </span>
                    <h3 className="mt-4 text-balance text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {project.metrics ? (
                      <dl className="mt-6 flex flex-wrap gap-3">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-lg border border-border bg-secondary/50 px-4 py-2.5"
                          >
                            <dd className="text-lg font-bold text-gradient">
                              {metric.value}
                            </dd>
                            <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                              {metric.label}
                            </dt>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {project.note ? (
                      <p className="mt-5 rounded-lg border border-border bg-secondary/30 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                        {project.note}
                      </p>
                    ) : null}

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03]',
                            link.variant === 'primary'
                              ? 'bg-gradient-brand text-primary-foreground shadow-lg shadow-primary/20'
                              : 'border border-border text-foreground hover:border-primary/50 hover:bg-secondary',
                          )}
                        >
                          {link.label === 'GitHub' ? (
                            <GithubIcon className="h-4 w-4" aria-hidden />
                          ) : (
                            <ExternalLink className="h-4 w-4" aria-hidden />
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <Lightbox image={active} onClose={() => setActive(null)} />
    </section>
  )
}
