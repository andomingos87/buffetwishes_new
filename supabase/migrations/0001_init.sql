-- Buffet Wishes — initial schema
-- Run via Supabase Studio (SQL Editor) on the production project.
-- All tables have RLS enabled. Public reads only on `festas` (when publicado=true).
-- INSERT/UPDATE/DELETE on user-data tables only via service_role (Server Actions).

-- =========================================================================
-- TABLE: festas (gallery shown on /aconteceu)
-- =========================================================================
create table if not exists public.festas (
  id          bigint generated always as identity primary key,
  nome        text not null,
  foto_url    text not null,
  link        text,
  ordem       integer default 0,
  publicado   boolean default true not null,
  created_at  timestamptz default now() not null
);

create index if not exists festas_publicado_ordem_idx
  on public.festas (publicado, ordem desc, created_at desc);

alter table public.festas enable row level security;

drop policy if exists festas_public_read on public.festas;
create policy festas_public_read on public.festas
  for select
  using (publicado = true);

-- =========================================================================
-- TABLE: orcamentos (long quote form)
-- =========================================================================
create table if not exists public.orcamentos (
  id              bigint generated always as identity primary key,
  nome            text not null,
  email           text not null,
  telefone        text,
  celular         text not null,
  tipo_evento     text not null,
  data_evento     date,
  como_conheceu   text,
  observacoes     text,
  email_enviado   boolean default false not null,
  ip              inet,
  user_agent      text,
  created_at      timestamptz default now() not null,
  constraint orcamentos_tipo_evento_check check (
    tipo_evento in ('INFANTIL','ADULTO','TEEN','DEBUTANTE','CORPORATIVO','SOCIAL','OUTROS')
  )
);

create index if not exists orcamentos_created_at_idx
  on public.orcamentos (created_at desc);

alter table public.orcamentos enable row level security;
-- No public policies. INSERT only via service_role.

-- =========================================================================
-- TABLE: contatos (short contact form)
-- =========================================================================
create table if not exists public.contatos (
  id          bigint generated always as identity primary key,
  nome        text not null,
  email       text not null,
  telefone    text,
  mensagem    text not null,
  ip          inet,
  user_agent  text,
  created_at  timestamptz default now() not null
);

create index if not exists contatos_created_at_idx
  on public.contatos (created_at desc);

alter table public.contatos enable row level security;

-- =========================================================================
-- TABLE: newsletter_inscricoes
-- =========================================================================
create table if not exists public.newsletter_inscricoes (
  id          bigint generated always as identity primary key,
  email       text not null unique,
  origem      text,
  created_at  timestamptz default now() not null
);

alter table public.newsletter_inscricoes enable row level security;

-- =========================================================================
-- STORAGE: bucket `festas` (public read)
-- =========================================================================
-- Run separately in Storage UI or via SQL:
insert into storage.buckets (id, name, public)
values ('festas', 'festas', true)
on conflict (id) do update set public = true;

-- Public read policy on bucket
drop policy if exists "festas public read" on storage.objects;
create policy "festas public read"
  on storage.objects for select
  using (bucket_id = 'festas');
