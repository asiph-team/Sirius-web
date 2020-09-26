import * as Yup from 'yup'

const today = new Date()
today.setHours(0, 0, 0, 0)

export const trainingSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre de la capacitación debe ser mayor a 3 caractéres')
    .max(50, 'El nombre de la capacitación debe ser mayor a 50 caractéres')
    .required('El nombre de la capacitación es requerida'),
  start_date: Yup.date()
    .min(today, 'La fecha de compromiso no debe ser menor a la fecha actual')
    .required('La fecha de compromiso es requerida'),
  end_date: Yup.date().default(null)
    .when('start_date',
      (start_date, yup) => start_date && yup.min(start_date, 'Fecha de termino no puede ser menor a la fecha de inicio'),
    )
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
