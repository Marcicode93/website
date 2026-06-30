"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="glow-orb right-0 bottom-0 h-[400px] w-[400px] bg-sky-500/15" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-glow)] via-transparent to-amber-500/5" />

          <div className="relative">
            <p className="section-label mb-4">Get in Touch</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
              Let&apos;s build something
              <br />
              <span className="text-gradient-accent">remarkable together</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[var(--color-muted)]">
              Open to conversations about product leadership, AI platforms,
              and digital transformation. Reach out via email or LinkedIn.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] px-8 py-3.5 text-sm font-semibold text-[var(--color-background)] transition-transform hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-accent)] px-8 py-3.5 text-sm font-medium text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent-glow)]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
