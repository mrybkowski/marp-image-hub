import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const H1Variants = cva(
  'font-anekLatin text-balance text-slate-800 dark:text-slate-100',
  {
    variants: {
      textColor: {
        default: ''
      },
      customStyle: {
        default: 'lg:text-8xl md:text-7xl text-5xl',
        subpage:
          'text-balance lg:text-5xl text-4xl font-normal text-slate-800 dark:text-white'
      }
    },
    defaultVariants: {
      textColor: 'default',
      customStyle: 'default'
    }
  }
);

export interface H1Props
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof H1Variants> {
  asChild?: boolean;
}

const H1 = React.forwardRef<HTMLDivElement, H1Props>(
  ({ className, textColor, customStyle, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'h1';

    return (
      <Comp
        className={cn(H1Variants({ textColor, customStyle, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

H1.displayName = 'H1';

export { H1, H1Variants };
