import * as Yup from 'yup'

export const workstationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre de la actividad debe ser mayor a 3 caractéres')
    .max(100, 'El nombre de la actividad debe ser menor a 100 caractéres')
    .required('El nombre de la actividad es requerido'),
  workstation: Yup.string()
    .ensure()
    .required('El puesto de trabajo es requerido'),
  risk: Yup.string()
    .ensure()
    .required('El riesgo es requerido'),
  risks_id: Yup.string()
    .ensure(),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(80, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
})
