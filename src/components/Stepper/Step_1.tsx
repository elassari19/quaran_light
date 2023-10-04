import * as React from "react"
import Input from "../ui/Input"
import { HiOutlineMail } from "react-icons/hi"
import {LiaPhoneVolumeSolid } from "react-icons/lia"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { rootHandler } from "../../store/createAccountSlice"
import Button from "../ui/Button"
import Submit from "../Buttons/Submit"
import { useFormik } from "formik"
import { contactShape, contactType } from "../../yup"

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Step_1 = ({  }: Props) => {

  const createAccount = useSelector((store: RootState) => store.root)
  const dispatch = useDispatch()

  const onSubmit = (values: contactType) => {
    console.log("values", values)
    dispatch(rootHandler({
      activeStep: createAccount.activeStep >= 3 ? 0 : createAccount.activeStep + 1,
      email: values.email,
      phone: values.phone
    }))
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
    },
    validationSchema: contactShape,
    onSubmit
  });

  return <div className="flex flex-col gap-4">
    <p className="text-lg">Wath's your contact info?</p>

    <form
      onSubmit={formik.handleSubmit}
      className="[&>*]:my-4"
    >
      <Input
        sufIcon={<HiOutlineMail size={20} />}
        placeholder="name@email.com"
        name="email"
        errors={formik.errors.email}
        touched={formik.touched.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="hover:border-black"
      />

      <Input
        name="phone"
        type="phone"
        placeholder="Enter phone number"
        errors={formik.errors.phone}
        touched={formik.touched.phone}
        onChange={ev => formik.setValues({ email: formik.values.email, phone: ev as any })}
        onBlur={formik.handleBlur}
        value={formik.values.phone}        className="hover:border-black"
        sufIcon={<LiaPhoneVolumeSolid size={20} />}
      />

      <div>
        <Submit />
      </div>
    </form>

  </div>
}

export default Step_1