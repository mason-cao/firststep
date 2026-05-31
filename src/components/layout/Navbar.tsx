"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { navItems } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:pt-6">
        <nav className="mx-auto flex min-w-0 w-full max-w-6xl items-center justify-between rounded-full border border-ink/10 bg-paper/86 px-3 py-2 shadow-[0_18px_70px_color-mix(in_oklch,var(--color-ink)_10%,transparent)] backdrop-blur-xl md:px-4">
          <Link
            href="/"
            className="focus-ring group flex min-w-0 items-center gap-3 rounded-full pr-3 text-sm font-extrabold"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-shell transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[-8deg]">
              FS
            </span>
            <span className="truncate">First Step Team</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.slice(1).map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`focus-ring rounded-full px-3.5 py-2 text-sm font-bold transition-colors duration-150 ${
                    active
                      ? "bg-harvest text-ink shadow-[inset_0_0_0_1px_color-mix(in_oklch,var(--color-ink)_12%,transparent)]"
                      : "text-ink/68 hover:bg-ink/7 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            className="focus-ring grid size-11 shrink-0 place-items-center rounded-full bg-ink text-shell transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" weight="bold" /> : <List className="size-5" weight="bold" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-ink/96 px-5 pb-8 pt-28 text-shell lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, clipPath: "circle(0% at 88% 6%)" }}
            animate={{ opacity: 1, clipPath: "circle(140% at 88% 6%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 88% 6%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="page-shell grid gap-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.045, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block border-b border-shell/12 py-4 font-display text-4xl font-extrabold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
