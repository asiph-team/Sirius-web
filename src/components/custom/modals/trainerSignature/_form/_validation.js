import * as Yup from 'yup'
import rutRegex from 'rut-regex'

export const actionSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'El nombre debe ser mayor a 3 caractéres')
    .max(50, 'El nombre debe ser menor a 50 caractéres')
    .required('El nombre del relator es requerido'),
  rut: Yup.string()
    .test('RUT-validator', 'El RUT ingresado no es válido', (value) => {
      if (value) {
        return rutRegex({ exact: true, dot: false, hyphen: false }).test(value)
      }
      return true
    })
    .required('El RUT es requerido'),
  signature: Yup.string()
    .required('La firma es requerida'),
})
