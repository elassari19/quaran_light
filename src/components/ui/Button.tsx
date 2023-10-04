import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-normal",
  {
    variants: {
      variant: {
        default: "bg-inherit",
        active: "bg-primary-foreground border border-success/70",
        secondary: "bg-primary-foreground",
        destructive: "bg-destructive-foreground border-destructive",
        success: "bg-success border-success text-white",
        danger: "bg-danger-foreground border-danger",
        outline: "border-primary"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-6",
        xl: "h-11 rounded-md px-8 py-6 w-full",
        full: "h-11 rounded-md px-8 py-8 w-full",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    }  
  }
)

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean,
}

const Button = ({ className, variant, size, isLoading, children, ...props }: Props) => {
  return (
    <button
        className={cn(buttonVariants({ variant, size, className }), "rounded-none")}
        disabled={isLoading}
        {...props}
      >
        {children}
        {/* {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null} */}
      </button>
  )
}

export default Button