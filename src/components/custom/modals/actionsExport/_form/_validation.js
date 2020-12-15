import * as Yup from 'yup'

export const actionSchema = Yup.object().shape({
  date_start: Yup.date()
    .required('La fecha inicial es requerida'),
  date_end: Yup.date()
    // eslint-disable-next-line camelcase
    .when('date_start', (date_initial, yup) => date_initial && yup.min(date_initial, 'La fecha de termino no puede ser anterior a la fecha inicial'))
    .required('La fecha final es requerida'),
})
