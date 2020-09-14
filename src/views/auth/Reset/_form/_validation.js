import * as Yup from 'yup'

export const passwordRecoverySchema = Yup.object().shape({
  email: Yup.string()
    .min(10, 'La dirección debe ser mayor a 10 caractéres')
    .max(50, 'La dirección debe ser menor a 50 caractéres')
    .required('La dirección es requerida'),
})
