import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  // The Math Fix: Translating by 1 (4px) perfectly erases the base 4px shadow on click.
  "group/button inline-flex shrink-0 items-center justify-center rounded-2xl border border-border text-sm font-bold tracking-wider whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-x-1 active:translate-y-1 active:shadow-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          // Synchronized with semantic tokens: shadow-xl and var(--primary)
          'bg-brand-dark text-white shadow-xl hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-2xl',
        outline:
          'bg-white text-foreground shadow-xl hover:bg-brand-dark hover:text-white',
        secondary:
          'border-transparent bg-gray-200 text-foreground shadow-xl hover:border-border hover:bg-gray-300',
        ghost: 'border-transparent hover:bg-brand-dark hover:text-white',
        destructive:
          // Synchronized with semantic tokens: var(--brutalist-shadow) respects dark mode flips
          'bg-primary text-white shadow-xl hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-2xl',
        link: 'border-transparent text-foreground underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
        sm: "h-8 px-3 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-12 px-8 text-base has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ButtonPrimitive> & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
