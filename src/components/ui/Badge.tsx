import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'green' | 'yellow' | 'red';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const variantStyles = {
      primary: 'bg-primary-50 text-primary-700 border-primary-100',
      secondary: 'bg-neutral-100 text-neutral-700 border-neutral-200',
      outline: 'bg-transparent border-neutral-200 text-neutral-700',
      green: 'bg-accent-green-light text-accent-green-dark border-accent-green-light',
      yellow: 'bg-accent-yellow-light text-accent-yellow-dark border-accent-yellow-light', 
      red: 'bg-red-50 text-red-600 border-red-100',
    };
    
    const sizeStyles = {
      sm: 'text-xs px-1.5 py-0.5 rounded-full',
      md: 'text-xs px-2 py-1 rounded-full',
      lg: 'text-sm px-3 py-1 rounded-full',
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center border font-medium',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge'; 