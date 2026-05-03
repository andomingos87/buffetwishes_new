# Configurar Google Analytics 4 (`NEXT_PUBLIC_GA_ID`)

Como criar a property GA4 do Buffet Wishes e plugar no site.

## Contexto rápido

- `NEXT_PUBLIC_GA_ID` no `.env.local` (e nas envs da Vercel) é o **ID de medição do GA4**, no formato `G-XXXXXXXXXX`.
- O site PHP antigo usa `UA-114594870-1` (Universal Analytics). **Universal Analytics foi descontinuado em 1º/jul/2023** — parou de coletar dados e não dá pra migrar para GA4. Vamos criar uma property nova do zero.
- O ID GA4 é diferente: começa com `G-` (UA começava com `UA-`).
- Se `NEXT_PUBLIC_GA_ID` ficar vazio, o site funciona normal — só não coleta analytics.

## Passo a passo (criar a property)

1. Entre em [analytics.google.com](https://analytics.google.com) com uma conta Google da empresa (não pessoal — facilita transferir depois).
2. Engrenagem (canto inferior esquerdo) → **Administrador**.
3. Coluna **Conta**: use a existente ou crie nova → nome `Buffet Wishes`.
4. Coluna **Propriedade**: clique **Criar** → **Propriedade**.
   - Nome: `Buffet Wishes`
   - Fuso horário: `(GMT-03:00) São Paulo`
   - Moeda: `BRL`
5. Avançar → setor `Alimentação` (ou `Outros`). Tamanho `Pequena`.
6. Objetivos: marque **Gerar leads**.
7. **Coleta de dados → Plataforma → Web**:
   - URL: `https://buffetwishes.com.br`
   - Nome do stream: `Buffet Wishes — Site`
8. A tela mostra o **ID de medição** `G-XXXXXXXXXX`. **Esse é o valor.**

## Plugar no site

### Local

Edite `web/.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Reinicie o `pnpm dev`.

### Produção (Vercel)

Em **Project Settings → Environment Variables**, adicione `NEXT_PUBLIC_GA_ID` com o mesmo valor em **Production** e **Preview**. Faça redeploy.

## Como funciona no código

Plugado em [`src/components/layout/analytics.tsx`](../src/components/layout/analytics.tsx) e usado em [`src/app/layout.tsx`](../src/app/layout.tsx) via `<ConsentAnalytics />`.

Comportamento:

- O script do GA4 **só carrega depois do usuário clicar "Aceitar todos"** no [`cookie-banner.tsx`](../src/components/layout/cookie-banner.tsx). Se escolher "Apenas essenciais", o GA nem entra na página → conformidade LGPD por padrão.
- Sem `NEXT_PUBLIC_GA_ID` configurado, o componente retorna `null` (sem erro).

## Eventos que o site já dispara

Não precisa criar nada na interface do GA4 — o código já manda automaticamente:

| Evento | Disparado em | Parâmetros |
|---|---|---|
| `whatsapp_click` | clique no botão flutuante do WhatsApp | `source: "fab"` |
| `orcamento_submit` | envio do formulário de orçamento | `tipo_evento` (INFANTIL/ADULTO/TEEN/...) |

Onde olhar no GA4: **Relatórios → Engajamento → Eventos**. Você pode marcar esses dois como **"Eventos-chave"** (antigamente "conversões") em **Administrador → Eventos**.

## Métricas que valem acompanhar (após go-live)

- **Conversão WhatsApp:** cliques em `whatsapp_click` ÷ usuários totais.
- **Conversão Orçamento:** envios `orcamento_submit` ÷ visitas em `/orcamento`.
- **Top páginas:** quais rotas trazem mais tráfego orgânico.
- **Origem do tráfego:** Google orgânico vs. direto vs. Instagram (link da bio).

## Histórico do UA

- ID antigo: `UA-114594870-1` — **não usar** no site novo.
- Se ainda quiser preservar relatórios antigos do UA, exporte para PDF/CSV pela interface do UA antes de julho/2024 (depois, indisponível).
- O ID UA não vai para o `.env.local` nem para o código novo.
