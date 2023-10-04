import * as React from "react"
import Input from "../ui/Input"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { rootHandler } from "../../store/createAccountSlice"
import { nameShape, type nameType } from "../../yup"
import { useFormik } from 'formik';
import Submit from "../Buttons/Submit"

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Step_0 = ({  }: Props) => {

  const createAccount = useSelector((store: RootState) => store.root)
  const dispatch = useDispatch()

  const onSubmit = (values: nameType) => {
    console.log("values", values)
    dispatch(rootHandler({
      activeStep: createAccount.activeStep >= 3 ? 0 : createAccount.activeStep + 1,
      firstname: values.firstname,
      lastname: values.lastname
    }))
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
    },
    validationSchema: nameShape,
    onSubmit
  });

  return <div className="flex flex-col gap-4">
    <p className="text-lg">Wath's your name?</p>

    <form
      onSubmit={formik.handleSubmit}
      className="[&>*]:my-6"
    >
          <Input
            name="firstname"
            errors={formik.errors.firstname}
            touched={formik.touched.firstname}
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
            className="hover:border-black"
          />
          <Input
            name="lastname"
            errors={formik.errors.lastname}
            touched={formik.touched.lastname}
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
            className="hover:border-black"
          />
          
          <div>
            <Submit/>
          </div>
    </form>

  </div>
}

export default Step_0