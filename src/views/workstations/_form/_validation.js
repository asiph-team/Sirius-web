import * as Yup from 'yup'

export const workstationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre del puesto debe ser mayor a 3 caractéres')
    .max(100, 'El nombre del puesto debe ser menor a 100 caractéres')
    .required('El nombre del puesto es requerido'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(300, 'La descripción debe ser menor a 300 caractéres')
    .required('Una descripción es requerida'),
})
