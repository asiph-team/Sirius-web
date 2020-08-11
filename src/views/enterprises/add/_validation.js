import * as Yup from 'yup'
import rutRegex from 'rut-regex'

const phoneRegExp = /^[0-9]{8}$/

export const addEnterpriseSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'El nombre de empresa debe ser mayor a 4 caractéres')
    .max(50, 'El nombre de empresa debe ser menor a 50 caractéres')
    .required('El nombre de empresa es requerido'),
  spin: Yup.string()
    .min(4, 'El giro debe ser mayor a 4 caractéres')
    .max(50, 'El giro debe ser menor a 50 caractéres')
    .required('El giro es requerido'),
  heading: Yup.string()
    .min(4, 'El rubro debe ser mayor a 4 caractéres')
    .max(50, 'El rubro debe ser menor a 50 caractéres')
    .required('El rubro es requerido'),
  address: Yup.string()
    .min(10, 'La dirección debe ser mayor a 10 caractéres')
    .max(50, 'La dirección debe ser menor a 50 caractéres')
    .required('La dirección es requerida'),
  RUT: Yup.string()
    .test('RUT-validator', 'El RUT ingresado no es válido', (value) => {
      const dot = !(value.indexOf('.') <= 0)
      const hyphen = !(value.indexOf('-') <= 0)
      if (value) return rutRegex({ exact: true, dot, hyphen }).test(value)
      return true
    })
    .required('El RUT es requerido'),
  phone: Yup.string()
    .matches(phoneRegExp, 'El teléfono ingresado no es válido')
    .required('El número es requerido'),
  email: Yup.string()
    .email('El email ingresado no es válido')
    .required('El email es requerido'),
  size: Yup.string()
    .ensure()
    .required('El tamaño de la empresa es requerido'),
  RL: Yup.string()
    .min(5, 'El representante legal debe ser mayor a 5 caractéres')
    .max(50, 'El representante legal debe ser menor a 50 caractéres')
    .required('El representante legal es requerido'),
  CRL: Yup.string()
    .matches(phoneRegExp, 'El teléfono ingresado no es válido')
    .required('El número es requerido'),
  RT: Yup.string()
    .min(5, 'El representante legal debe ser mayor a 5 caractéres')
    .max(50, 'El representante legal debe ser menor a 50 caractéres')
    .required('El representante legal es requerido'),
  CRT: Yup.string()
    .matches(phoneRegExp, 'El teléfono ingresado no es válido')
    .required('El número es requerido'),
})
