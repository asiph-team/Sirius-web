import * as Yup from 'yup'

export const jobSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre de la actividad debe ser mayor a 3 caractéres')
    .max(50, 'El nombre de la actividad debe ser menor a 50 caractéres')
    .required('El nombre de la actividad es requerido'),
  job: Yup.string()
    .ensure()
    .required('El puesto de trabajo es requerido'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(80, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
})
