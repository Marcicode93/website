"use client";

import { motion } from "framer-motion";
import { Award, Brain, Users } from "lucide-react";
import { certifications, education, siteConfig, skills } from "@/data/profile";
import { fadeUp } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.p variants={fadeUp} custom={0} className="section-label mb-4">
            About Me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl"
          >
            Where enterprise rigor
            <br />
            <span className="text-gradient-accent">meets product intuition</span>
          </motion.h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg leading-relaxed text-[var(--color-muted)]"
            >
              {siteConfig.summary}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-sm text-[var(--color-foreground)]/80"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {[
              {
                icon: Brain,
                title: "AI & Platforms",
                desc: "Building AI-powered services and API platforms at scale.",
              },
              {
                icon: Users,
                title: "Stakeholder Leadership",
                desc: "Aligning senior engineering teams, management, and customers.",
              },
              {
                icon: Award,
                title: "Certified & Proven",
                desc: "SAFe PO/PM, UX fundamentals, and modern product management.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i + 4}
                className="glass glass-hover rounded-2xl p-6"
              >
                <item.icon className="mb-3 h-5 w-5 text-[var(--color-accent)]" />
                <h3 className="font-medium text-[var(--color-foreground)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <motion.h3
              variants={fadeUp}
              custom={0}
              className="mb-6 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase"
            >
              Education
            </motion.h3>
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                variants={fadeUp}
                custom={i + 1}
                className={`${i > 0 ? "mt-6 border-t border-[var(--color-border)] pt-6" : ""}`}
              >
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-[var(--color-muted)]">
                  {edu.institution} · {edu.period}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <motion.h3
              variants={fadeUp}
              custom={0}
              className="mb-6 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase"
            >
              Certifications
            </motion.h3>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                variants={fadeUp}
                custom={i + 1}
                className={`${i > 0 ? "mt-4 border-t border-[var(--color-border)] pt-4" : ""}`}
              >
                <p className="text-sm text-[var(--color-foreground)]/90">{cert}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
