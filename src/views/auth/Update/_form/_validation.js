import * as Yup from 'yup'

export const enterpriseSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'La contraseña actual debe ser mayor a 6 caractéres')
    .max(30, 'La contraseña actual debe ser menor a 50 caractéres')
    .required('La contraseña actual es requerido'),
  new_password: Yup.string()
    .min(6, 'La nueva ontraseña actual debe ser mayor a 6 caractéres')
    .max(30, 'La nueva contraseña actual debe ser menor a 50 caractéres')
    .required('La nueva contraseña actual es requerido'),
  confirmation: Yup.string()
    .min(6, 'La confirmacion de contraseña actual debe ser mayor a 6 caractéres')
    .max(30, 'La confirmacion de contraseña actual debe ser menor a 50 caractéres')
    .oneOf([Yup.ref('new_password'), null], 'Las Contraseñas no coinciden')
    .required('La confirmacion de contraseña actual es requerido'),

})
