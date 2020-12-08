import * as Yup from 'yup'

export const programsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre de la vigilancia médica debe ser mayor a 3 caractéres')
    .max(100, 'El nombre de la vigilancia médica debe ser menor a 100 caractéres')
    .required('El nombre de la vigilancia médica es requerido'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(80, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
})

export const programsSchemaEdit = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre de la vigilancia médica debe ser mayor a 3 caractéres')
    .max(100, 'El nombre de la vigilancia médica debe ser menor a 100 caractéres')
    .required('El nombre de la vigilancia médica es requerido'),
  workstations_id: Yup.string()
    .ensure()
    .required('El puesto de trabajo es requerido'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(80, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
})
