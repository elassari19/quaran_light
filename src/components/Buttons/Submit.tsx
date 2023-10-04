import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import Button from "../ui/Button"

interface Props  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  isSubmitting?: any
}

const Submit = ({  }: Props) => {

  const createAccount = useSelector((store: RootState) => store.root)

  return (
    <div className="mt-16">
      <Button variant="active" size="full"
        className={createAccount.activeStep < 3 ? "text-destractive font-extrabold" : "bg-destractive text-white"}
      >
        { createAccount.activeStep < 3 ? "NEXT" : "FINiSH" }
      </Button>
    </div>
  )
}

export default Submit
