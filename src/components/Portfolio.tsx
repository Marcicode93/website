"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { portfolioItems } from "@/data/profile";
import { fadeUp } from "@/lib/animations";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <motion.p variants={fadeUp} custom={0} className="section-label mb-4">
              Portfolio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl"
            >
              Selected work
              <br />
              <span className="text-gradient-accent">coming soon</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="max-w-sm text-sm text-[var(--color-muted)]"
          >
            Case studies and deep dives into product builds will be published
            here. Connect on LinkedIn to stay updated.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              variants={fadeUp}
              className="group glass glass-hover relative overflow-hidden rounded-2xl p-8"
            >
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[var(--color-accent-glow)] opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]">
                    <Lock className="h-3 w-3" />
                    Coming Soon
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent)]" />
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[var(--color-accent)]/80"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
