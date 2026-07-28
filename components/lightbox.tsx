'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import type { ProjectImage } from '@/lib/portfolio-data'
import { ProjectImageBlock } from '@/components/project-image'

interface LightboxProps {
  image: ProjectImage | null
  onClose: () => void
}

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    if (!image) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/80 text-foreground transition-colors hover:bg-secondary"
      >
        <X className="h-5 w-5" />
      </button>
      <figure
        className="max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video w-full">
          <ProjectImageBlock image={image} fit="contain" />
        </div>
        {image.caption ? (
          <figcaption className="bg-card px-4 py-3 text-center text-sm text-muted-foreground">
            {image.caption}
          </figcaption>
        ) : null}
      </figure>
    </div>
  )
}
