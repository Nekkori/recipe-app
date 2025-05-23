import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'bordered';
}

export const Card = ({
  className,
  children,
  variant = 'default',
  ...props
}: CardProps & React.HTMLAttributes<HTMLDivElement>) => {
  const variantStyles = {
    default: 'bg-white shadow-soft-md hover:shadow-soft-lg',
    glass: 'bg-white/80 backdrop-blur-md shadow-soft-md hover:shadow-soft-lg',
    bordered: 'border border-neutral-200 hover:border-neutral-300 bg-white',
  };

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden transition-all duration-300',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Header = function CardHeader({
  className,
  children,
  ...props
}: { 
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-4', className)} {...props}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-4 pt-0', className)} {...props}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-4 bg-neutral-50 border-t border-neutral-100', className)}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Image = function CardImage({
  src,
  alt,
  className,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className={cn('object-cover transition-transform duration-500 hover:scale-105', className)}
        {...props}
      />
    </div>
  );
}; 