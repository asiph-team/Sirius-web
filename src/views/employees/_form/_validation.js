import * as Yup from 'yup'
import rutRegex from 'rut-regex'
import { cellRegExp } from '../../../utility/helpers/consts'

export const workstationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Los nombres del trabajador debe ser mayores a 3 caractéres')
    .max(50, 'Los nombres del trabajador debe ser menores a 50 caractéres')
    .required('Los nombres del trabajador son requeridos'),
  lastname: Yup.string()
    .min(3, 'Los apellidos del trabajador deben ser mayores a 3 caractéres')
    .max(70, 'Los apellidos del trabajador deben ser menores a 50 caractéres')
    .required('Los apellidos del trabajador son requeridos'),
  rut: Yup.string()
    .test('RUT-validator', 'El RUT ingresado no es válido', (value) => {
      if (value) {
        return rutRegex({ exact: true, dot: false, hyphen: false }).test(value)
      }
      return true
    })
    .required('El RUT es requerido'),
  email: Yup.string()
    .email('El email ingresado no es válido')
    .required('El email es requerido'),
  address: Yup.string()
    .min(10, 'La dirección debe ser mayor a 10 caractéres')
    .max(200, 'La dirección debe ser menor a 200 caractéres')
    .required('La dirección es requerida'),
  phone: Yup.string()
    .matches(cellRegExp, 'El teléfono ingresado no es válido')
    .required('El número es requerido'),
  workstation_id: Yup.string()
    .default(),
  date_start: Yup.date()
    .required('La fecha de inicio laboral es requerida'),
})
