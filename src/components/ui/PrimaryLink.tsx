import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type PrimaryLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "dark";
  external?: boolean;
};

const variants = {
  solid:
    "bg-harvest text-ink ring-1 ring-harvest hover:bg-clay hover:text-shell",
  outline:
    "bg-transparent text-ink ring-1 ring-ink/20 hover:bg-ink hover:text-shell",
  dark: "bg-ink text-shell ring-1 ring-ink hover:bg-moss",
};

export function PrimaryLink({
  href,
  children,
  variant = "solid",
  external = false,
}: PrimaryLinkProps) {
  const className = `group focus-ring inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-extrabold transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] ${variants[variant]}`;
  const icon = (
    <span className="grid size-8 place-items-center rounded-full bg-shell/35 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5">
      <ArrowUpRight weight="bold" className="size-4" />
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span>{children}</span>
      {icon}
    </Link>
  );
}
