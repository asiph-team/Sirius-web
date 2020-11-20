import * as Yup from 'yup'

export const controlsSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'El nombre de la medida de control debe ser mayor a 5 caractéres')
    .max(50, 'El nombre de la medida de control debe ser menor a 50 caractéres')
    .required('El nombre de la medida de control es requerido'),
  activity_id: Yup.string()
    .ensure()
    .required('El área es requerida'),
})
