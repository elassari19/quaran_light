import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { rootHandler } from "../../store/createAccountSlice"
import Button from "../ui/Button";
import { LuCalendarDays } from "react-icons/lu"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Submit from "../Buttons/Submit";
import { birthdateShape, birthdateType } from "../../yup";
import { useFormik } from "formik";

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Step_2 = ({  }: Props) => {

  const createAccount = useSelector((store: RootState) => store.root)
  const dispatch = useDispatch()


  const onSubmit = (values: birthdateType) => {
    console.log("values", values)
    dispatch(rootHandler({
      activeStep: createAccount.activeStep >= 3 ? 0 : createAccount.activeStep + 1,
      birthdate: values.birthdate,
      gender: values.gender
    }))
  };

  const formik = useFormik({
    initialValues: {
      birthdate: '',
      gender: '',
    },
    validationSchema: birthdateShape,
    onSubmit
  });

return <div className="flex flex-col gap-4">
    <p className="text-lg">Wath's your brithdate?</p>

    <form
      onSubmit={formik.handleSubmit}
      className=""
    >
      
      <div className="border border-secondary p-2 relative [& > input]:flex-1">
        <DatePicker
          dateFormat="dd/mm/yyyy"
          onChange={ev => formik.setValues({ gender: formik.values.gender, birthdate: ev as any })}
          onBlur={formik.handleBlur}
          selected={formik.values.birthdate as any}
          className="react-datapicker"
        />
        < LuCalendarDays className="-z-10 absolute right-4 top-2" />
      </div>

    <p className="text-lg mt-12">Wath's your gender?</p>

    <div className="flex gap-8 justify-center my-4">
      <Button size="xl" variant={formik.values.gender === "male" ? "success" : "secondary"}
        onClick={() => formik.setValues({ birthdate: formik.values.birthdate, gender: "male" })}
        type="button"
        >Male</Button>

      <Button size="xl" variant={formik.values.gender === "female" ? "success" : "secondary"}
        onClick={() => formik.setValues({ birthdate: formik.values.birthdate, gender: "female" })}
        type="button"
        >Female</Button>
    </div>

    <Submit type="submit" />
    </form>

  </div>
}

export default Step_2