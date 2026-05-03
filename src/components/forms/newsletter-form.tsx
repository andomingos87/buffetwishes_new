"use client";

import { useState, useTransition } from "react";
import { Mail, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { subscribeNewsletter } from "@/app/actions/newsletter";

export function NewsletterForm({ origem = "footer" }: { origem?: string }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [pending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    startTransition(async () => {
      const res = await subscribeNewsletter({ email, origem, website });
      if (res.ok) {
        toast.success("Recebemos seu e-mail!", {
          description: "Em breve enviaremos novidades do Buffet Wishes.",
        });
        setEmail("");
      } else {
        toast.error("Não foi possível inscrever", { description: res.error });
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="group flex items-center gap-2 rounded-full border border-border bg-background pl-4 pr-1.5 py-1.5 transition-colors focus-within:border-primary"
    >
      <Mail className="h-4 w-4 shrink-0 text-foreground/50" aria-hidden />
      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="Digite aqui seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-transparent py-1 text-sm placeholder:text-foreground/50 focus:outline-none"
      />
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        aria-hidden
      />
      <button
        type="submit"
        disabled={pending}
        className="flex h-8 items-center justify-center rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground transition-all hover:scale-[1.04] disabled:opacity-60"
      >
        {pending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "Enviar"}
      </button>
    </form>
  );
}
