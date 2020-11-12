import * as Yup from 'yup'

export const enterpriseSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'La contraseña actual debe ser mayor a 6 caractéres')
    .max(30, 'La contraseña actual debe ser menor a 50 caractéres')
    .required('La contraseña actual es requerida'),
  new_password: Yup.string()
    .min(6, 'La nueva contraseña actual debe ser mayor a 6 caractéres')
    .max(30, 'La nueva contraseña actual debe ser menor a 50 caractéres')
    .required('La nueva contraseña actual es requerida'),
  confirmation: Yup.string()
    .min(6, 'La confirmación de contraseña actual debe ser mayor a 6 caractéres')
    .max(30, 'La confirmación de contraseña actual debe ser menor a 50 caractéres')
    .oneOf([Yup.ref('new_password'), null], 'Las contraseñas no coinciden')
    .required('La confirmación de contraseña actual es requerida'),

})
