"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { contactEmail, instagramUrl, navItems } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper">
        <nav className="page-shell flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex min-w-0 items-center gap-2.5"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-md border-2 border-ink bg-signal font-display text-base font-extrabold text-ink shadow-[2px_2px_0_0_var(--color-ink)] transition-transform duration-300 ease-out group-hover:-rotate-6">
              FS
            </span>
            <span className="truncate font-display text-lg font-extrabold md:text-xl">
              First Step Team
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.slice(1).map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-2.5 py-1.5 text-[0.78rem] font-bold uppercase tracking-wider transition-colors duration-150 xl:px-3 ${
                    active
                      ? "border-2 border-ink bg-volt text-ink shadow-[2px_2px_0_0_var(--color-ink)]"
                      : "text-ink/70 hover:bg-ink/8 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`mailto:${contactEmail}`}
              className="ml-2 rounded-md border-2 border-ink bg-ink px-3.5 py-1.5 text-[0.78rem] font-bold uppercase tracking-wider text-shell shadow-[2px_2px_0_0_var(--color-signal)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            >
              Join Us
            </a>
          </div>

          <button
            className="grid size-10 shrink-0 place-items-center rounded-md border-2 border-ink bg-shell text-ink shadow-[2px_2px_0_0_var(--color-ink)] transition-transform duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none lg:hidden"
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
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-5 pb-10 pt-24 text-shell lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="page-shell flex w-full flex-1 flex-col">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.045, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b-2 border-shell/15 py-3.5"
                  >
                    <span className="mono-tag text-signal">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-display text-4xl font-extrabold transition-colors group-hover:text-volt">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-10">
                <a href={`mailto:${contactEmail}`} className="mono-tag text-shell/70 hover:text-shell">
                  {contactEmail}
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-tag text-shell/70 hover:text-shell"
                >
                  @first.step.team
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
