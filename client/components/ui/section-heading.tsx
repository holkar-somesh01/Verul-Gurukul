import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children?: ReactNode;
}

export const SectionHeading = ({
  title,
  subtitle,
  align = 'center',
  className,
  children,
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'mb-10',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};