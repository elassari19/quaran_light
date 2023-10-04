import * as Yup from 'yup';

export const nameShape = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required')
})

export const contactShape = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  phone: Yup.string().required('Phone is required').min(8).max(14)
})

export const birthdateShape = Yup.object().shape({
  birthdate: Yup.string().required('Birthdate is required'),
  gender: Yup.string().required('Gender is required')
})

export const locationShape = Yup.object().shape({
  country: Yup.string().required('Country is required'),
  language: Yup.string().required('Language is required')
})

export type nameType = Yup.InferType<typeof nameShape>
export type contactType = Yup.InferType<typeof contactShape>
export type birthdateType = Yup.InferType<typeof birthdateShape>
export type locationType = Yup.InferType<typeof locationShape>
