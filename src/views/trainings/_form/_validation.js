import * as Yup from 'yup'

const today = new Date()
today.setHours(0, 0, 0, 0)

export const trainingSchemaAdd = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre de la capacitación debe ser mayor a 3 caractéres')
    .max(100, 'El nombre de la capacitación debe ser mayor a 100 caractéres')
    .required('El nombre de la capacitación es requerida'),
  start_date: Yup.date()
    .min(today, 'La fecha de compromiso no debe ser menor a la fecha actual')
    .required('La fecha de compromiso es requerida'),
  end_date: Yup.date()
    .when('start_date',
      // eslint-disable-next-line camelcase
      (start_date, yup) => start_date && yup.min(start_date, 'Fecha de termino no puede ser menor a la fecha de inicio'))
    .required('La fecha de compromiso es requerida'),
  frequency: Yup.string()
    .min(3, 'La frecuencia debe ser mayor a 3 caractéres')
    .max(50, 'La frecuencia debe ser mayor a 50 caractéres')
    .required('La frecuencia es requerida'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(300, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
})

export const trainingSchemaEdit = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre de la capacitación debe ser mayor a 3 caractéres')
    .max(100, 'El nombre de la capacitación debe ser mayor a 100 caractéres')
    .required('El nombre de la capacitación es requerida'),
  start_date: Yup.date()
    .required('La fecha de compromiso es requerida'),
  // employees_id: Yup.string()
  //   .required('Es necesario seleccionar a un empleado para completar la acción.')
  //   .nullable(),
  end_date: Yup.date()
    .when('start_date',
      // eslint-disable-next-line camelcase
      (start_date, yup) => start_date && yup.min(start_date, 'Fecha de termino no puede ser menor a la fecha de inicio'))
    .required('La fecha de compromiso es requerida'),
  frequency: Yup.string()
    .min(3, 'La frecuencia debe ser mayor a 3 caractéres')
    .max(50, 'La frecuencia debe ser mayor a 50 caractéres')
    .required('La frecuencia es requerida'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(300, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
})
