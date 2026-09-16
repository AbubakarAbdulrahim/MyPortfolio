import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-surface-border py-10 px-4 sm:px-6 max-w-6xl mx-auto text-xs font-mono text-muted">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.name} • Kano, Nigeria (WAT / UTC+1)
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
