import * as React from "react"
import Input from "../ui/Input"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { rootHandler } from "../../store/createAccountSlice"
import Button from "../ui/Button"

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Step_0 = ({  }: Props) => {

  const createAccount = useSelector((store: RootState) => store.root)
  const dispatch = useDispatch()

  return <div className="flex flex-col gap-4">
    <p className="text-lg">Wath's your name?</p>

    <div className="[&>*]:my-4">
      <Input
        placeholder="First Name"
        value={createAccount.firstname}
        onChange={(ev) => dispatch(rootHandler({ firstname: ev.target.value }))}
        className="hover:border-black"
      />

      <Input
        placeholder="Last Name"
        value={createAccount.lastname}
        onChange={(ev) => dispatch(rootHandler({ lastname: ev.target.value }))}
        className="hover:border-black"
      />

    </div>
    <div>
      <Button variant="active" size="full"
        onClick={() => dispatch(rootHandler({
          activeStep: createAccount.activeStep >= 3 ? 0 : createAccount.activeStep + 1
        }))}
      >
        NEXT
      </Button>
    </div>
  </div>
}

export default Step_0