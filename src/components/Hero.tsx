"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { siteConfig } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div className="grid-bg absolute inset-0" />
      <div className="glow-orb -top-32 left-1/4 h-[500px] w-[500px] bg-sky-500/20" />
      <div className="glow-orb top-1/3 -right-32 h-[400px] w-[400px] bg-amber-500/10" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="section-label mb-6">Product · AI · Strategy</p>

          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-gradient">{siteConfig.name}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--color-muted)] sm:text-2xl">
            {siteConfig.title}
            <span className="mx-2 text-[var(--color-border)]">|</span>
            <span className="text-[var(--color-foreground)]/80">
              {siteConfig.subtitle}
            </span>
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[var(--color-muted)]">
            <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
            {siteConfig.location}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)]"
          >
            {[
              { value: "12+", label: "Years Experience" },
              { value: "AI", label: "Platform Focus" },
              { value: "SAFe", label: "Certified PO/PM" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--color-surface)] px-4 py-6 text-center"
              >
                <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-foreground)] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs tracking-wide text-[var(--color-muted)] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#journey"
              className="group relative overflow-hidden rounded-full bg-[var(--color-foreground)] px-8 py-3.5 text-sm font-semibold text-[var(--color-background)] transition-transform hover:scale-105"
            >
              <span className="relative z-10">Explore my journey</span>
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-medium text-[var(--color-foreground)] transition-all hover:border-[var(--color-border-accent)] hover:bg-[var(--color-accent-glow)]"
            >
              View portfolio
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-24"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-float" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
