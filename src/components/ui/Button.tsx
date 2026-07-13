import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "signal" | "paper" | "ink" | "light";
  external?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-lg border-2 px-5 py-3 text-sm font-bold uppercase tracking-wider transition-[transform,box-shadow] duration-200 ease-out active:translate-x-[3px] active:translate-y-[3px] active:shadow-none";

const variants = {
  signal:
    "border-ink bg-signal text-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)]",
  paper:
    "border-ink bg-shell text-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)]",
  ink: "border-ink bg-ink text-shell shadow-[4px_4px_0_0_var(--color-signal)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-signal)]",
  light:
    "border-shell bg-transparent text-shell shadow-[4px_4px_0_0_var(--color-signal)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-signal)]",
};

export function ButtonLink({
  href,
  children,
  variant = "signal",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const icon = (
    <ArrowUpRight
      weight="bold"
      className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <span>{children}</span>
      {icon}
    </Link>
  );
}
