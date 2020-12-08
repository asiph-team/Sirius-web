import * as Yup from 'yup'

export const actionSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'El nombre del plan debe ser mayores a 5 caractéres')
    .max(100, 'El nombre del plan debe ser menores a 100 caractéres')
    .required('El nombre del plan es requerido'),
  manager_id: Yup.string()
    .ensure()
    .required('El responsable es requerido'),
  origin: Yup.string()
    .ensure()
    .required('El origen es requerido'),
  priority: Yup.string()
    .ensure()
    .required('La prioridad es requerido'),
  date_initial: Yup.date()
    .required('La fecha de ingreso es requerida'),
  date_committed: Yup.date()
    // eslint-disable-next-line camelcase
    .when('date_initial', (date_initial, yup) => date_initial && yup.min(date_initial, 'La fecha de compromiso no puede ser antes de la inicial'))
    .required('La fecha de compromiso es requerida'),
})
