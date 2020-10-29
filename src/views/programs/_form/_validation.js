import * as Yup from 'yup'

export const programsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre del programa debe ser mayor a 3 caractéres')
    .max(100, 'El nombre del programa debe ser menor a 100 caractéres')
    .required('El nombre del programa es requerido'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(80, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
})

export const programsSchemaEdit = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre del programa debe ser mayor a 3 caractéres')
    .max(100, 'El nombre del programa debe ser menor a 100 caractéres')
    .required('El nombre del programa es requerido'),
  workstations_id: Yup.string()
    .ensure()
    .required('El puesto de trabajo es requerido'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(80, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
})
