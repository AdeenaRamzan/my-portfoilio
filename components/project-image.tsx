import { ImageIcon, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ProjectImage } from '@/lib/portfolio-data'

interface ProjectImageProps {
  image: ProjectImage
  className?: string
  onClick?: () => void
  /** 'cover' fills container completely (for grid cards), 'natural' displays full image tightly without extra space, 'contain' for lightbox */
  fit?: 'cover' | 'natural' | 'contain'
}

export function ProjectImageBlock({
  image,
  className,
  onClick,
  fit = 'cover',
}: ProjectImageProps) {
  const interactive = typeof onClick === 'function'

  if (image.src) {
    const isNatural = fit === 'natural'
    const isContain = fit === 'contain'

    const fitClass = isNatural
      ? 'block w-full h-auto'
      : isContain
        ? 'h-full w-full object-contain'
        : 'h-full w-full object-cover object-top'

    const btnClass = isNatural
      ? 'group/img relative block w-full text-left cursor-zoom-in overflow-hidden'
      : 'group/img relative h-full w-full cursor-zoom-in overflow-hidden'

    const img = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image.src || '/placeholder.svg'}
        alt={image.alt}
        className={cn(
          fitClass,
          'transition-transform duration-300',
          interactive && 'group-hover/img:scale-105',
          className,
        )}
        style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
      />
    )

    if (interactive) {
      return (
        <button
          type="button"
          onClick={onClick}
          className={btnClass}
          aria-label={`${image.alt} — click to enlarge`}
        >
          {img}
          <span
            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/img:bg-black/40"
            aria-hidden
          >
            <span className="flex items-center gap-2 rounded-lg bg-background/80 px-4 py-2 text-sm font-medium text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover/img:opacity-100 translate-y-2 group-hover/img:translate-y-0">
              <ZoomIn className="h-4 w-4" />
              Click to enlarge
            </span>
          </span>
        </button>
      )
    }

    return img
  }

  const Tag = interactive ? 'button' : 'div'

  return (
    <Tag
      type={interactive ? 'button' : undefined}
      onClick={onClick}
      aria-label={image.alt}
      className={cn(
        'group/ph relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-secondary text-center',
        interactive && 'cursor-zoom-in',
        className,
      )}
    >
      <div className="dot-pattern absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute inset-0 opacity-70"
        aria-hidden
        style={{
          background:
            'radial-gradient(120% 120% at 15% 0%, rgba(59,130,246,0.22), transparent 55%), radial-gradient(120% 120% at 100% 100%, rgba(139,92,246,0.22), transparent 55%)',
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-3 px-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/40 text-primary backdrop-blur-sm">
          <ImageIcon className="h-5 w-5" aria-hidden />
        </span>
        {image.caption ? (
          <span className="max-w-[16rem] text-xs font-medium text-muted-foreground text-balance">
            {image.caption}
          </span>
        ) : null}
      </div>
    </Tag>
  )
}
