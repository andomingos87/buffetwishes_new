<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Documentação operacional do projeto

Manuais para tarefas recorrentes, fora do código:

- [`docs/CONFIGURAR-GA4.md`](docs/CONFIGURAR-GA4.md) — como criar a property GA4 e preencher `NEXT_PUBLIC_GA_ID`. UA antigo (`UA-114594870-1`) está descontinuado — não reutilizar.
- [`docs/COMO-ADICIONAR-FESTA.md`](docs/COMO-ADICIONAR-FESTA.md) — como adicionar/editar festas em `/aconteceu` via Supabase Studio (sem deploy).

## Variáveis de ambiente

Template em [`.env.example`](.env.example). Valores reais ficam em `.env.local` (não commitado) e nas envs da Vercel.

| Var | Origem | Obrigatório? |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Studio → Settings → API | sim |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | idem | sim |
| `SUPABASE_SERVICE_ROLE_KEY` | idem (server-only — nunca expor ao browser) | sim para forms |
| `RESEND_API_KEY` | resend.com → API Keys | sim para e-mails |
| `CONTACT_EMAIL_TO` | e-mail destino | sim |
| `RESEND_FROM` | remetente verificado no Resend | sim |
| `NEXT_PUBLIC_GA_ID` | GA4 (`G-XXXXXXXXXX`) — ver `docs/CONFIGURAR-GA4.md` | opcional |
| `NEXT_PUBLIC_WHATSAPP` | número WhatsApp Brasil sem `+` | sim |
| `TURNSTILE_SECRET_KEY` / `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile | opcional (anti-spam) |
