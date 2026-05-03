# Como adicionar uma festa em /aconteceu

A galeria da página `/aconteceu` é alimentada pela tabela `festas` no Supabase.
Você pode adicionar/editar festas direto pelo Supabase Studio, **sem precisar de deploy**.

## Passo 1 — Subir a foto

1. Abra o [Supabase Studio](https://supabase.com/dashboard) → seu projeto.
2. Menu **Storage** → bucket `festas`.
3. Clique em **Upload file** e suba a foto da festa (recomendado: JPG/WebP, ≥ 1200px no lado maior, ≤ 500 KB).
4. Após o upload, clique no arquivo e copie a **Public URL** (algo como `https://xxxx.supabase.co/storage/v1/object/public/festas/foto.jpg`).

## Passo 2 — Criar o registro

1. Menu **Table Editor** → tabela `festas`.
2. Clique em **Insert** → **Insert row**.
3. Preencha:
   - **nome**: nome da festa (ex: "Antonella - 1 aninho").
   - **foto_url**: a URL pública copiada no passo 1.
   - **link**: (opcional) URL do álbum no Facebook.
   - **ordem**: (opcional) número para forçar uma ordem específica. Menor aparece antes.
   - **publicado**: deixe `true` para a festa aparecer no site.
4. Clique em **Save**.

## Passo 3 — Atualizar o site

A página é cacheada por **1 hora (ISR)**. Para ver imediatamente:

- Aguarde até 1h, **ou**
- Abra a aba anônima e acesse `/aconteceu`, **ou**
- Faça um redeploy na Vercel.

## Editar ou despublicar

- Para editar: clique na linha → edite → **Save**.
- Para esconder do site sem apagar: marque `publicado = false`.
- Para apagar: ícone de lixeira (lembre de apagar também a foto no Storage).

## Boas práticas

- Mantenha o `nome` curto (até 30 caracteres) — fica melhor visualmente nos cards.
- Otimize fotos antes de subir (use [squoosh.app](https://squoosh.app) ou similar).
- Use `ordem` apenas quando precisar destacar uma festa específica no topo. Por padrão, as mais recentes aparecem primeiro.
