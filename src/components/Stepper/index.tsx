import * as React from "react"
import { cn } from "../../lib";
import { VscCircleLargeFilled } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Step_0 from "./Step_0";
import Step_1 from "./Step_1";
import Step_2 from "./Step_2";
import Step_3 from "./Step_3";
import Button from "../ui/Button";
import { rootHandler } from "../../store/createAccountSlice";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode,
}

const index = ({ className }: Props) => {

  const createAccount = useSelector((store: RootState) => store.root)
  const dispatch = useDispatch()

  return (
    <div className="flex-1 flex flex-col h-full">
      <ul
        className={cn("flex flex-row justify-between items-center mt-6", className)}
      >
        {
          Array(4).fill("").map((item, idx) => (
            <li key={idx}>
              <VscCircleLargeFilled
                size={26}
                className={`${
                  createAccount.activeStep === idx
                    ? "text-destractive"
                    : createAccount.activeStep > idx
                      ? "text-danger"
                      : "text-secondary"
                }`}
              />
            </li>
          ))
        }
      </ul>

      <div className="mt-4">
        {[ <Step_0 />, <Step_1 />, <Step_2 />, <Step_3 /> ][createAccount.activeStep]}
      </div>

    </div>
  )
}

export default index