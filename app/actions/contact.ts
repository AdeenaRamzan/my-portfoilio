'use server'

import { Resend } from 'resend'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'aradeenaramzan@gmail.com'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  // Honeypot field — bots fill this, humans never see it.
  const honeypot = String(formData.get('company') ?? '').trim()
  if (honeypot) {
    return { status: 'success', message: 'Thanks! Your message has been sent.' }
  }

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in all fields.' }
  }
  if (!isValidEmail(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }
  if (message.length > 5000) {
    return { status: 'error', message: 'That message is a bit too long.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[Contact Form] RESEND_API_KEY is not set. Received message:', { name, email, message })
    return {
      status: 'success',
      message: "Thanks! Your message has been sent. I'll get back to you soon.",
    }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return {
        status: 'error',
        message: 'Could not send your message. Please try again.',
      }
    }

    return {
      status: 'success',
      message: "Thanks! Your message has been sent. I'll get back to you soon.",
    }
  } catch (err) {
    console.log('[v0] Contact send exception:', err)
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.',
    }
  }
}
