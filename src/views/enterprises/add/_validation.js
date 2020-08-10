import * as Yup from 'yup'

export const addEnterpriseSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "El nombre de empresa debe ser mayor a 3 caractéres")
        .max(50, "El nombre de empresa debe ser menor a 50 caractéres")
        .required("El nombre de empresa es requerido"),
    spin: Yup.string()
        .min(5, "El giro debe ser mayor a 5 caractéres")
        .max(50, "El giro debe ser menor a 50 caractéres")
        .required("El giro es requerido"),
    heading: Yup.string()
        .min(5, "El rubro debe ser mayor a 5 caractéres")
        .max(50, "El rubro debe ser menor a 50 caractéres")
        .required("El rubro es requerido"),
    address: Yup.string()
        .min(10, "La dirección debe ser mayor a 10 caractéres")
        .max(50, "La dirección debe ser menor a 50 caractéres")
        .required("La dirección es requerida"),
    phone: Yup.number()
        .min(8, "El número debe ser mayor a 8 caractéres")
        .max(8, "El número debe ser menor a 8 caractéres")
        .required("El número es requerido"),
    email: Yup.string()
        .email("El email ingresado no es válido")
        .required("El email es requerido"),
    size: Yup.string().required("El tamaño de la empresa es requerido"),
    RL: Yup.string()
        .min(5, "El representante legal debe ser mayor a 5 caractéres")
        .max(50, "El representante legal debe ser menor a 50 caractéres")
        .required("El representante legal es requerido"),
    CRL: Yup.number()
        .min(8, "El número debe ser mayor a 8 caractéres")
        .max(8, "El número debe ser menor a 8 caractéres")
        .required("El número es requerido"),
    RT: Yup.string()
        .min(5, "El representante legal debe ser mayor a 5 caractéres")
        .max(50, "El representante legal debe ser menor a 50 caractéres")
        .required("El representante legal es requerido"),
    CRT: Yup.number()
        .min(8, "El número debe ser mayor a 8 caractéres")
        .max(8, "El número debe ser menor a 8 caractéres")
        .required("El número es requerido")
})