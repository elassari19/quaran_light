import * as React from "react"
import { cn } from "../../lib"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Modal = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn("absolute top-0 left-0 w-full h-full z-10 bg-gray-500/70 flex flex-row items-center justify-center", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Modal