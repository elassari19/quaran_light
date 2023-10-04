import * as React from "react"
import { HeadFC } from "gatsby"
import { Layout, Stepper } from "../components"

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Head: HeadFC = () => <title>quaran light creat account</title>

const index = ({  }: Props) => {
  return <Layout className="flex-col items-center [&>*]:mt-6 my-4 w-[28rem] mx-auto py-12 text-center">
    <h1 className="text-2xl font-extrabold">CREATE NEW ACCOUNT</h1>
    <div>
      <p className="whitespace-break-spaces">Start your journey for memorizing Quran with AI</p>
      <p>Aqsa Maqraa</p>
    </div>

    <Stepper className="p-4 px-4" />

    
  </Layout>
}

export default index

