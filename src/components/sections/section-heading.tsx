import { cn } from "@/lib/utils";

export function StarOrnament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-3.5 w-3.5 text-primary", className)}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 1.5l2.6 6.7 7.2.5-5.5 4.7 1.8 7-6.1-4-6.1 4 1.8-7-5.5-4.7 7.2-.5z" />
    </svg>
  );
}

export function SectionHeading({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "flex items-center justify-center gap-3 text-center font-display text-4xl font-bold text-primary sm:text-5xl",
        className,
      )}
    >
      <StarOrnament />
      <span>{children}</span>
      <StarOrnament />
    </h2>
  );
}
