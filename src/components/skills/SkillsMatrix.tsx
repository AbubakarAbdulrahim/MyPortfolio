import { SectionHeading } from "@/components/ui/SectionHeading";

const TECH_COLUMNS = [
  {
    title: "Mobile",
    items: [
      "Flutter & Dart",
      "Android SDK & iOS",
      "Provider & Riverpod",
      "BLoC State Machines",
      "Clean Architecture",
      "Offline SQLite Sync",
    ],
  },
  {
    title: "Web",
    items: [
      "React.js & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "RESTful API Integration",
      "WCAG AA Accessibility",
      "Component Systems",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python & Django",
      "Django REST Framework",
      "Authentication Pipelines",
      "Token Rotation & Interceptors",
      "WebSockets & SSE",
      "API Security & Rate Limits",
    ],
  },
  {
    title: "Data & Cloud",
    items: [
      "PostgreSQL",
      "Cloud Firestore",
      "Firebase (Auth, FCM, Functions)",
      "Supabase",
      "Git, GitHub & CI/CD",
      "Docker Basics",
    ],
  },
];

export function SkillsMatrix() {
  return (
    <section id="stack" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="03"
        tag="Engineering Matrix"
        title="Technical Stack"
        subtitle="Core competencies and production tooling applied across client and commercial systems."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TECH_COLUMNS.map((col) => (
          <div key={col.title} className="card p-6">
            <h3 className="text-sm font-semibold text-foreground tracking-tight pb-3 mb-4 border-b border-surface-border">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item} className="text-xs sm:text-sm text-muted font-normal">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
