import { HeadFC } from "gatsby"
import * as React from "react"
import { Layout } from "../components"

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}
export const Head: HeadFC = () => <title>quaran light about</title>

const about = ({  }: Props) => {
  return <Layout>
    about 
  </Layout>
}

export default about