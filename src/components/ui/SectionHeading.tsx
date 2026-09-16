interface SectionHeadingProps {
  index?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  index,
  tag,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${className}`}>
      <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-muted uppercase">
        {index && <span>{index}</span>}
        {index && tag && <span>/</span>}
        {tag && <span>{tag}</span>}
      </div>

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
