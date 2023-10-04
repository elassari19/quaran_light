import * as React from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib"
import { Field, FieldConfig, FormikErrors, FormikTouched } from "formik"

const InputVariants = cva(
  "flex flex-row gap-4 items-center justify-center p-3 py-2 rounded-md text-md font-medium border",
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
      type?: string,
      errors: any,
      touched: any,
      onBlur: any
}

const Input = ({ className, variant, size, children, preIcon, sufIcon, type, errors, onBlur, touched, ...props }: Props) => {
  return (
    <div>
      <div
        className={cn(InputVariants({ variant, className }))}
      >
        {preIcon}
        {
          type === "phone"
            // @ts-ignore
            ? <PhoneInput name={props.name} className="flex-1 outline-none border-none placeholder:text-md font-light [&>input]:outline-none"  {...props} />
            : <input name={props.name} className="flex-1 outline-none border-none placeholder:text-md font-light" {...props} />
        }
        {children}
        {sufIcon}

      </div>
      {
        errors && touched && onBlur
          //@ts-ignore 
          ? <p className='font-normal text-sm text-red-500'>{errors}</p>
          : null
      }
    </div>
  )
}

export default Input