// import * as Yup from 'yup';
// import { Form, Formik } from 'formik'
// import React from 'react'
// import Submit from '../Buttons/Submit'
// import { useDispatch, useSelector } from "react-redux"
// import { RootState } from "../../store"
// import { rootHandler } from "../../store/createAccountSlice"

// interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
//   initialValues: any,
//   validationSchema: any,
// }

// const index = (Component: any) => {

//   const createAccount = useSelector((store: RootState) => store.root)
//   const dispatch = useDispatch()

//   // global submit
//   return ({ initialValues, validationSchema }: Props) => {
//     // extract type from schema using Yup.inferType method
//     type validType = Yup.InferType<typeof validationSchema>

//     const onSubmit = (values: validType) => {
//       console.log("values", values)
//       dispatch(rootHandler({
//         activeStep: createAccount.activeStep >= 3 ? 0 : createAccount.activeStep + 1
//       }))
//     };

//     // @ts-ignore
//     return ( <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//       className="[&>*]:my-4"
//     >
//       {
//         // @ts-ignore
//         ({ errors, touched, isSubmitting }) => (
//           <Form className='[&>div]:my-4 w-10/12 m-auto'>
//             {/* @ts-ignore */}
//             <Component errors={errors} touched={touched} />
//             <Submit isSubmitting={isSubmitting} />
//           </Form>
//         )
//       }


//     </Formik>
//   )}
// }

// export default index