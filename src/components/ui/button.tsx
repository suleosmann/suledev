import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#3e32e4] text-2xl text-white hover:bg-white hover:text-[#3e32e4] hover:border-2 border-[#3e32e4]",
        destructive:
          "bg-[#3e32e4] text-2xl text-white hover:bg-white hover:text-[#3e32e4] hover:border-2 border-[#3e32e4]",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:"bg-[#19192a] text-2xl text-white hover:bg-white hover:text-[#19192a] hover:border-2 border-[#19192a  ]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "w-64 h-12",
        sm: "h-9 rounded-md px-3",
        lg: "w-96 h-12",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
