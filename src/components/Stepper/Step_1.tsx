import * as React from "react"
import Input from "../ui/Input"
import { HiOutlineMail } from "react-icons/hi"
import {LiaPhoneVolumeSolid } from "react-icons/lia"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { rootHandler } from "../../store/createAccountSlice"
import Button from "../ui/Button"

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Step_1 = ({  }: Props) => {

  const createAccount = useSelector((store: RootState) => store.root)
  const dispatch = useDispatch()

  const handlePhone = (ev: any) => {
    dispatch(rootHandler({ phone: ev }))
  }

  return <div className="flex flex-col gap-4">
    <p className="text-lg">Wath's your contact info?</p>

    <div className="[&>*]:my-4">
      <Input
        sufIcon={<HiOutlineMail size={20} />}
        placeholder="name@email.com"
        type="email"
        value={createAccount.email}
        onChange={(ev) => dispatch(rootHandler({ email: ev.target.value }))}
        className="hover:border-black"
      />

      <Input
        type="phone"
        placeholder="Enter phone number"
        value={createAccount.phone}
        onChange={handlePhone}
        className="hover:border-black"
        sufIcon={<LiaPhoneVolumeSolid size={20} />}
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

export default Step_1