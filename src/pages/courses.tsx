import { HeadFC } from "gatsby"
import * as React from "react"
import { Layout } from "../components"

export const Head: HeadFC = () => <title>quaran light courses</title>

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const courses = ({  }: Props) => {
  return <Layout>
    courses 
  </Layout>
}

export default courses