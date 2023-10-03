import * as React from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib"

const InputVariants = cva(
  "flex flex-row gap-4 items-center justify-center px-2 py-1 rounded-md text-sm font-medium border",
  {
    variants: {
      variant: {
        default: "bg-inherit",
        active: "bg-primary-foreground border-primary",
        ghost: "border-black"
      },
    },
    defaultVariants: {
      variant: "default",
    }  
  }
)

export interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
      preIcon?: any,
      sufIcon?: any,
      type?: string
}

const Input = ({ className, variant, size, children, preIcon, sufIcon, type, ...props }: Props) => {
  return (
    <div
        className={cn(InputVariants({ variant, className }))}
      >
        {preIcon}
        {
          type === "phone"
            // @ts-ignore
            ? <PhoneInput className="flex-1 outline-none border-none placeholder:text-xs font-light [&>input]:outline-none"  {...props} />
            : <input className="flex-1 outline-none border-none placeholder:text-xs font-light" {...props} />
        }
        {children}
        {sufIcon}
      </div>
  )
}

export default Input