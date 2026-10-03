import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-surface-border py-12 px-4 sm:px-6 max-w-6xl mx-auto text-xs text-muted">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-foreground font-medium">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}
          </p>
          {/* <p className="text-muted text-[11px]">
            Based in Kano, Nigeria (WAT / UTC+1) • Built with Next.js & TypeScript
          </p> */}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
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
          <a
            href="/resume.pdf"
            download="Abubakar_Abdulrahim_Resume.pdf"
            className="hover:text-foreground transition-colors"
          >
            Resume (PDF)
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
