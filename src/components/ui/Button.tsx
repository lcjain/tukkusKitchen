import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { Link } from 'react-router-dom';
import type { AnchorHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[16px] px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30',
  {
    variants: {
      intent: {
        primary: 'bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg',
        secondary: 'border border-[#E5E7EB] bg-white text-text shadow-soft hover:bg-[#FFF7EB] hover:text-secondary'
      }
    },
    defaultVariants: {
      intent: 'primary'
    }
  }
);

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  href?: string;
}

const MotionLink = motion(Link);

export function Button({ className, intent, href = '#', ...props }: ButtonProps) {
  return (
    <MotionLink
      className={cn(buttonVariants({ intent, className }))}
      to={href}
      whileTap={{ scale: 0.96 }}
      {...props}
    />
  );
}
