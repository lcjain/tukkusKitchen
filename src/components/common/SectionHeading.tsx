import { memo } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

function SectionHeadingComponent({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.35em] text-secondary">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
    </div>
  );
}

export const SectionHeading = memo(SectionHeadingComponent);
