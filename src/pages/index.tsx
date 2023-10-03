import * as React from "react"
import { HeadFC } from "gatsby"
import { Layout, Stepper } from "../components"

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Head: HeadFC = () => <title>quaran light creat account</title>

const index = ({  }: Props) => {
  return <Layout className="flex-col items-center [&>*]:mt-4 my-8 max-w-[18rem] mx-auto text-center">
    <h1 className="text-xl font-extrabold">CREATE NEW ACCOUNT</h1>
    <div>
      <p className="whitespace-break-spaces">Start your journey for memorizing Quran with AI</p>
      <p>Aqsa Maqraa</p>
    </div>

    <Stepper className="py-4 px-4" />

    
  </Layout>
}

export default index

