import { options } from './_initialValues'

export const formConfig = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre o razón social',
      type: 'text',
    },
    {
      input: 'CustomInput',
      key: 2,
      name: 'spin',
      title: 'Giro',
      type: 'text',
    },
  ], [
    {
      input: 'CustomInput',
      key: 3,
      name: 'heading',
      title: 'Rubro',
      type: 'text',
    },
    {
      input: 'CustomInput',
      key: 4,
      name: 'address',
      title: 'Dirección',
      type: 'text',
    },
  ],
  [
    {
      input: 'CustomInput',
      key: 5,
      name: 'RUT',
      title: 'RUT',
      type: 'text',
      small: '(ej: 99999999-9)',
    },
    {
      input: 'CustomInputAddon',
      key: 6,
      name: 'phone',
      title: 'Teléfono contacto',
      type: 'phone',
      prepend: '+569',
    },
  ],
  [
    {
      input: 'CustomInput',
      key: 7,
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      input: 'CustomSelect',
      key: 8,
      name: 'size',
      title: 'Tamaño',
      type: 'text',
      options,
    },
  ],
  [
    {
      input: 'CustomInput',
      key: 9,
      name: 'RL',
      title: 'Representante legal',
      type: 'text',
    },
    {
      input: 'CustomInputAddon',
      key: 10,
      name: 'CRL',
      title: 'Contacto Representante legal',
      type: 'phone',
      prepend: '+569',
    },
  ],
  [
    {
      input: 'CustomInput',
      key: 11,
      name: 'RT',
      title: 'Representante técnico',
      type: 'text',
    },
    {
      input: 'CustomInputAddon',
      key: 12,
      name: 'CRT',
      title: 'Contacto Representante técnico',
      type: 'phone',
      prepend: '+569',
    },
  ],
]
