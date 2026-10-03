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
    <div className={`mb-12 sm:mb-16 ${className}`}>
      {tag && (
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase">
            {tag}
          </span>
        </div>
      )}

      <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
