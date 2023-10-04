import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { rootHandler } from "../../store/createAccountSlice"
import { Button, SelectCountry } from ".."
import { locationShape, locationType } from "../../yup"
import { useFormik } from "formik"
import Submit from "../Buttons/Submit";

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Step_3 = ({  }: Props) => {

  const createAccount = useSelector((store: RootState) => store.root)
  const dispatch = useDispatch()

  const onSubmit = (values: locationType) => {
    console.log("values", values)
    dispatch(rootHandler({
      activeStep: createAccount.activeStep > 2 ? 0 : createAccount.activeStep + 1,
      firstname: values.language,
      lastname: values.country
    }))
  };

  const formik = useFormik({
    initialValues: {
      language: '',
      country: '',
    },
    validationSchema: locationShape,
    onSubmit
  });

  return <div className="flex flex-col gap-8">
    <form
      onSubmit={formik.handleSubmit}
      className="w-full"
    >
      
      <p className="text-lg my-4">Where are you from?</p>
      <SelectCountry
        name="country"
        value={formik.values.country}
        onChange={(ev) => formik.setValues({ language: formik.values.language, country: ev as any })}
      />

      <div className="my-8">
        <p className="text-lg">What's your prefered language of learning?</p>
        <ul className="flex flex-row justify-between mt-8 w-full">
          {
            ["English", "Francais", "العربية"].map((item, idx) => (
              <li key={idx}>
                <Button
                  variant={formik.values.language === item ? "success" : "secondary"}
                  size="xl"
                  onClick={() => formik.setValues({ country: formik.values.country, language: item })}
                  type="button"
                >
                  {item}
                </Button>
              </li>
            ))
          }
        </ul>
      </div>

      <div>
        <Submit type="submit" />
      </div>

    </form>
  </div>
}

export default Step_3