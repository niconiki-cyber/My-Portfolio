import { Hono } from 'hono'

type Env = {
  ASSETS: Fetcher
  // Set these in Sites → Secrets (and in .dev.vars for local development).
  RESEND_API_KEY?: string
  CONTACT_TO?: string
  CONTACT_FROM?: string
}

const app = new Hono<{ Bindings: Env }>()

app.get('/api/health', (c) => c.json({ ok: true }))

// Contact form. Delivers through Resend's REST API when RESEND_API_KEY is
// set; until then it validates the input and says so plainly rather than
// pretending the message was sent.
app.post('/api/contact', async (c) => {
  const body = await c.req
    .json<{ name?: string; email?: string; message?: string }>()
    .catch(() => ({}) as Record<string, string>)

  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return c.json({ error: 'Enter a valid email address.' }, 400)
  if (!body.message?.trim()) return c.json({ error: 'Write a few words about the project.' }, 400)

  const key = c.env.RESEND_API_KEY
  if (!key) return c.json({ error: 'Email is not configured yet. Add RESEND_API_KEY in Sites → Secrets.' }, 503)

  const from = c.env.CONTACT_FROM ?? 'Portfolio <onboarding@resend.dev>'
  const to = c.env.CONTACT_TO ?? 'phyoethantnaing007.007@gmail.com'
  const name = body.name?.trim() || 'Someone'

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: body.email,
      subject: `Portfolio enquiry from ${name}`,
      text: `${name} <${body.email}>\n\n${body.message}`,
    }),
  })

  if (!response.ok) {
    console.error('Resend rejected the message', response.status, await response.text())
    return c.json({ error: 'Could not send the message. Try email instead.' }, 502)
  }

  return c.json({ ok: true })
})

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
