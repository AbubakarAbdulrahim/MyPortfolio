interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${className}`}>
      {tag && (
        <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-accent uppercase font-medium">
          <span>{tag}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
