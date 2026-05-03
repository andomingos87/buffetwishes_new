"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  orcamentoSchema,
  TIPOS_EVENTO,
  type OrcamentoInput,
} from "@/lib/schemas/orcamento";
import { maskCellphone, maskLandline, maskDateBR } from "@/lib/masks";
import { submitOrcamento } from "@/app/actions/orcamento";

const TIPO_LABELS: Record<(typeof TIPOS_EVENTO)[number], string> = {
  INFANTIL: "Infantil",
  ADULTO: "Adulto",
  TEEN: "Teen",
  DEBUTANTE: "Debutante",
  CORPORATIVO: "Corporativo",
  SOCIAL: "Social",
  OUTROS: "Outros",
};

export function OrcamentoForm() {
  const [pending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<OrcamentoInput>({
    resolver: zodResolver(orcamentoSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      celular: "",
      tipo_evento: undefined,
      data_evento: "",
      como_conheceu: "",
      observacoes: "",
      website: "",
    },
    mode: "onBlur",
  });

  function onSubmit(values: OrcamentoInput) {
    startTransition(async () => {
      const res = await submitOrcamento(values);
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined" && "gtag" in window) {
          (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
            "event",
            "orcamento_submit",
            { tipo_evento: values.tipo_evento },
          );
        }
      } else {
        toast.error("Não foi possível enviar", { description: res.error });
      }
    });
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-primary/20 bg-card p-8 text-center shadow-sm sm:p-12"
        >
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" aria-hidden />
          <h3 className="mt-4 font-display text-3xl text-primary">
            Recebemos seu pedido!
          </h3>
          <p className="mt-3 text-foreground/75">
            Nossa equipe entrará em contato em até 1 dia útil com novidades
            para você.
          </p>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
              noValidate
            >
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="name"
                        placeholder="Seu nome completo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        autoComplete="email"
                        placeholder="seu@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input
                          inputMode="tel"
                          placeholder="(11) 1234-5678"
                          {...field}
                          onChange={(e) =>
                            field.onChange(maskLandline(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="celular"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Celular *</FormLabel>
                      <FormControl>
                        <Input
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="(11) 91234-5678"
                          {...field}
                          onChange={(e) =>
                            field.onChange(maskCellphone(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="tipo_evento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de evento *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {TIPOS_EVENTO.map((t) => (
                            <SelectItem key={t} value={t}>
                              {TIPO_LABELS[t]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="data_evento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data do evento</FormLabel>
                      <FormControl>
                        <Input
                          inputMode="numeric"
                          placeholder="dd/mm/aaaa"
                          {...field}
                          onChange={(e) =>
                            field.onChange(maskDateBR(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="como_conheceu"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Como conheceu o Buffet Wishes? *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Indicação, Google, Instagram..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="observacoes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Observações</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Conte sobre o evento — número de convidados, tema, horário..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Honeypot (hidden) */}
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    className="hidden"
                    {...field}
                  />
                )}
              />

              <Button
                type="submit"
                disabled={pending}
                size="lg"
                className="mt-2 w-full sm:w-auto sm:self-end"
              >
                {pending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar pedido
                  </>
                )}
              </Button>

              <p className="text-xs text-foreground/60">
                Ao enviar, você concorda com nossa{" "}
                <a
                  href="/politica-de-privacidade"
                  className="underline-offset-2 hover:text-primary hover:underline"
                >
                  política de privacidade
                </a>
                . Seus dados serão usados apenas para retornar seu orçamento.
              </p>
            </form>
          </Form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
