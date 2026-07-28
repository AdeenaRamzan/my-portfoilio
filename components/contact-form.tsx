'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import {
  sendContactMessage,
  type ContactState,
} from '@/app/actions/contact'

const initialState: ContactState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-brand px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          Sending message…
        </>
      ) : (
        <>
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          Send message
        </>
      )}
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <form
      ref={formRef}
      action={formAction}
      className="mx-auto mt-10 max-w-xl text-left"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="rounded-xl border border-border/80 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/80 focus:ring-4 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="rounded-xl border border-border/80 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/80 focus:ring-4 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, collaboration, or opportunity…"
          className="resize-y rounded-xl border border-border/80 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/80 focus:ring-4 focus:ring-primary/20"
        />
      </div>

      {/* Honeypot: hidden from users, catches bots */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <SubmitButton />

        {state.status === 'success' && (
          <p
            role="status"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden />
            {state.message}
          </p>
        )}
        {state.status === 'error' && (
          <p
            role="alert"
            className="inline-flex items-center gap-2 text-sm font-medium text-destructive"
          >
            <AlertCircle className="h-4 w-4" aria-hidden />
            {state.message}
          </p>
        )}
      </div>
    </form>
  )
}
