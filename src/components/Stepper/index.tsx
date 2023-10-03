import * as React from "react"
import { cn } from "../../lib";
import { VscCircleLargeFilled } from "react-icons/vsc"
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Step_0 from "./Step_0";
import Step_1 from "./Step_1";
import Step_2 from "./Step_2";
import Step_3 from "./Step_3";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode,
}

const index = ({ children, className }: Props) => {
  const activeStep = useSelector((store: RootState) => store.root.activeStep)
  return (
    <div>
      <ul
        className={cn("flex flex-row justify-between items-center", className)}
      >
        {
          Array(4).fill("").map((item, idx) => (
            <li key={idx}>
              <VscCircleLargeFilled
                size={24}
                className={`${
                  activeStep === idx
                    ? "text-destractive"
                    : activeStep > idx
                      ? "text-danger"
                      : "text-secondary"
                }`}
              />
            </li>
          ))
        }
      </ul>

      <div className="mt-8">
        {[ <Step_0 />, <Step_1 />, <Step_2 />, <Step_3 /> ][activeStep]}
      </div>

      {children}
    </div>
  )
}

export default index