"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { career } from "@/data/profile";
import { fadeLeft } from "@/lib/animations";

export function Journey() {
  return (
    <section id="journey" className="relative px-6 py-32">
      <div className="glow-orb -left-48 top-1/2 h-[600px] w-[600px] bg-indigo-500/10" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.p variants={fadeLeft} custom={0} className="section-label mb-4">
            Career Journey
          </motion.p>
          <motion.h2
            variants={fadeLeft}
            custom={1}
            className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl"
          >
            Twelve years of building
            <br />
            <span className="text-gradient">products that scale</span>
          </motion.h2>
          <motion.p
            variants={fadeLeft}
            custom={2}
            className="mt-4 max-w-xl text-[var(--color-muted)]"
          >
            From industrial foundations at Continental to AI-powered learning
            platforms — a trajectory shaped by strategy, technology, and
            relentless delivery.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[19px] w-px timeline-line md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {career.map((entry, i) => (
              <motion.div
                key={`${entry.company}-${entry.role}-${entry.period}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                variants={fadeLeft}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden flex-1 md:block" />

                <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-accent)] bg-[var(--color-surface)] md:left-1/2 md:-translate-x-1/2">
                  <Briefcase className="h-4 w-4 text-[var(--color-accent)]" />
                </div>

                <div
                  className={`flex-1 pl-14 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`glass glass-hover rounded-2xl p-6 md:p-8 ${
                      entry.featured
                        ? "border-[var(--color-border-accent)] shadow-[0_0_60px_var(--color-accent-glow)]"
                        : ""
                    }`}
                  >
                    {entry.featured && (
                      <span className="mb-3 inline-block rounded-full bg-[var(--color-accent-glow)] px-3 py-0.5 text-xs font-medium text-[var(--color-accent)]">
                        Current Role
                      </span>
                    )}

                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                          {entry.role}
                        </h3>
                        <p className="mt-1 text-[var(--color-accent)]">
                          {entry.company}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]">
                        {entry.period}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-sm text-[var(--color-muted)]">
                      <MapPin className="h-3.5 w-3.5" />
                      {entry.location}
                    </div>

                    <ul className="mt-5 space-y-2">
                      {entry.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-sm leading-relaxed text-[var(--color-muted)]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
