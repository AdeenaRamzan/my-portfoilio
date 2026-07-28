'use client'

import { useState } from 'react'
import { Mail, MessageCircle, Copy, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { ContactForm } from '@/components/contact-form'

const contacts = [
  {
    label: 'Email',
    value: 'aradeenaramzan@gmail.com',
    href: 'mailto:aradeenaramzan@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'adeena-ramzan65',
    href: 'https://linkedin.com/in/adeena-ramzan65',
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'AdeenaRamzan',
    href: 'https://github.com/AdeenaRamzan',
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'WhatsApp',
    value: 'Message me',
    href: '#',
    icon: MessageCircle,
    external: true,
  },
]

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('aradeenaramzan@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="mx-auto mt-4 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
    >
      {copied ? (
        <><Check className="h-3.5 w-3.5 text-emerald-400" /> Copied!</>
      ) : (
        <><Copy className="h-3.5 w-3.5" /> Copy Email</>  
      )}
    </button>
  )
}

export function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 px-4 pt-24 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border p-10 sm:p-14">
            <div
              className="absolute inset-0 -z-10"
              aria-hidden
              style={{
                background:
                  'radial-gradient(80% 80% at 50% 0%, rgba(59,130,246,0.14), transparent 60%), radial-gradient(80% 80% at 50% 100%, rgba(139,92,246,0.14), transparent 60%)',
              }}
            />
            <div className="dot-pattern absolute inset-0 -z-10 opacity-40" aria-hidden />

            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Build Something
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Open to freelance projects, collaborations, and full-time
              opportunities. Send me a message and it&apos;ll land straight in
              my inbox.
            </p>

            <ContactForm />

            <div className="mx-auto mt-10 flex max-w-xl items-center gap-4">
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                or reach me at
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {contacts.map((c) => {
                const Icon = c.icon
                const iconOnly = c.label === 'WhatsApp'
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    aria-label={iconOnly ? c.label : undefined}
                    className="glass glass-hover inline-flex items-center gap-2.5 rounded-lg px-5 py-3 text-sm font-medium"
                  >
                    <Icon className="h-4 w-4 text-primary" aria-hidden />
                    {iconOnly ? (
                      <span className="sr-only">{c.label}</span>
                    ) : (
                      <span>{c.value}</span>
                    )}
                  </a>
                )
              })}
            </div>
            <CopyEmailButton />
          </div>
        </Reveal>

        <div className="mx-auto max-w-6xl border-t border-border py-8 text-center">
          <p className="text-pretty text-xs text-muted-foreground">
            © 2026 Adeena Ramzan · Built with React &amp; Tailwind · Karachi,
            Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
