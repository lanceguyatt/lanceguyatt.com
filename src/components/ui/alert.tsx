import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~lib/utils'

const alertVariants = cva('relative w-full border-4 border-current p-8', {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive:
        'text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

// interface IAlert {
//   className?: string
//   variant?: string
//   animate?: boolean
// }

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, animate = false, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      animate && 'animate-pulse',
      alertVariants({ variant }),
      className
    )}
    {...props}
  />
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn(className)} {...props} />
))

AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
