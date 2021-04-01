import * as Yup from 'yup'

const today = new Date()
today.setHours(0, 0, 0, 0)

export const validationSchema = Yup.object().shape({
  date_start: Yup.date()
    .required('La fecha inicial es requerida'),
  date_end: Yup.date()
    .when('start_date',
      // eslint-disable-next-line camelcase
      (date_start, yup) => date_start && yup.min(date_start, 'Fecha de termino no puede ser menor a la fecha de inicio'))
    .required('La fecha final es requerida'),
})
