import { siteConfig } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--color-muted)] sm:flex-row">
        <p>
          © {year}{" "}
          <span className="text-[var(--color-foreground)]">{siteConfig.name}</span>
          . All rights reserved.
        </p>
        <p className="text-xs tracking-widest uppercase">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
