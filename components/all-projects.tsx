'use client'

import { useMemo, useState } from 'react'
import { ExternalLink, Trophy, Video } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GithubIcon } from '@/components/brand-icons'
import {
  gridProjects,
  projectCategories,
  type GridProject,
  type ProjectImage,
} from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { ProjectImageBlock } from '@/components/project-image'
import { Lightbox } from '@/components/lightbox'

function badgeIcon(badge: string) {
  if (badge.toLowerCase().includes('video')) return Video
  return Trophy
}

function ProjectCard({ project, onImageClick }: { project: GridProject; onImageClick: (img: ProjectImage) => void }) {
  const BadgeIcon = project.badge ? badgeIcon(project.badge) : null
  return (
    <article className="glass glass-hover flex flex-col overflow-hidden rounded-2xl">
      <div className="relative aspect-video w-full overflow-hidden border-b border-border">
        <ProjectImageBlock image={project.image} onClick={() => onImageClick(project.image)} />
        {project.badge && BadgeIcon ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-sm">
            <BadgeIcon className="h-3 w-3 text-accent" aria-hidden />
            {project.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-medium uppercase tracking-wide text-primary">
          {project.categoryLabel}
        </span>
        <h3 className="mt-2 text-balance text-lg font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-2">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-brand px-3 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              Live Demo
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary',
                project.demo ? '' : 'flex-1',
              )}
            >
              <GithubIcon className="h-3.5 w-3.5" aria-hidden />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export function AllProjects() {
  const [activeTab, setActiveTab] = useState('all')
  const [active, setActive] = useState<ProjectImage | null>(null)

  const filtered = useMemo(() => {
    if (activeTab === 'all') return gridProjects
    return gridProjects.filter((p) => p.category === activeTab)
  }, [activeTab])

  return (
    <section className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            All Projects
          </h2>
          <p className="mt-3 text-muted-foreground">Explore by category</p>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((cat) => {
              const selected = activeTab === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                    selected
                      ? 'bg-gradient-brand text-primary-foreground shadow-lg shadow-primary/20'
                      : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
                  )}
                >
                  {cat.label}
                  <span className={cn(
                    'ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-medium',
                    selected ? 'bg-white/20' : 'bg-secondary text-muted-foreground'
                  )}>
                    {cat.id === 'all' ? gridProjects.length : gridProjects.filter(p => p.category === cat.id).length}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onImageClick={setActive} />
          ))}
        </div>
      </div>

      <Lightbox image={active} onClose={() => setActive(null)} />
    </section>
  )
}
