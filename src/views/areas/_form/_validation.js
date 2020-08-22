import * as Yup from 'yup'

export const areaSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre del área debe ser mayor a 3 caractéres')
    .max(50, 'El nombre del área debe ser menor a 50 caractéres')
    .required('El nombre del área es requerido'),
  manager: Yup.string()
    .ensure()
    .required('El encargado del área es requerido'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(80, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
})
