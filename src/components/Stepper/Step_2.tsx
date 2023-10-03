import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { rootHandler } from "../../store/createAccountSlice"
import Button from "../ui/Button";
import Input from "../ui/Input";
import { LuCalendarDays } from "react-icons/lu"
import {DatePicker} from '@gsebdev/react-simple-datepicker';

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Step_2 = ({  }: Props) => {

  const createAccount = useSelector((store: RootState) => store.root)
  const dispatch = useDispatch()

  const handleChange = (ev: any) => {
    console.log(typeof ev)
    dispatch(rootHandler({ birthdate: ev }))
  }

return <div className="flex flex-col gap-4 [& > .SG-datepicker__input-container]:w-[100%]">
    <p className="text-lg">Wath's your brithdate?</p>

    <DatePicker
      placeholder="birthdate"
      id='birthdate'
      name="birthdate"
      value={createAccount.birthdate}
      onChange={(ev) => handleChange(ev.target.value)}
    />

    <p className="text-lg mt-4">Wath's your gender?</p>

    <div className="flex gap-2 justify-center mb-8">
      <Button variant={createAccount.gender === "male" ? "success" : "secondary"}
        onClick={() => dispatch(rootHandler({ gender: "male" }))}
      >Male</Button>
      <Button variant={createAccount.gender === "female" ? "success" : "secondary"}
        onClick={() => dispatch(rootHandler({ gender: "female" }))}
      >Female</Button>
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

export default Step_2