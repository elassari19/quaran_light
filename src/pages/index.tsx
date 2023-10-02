import * as React from "react"
import { HeadFC } from "gatsby"

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Head: HeadFC = () => <title>quaran light</title>

const index = ({  }: Props) => {
  return <div>
    quaran light 
  </div>
}

export default index

