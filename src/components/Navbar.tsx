"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "glass border-b border-[var(--color-border)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a
            href="#"
            className="font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--color-foreground)]"
          >
            MS<span className="text-[var(--color-accent)]">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-[var(--color-border-accent)] bg-[var(--color-accent-glow)] px-5 py-2 text-sm font-medium text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] md:inline-flex"
            >
              Connect
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--color-background)]/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-foreground)]"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full border border-[var(--color-border-accent)] px-8 py-3 text-[var(--color-accent)]"
              >
                Connect on LinkedIn
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
