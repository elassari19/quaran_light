import * as React from "react"
import { cn } from "../../lib"
import Header from "../Header"
import { useLocation } from "@reach/router"
import { Provider as ReduxProvider } from 'react-redux'
import { store } from "../../store"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const index = ({ children, className }: Props) => {
  const location = useLocation()

  console.log("location", location.pathname)

  return (
    <div
      className={cn("flex flex-col min-h-[100vh] p-4 sm:px-24 md:px-32 lg:px-[15%] text-md")}
    >
      <ReduxProvider store={store}>
        <Header location={location.pathname} />
        <div className={cn("", className)}>
          {children}
        </div>
      </ReduxProvider>
    </div>
  )
}

export default index