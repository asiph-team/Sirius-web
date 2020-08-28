import * as Yup from 'yup'

export const trainingSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre de la capacitación debe ser mayor a 3 caractéres')
    .max(50, 'El nombre de la capacitación debe ser mayor a 50 caractéres')
    .required('El nombre de la capacitación es requerida'),
  date: Yup.date()
    .required('La fecha de compromiso es requerida'),
  frequency: Yup.string()
    .min(3, 'La frecuencia debe ser mayor a 3 caractéres')
    .max(50, 'La frecuencia debe ser mayor a 50 caractéres')
    .required('La frecuencia es requerida'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(80, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
})
