import * as React from "react"

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Step_3 = ({  }: Props) => {
  return <div className="flex flex-col gap-8">
    <p className="text-lg">Where are you from?</p>
  </div>
}

export default Step_3