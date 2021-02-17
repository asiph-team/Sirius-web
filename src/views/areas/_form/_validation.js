import * as Yup from 'yup'

export const areaSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre del área debe ser mayor a 3 caractéres')
    .max(100, 'El nombre del área debe ser menor a 100 caractéres')
    .required('El nombre del área es requerido'),
  user_id: Yup.string()
    .required('El encargado del área es requerido'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(300, 'La descripción debe ser menor a 300 caractéres')
    .required('Una descripción es requerida'),
})
