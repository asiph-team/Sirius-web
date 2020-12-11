import * as Yup from 'yup'

const today = new Date()
today.setHours(0, 0, 0, 0)

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre de la vigilancia médica debe ser mayor a 3 caractéres')
    .max(100, 'El nombre de la vigilancia médica debe ser menor a 100 caractéres')
    .required('El nombre de la vigilancia médica es requerido'),
  description: Yup.string()
    .min(5, 'La descripción debe ser mayor a 5 caractéres')
    .max(80, 'La descripción debe ser menor a 80 caractéres')
    .required('Una descripción es requerida'),
  frequency: Yup.string()
    .ensure()
    .required('La frecuencia es requerida'),
  start_date: Yup.date()
    .min(today, 'La fecha de compromiso no debe ser menor a la fecha actual')
    .required('La fecha de compromiso es requerida'),
  end_date: Yup.date()
    // eslint-disable-next-line camelcase
    .when('start_date', (start_date, yup) => start_date && yup.min(start_date, 'La fecha final no puede ser antes de la inicial'))
    .required('La fecha final es requerida'),
  workstations_id: Yup.string()
    .ensure()
    .required('El puesto de trabajo es requerido'),
  employees_id: Yup.string()
    .ensure()
    .required('Empleados invitados es requerido'),
})
