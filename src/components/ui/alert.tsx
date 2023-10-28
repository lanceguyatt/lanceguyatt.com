import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@lib/utils'

const alert = cva('w-full border-4 p-8', {
  variants: {
    intent: {
      default: 'bg-background text-destructive border-destructive',
      destructive:
        'text-destructive border-destructive/50 dark:border-destructive'
    },
    animate: {
      true: 'animate-pulse animate-alternate'
    }
  },
  defaultVariants: {
    intent: 'default',
    animate: false,
  }
})
const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alert>
>(({ className, intent, animate, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      alert({ intent, animate }),
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
