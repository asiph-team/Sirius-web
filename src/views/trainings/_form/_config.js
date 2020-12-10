import { frecuency } from './_initialValues'

export const editConfig = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre de capacitación*',
      type: 'text',
      grid: 12,
    },
  ],
  [
    {
      input: 'CustomSelect',
      key: 3,
      name: 'frequency',
      title: 'Frecuencia*',
      type: 'text',
      options: frecuency,
      grid: 4,
    },
    {
      input: 'CustomDatePicker',
      key: 2,
      name: 'start_date',
      title: 'Fecha de inicio*',
      grid: 4,
    },
    {
      input: 'CustomDatePicker',
      key: 4,
      name: 'end_date',
      title: 'Fecha de termino*',
      grid: 4,
    },
  ],
  [
    {
      input: 'MultipleCustomSelect',
      key: 6,
      name: 'employees_id',
      title: 'Empleados invitados*',
      type: 'text',
      options: [],
      selected: [],
      grid: 12,
      multiple: true,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 5,
      name: 'description',
      title: 'Descripción*',
      rows: 5,
      grid: 12,
    },
  ],
]

export const addConfig = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre de capacitación*',
      type: 'text',
      grid: 12,
    },
  ],
  [
    {
      input: 'CustomSelect',
      key: 3,
      name: 'frequency',
      title: 'Frecuencia*',
      type: 'text',
      options: frecuency,
      grid: 4,
    },
    {
      input: 'CustomDatePicker',
      key: 2,
      name: 'start_date',
      title: 'Fecha de inicio*',
      grid: 4,
    },
    {
      input: 'CustomDatePicker',
      key: 4,
      name: 'end_date',
      title: 'Fecha de termino*',
      grid: 4,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 5,
      name: 'description',
      title: 'Descripción*',
      rows: 5,
      grid: 12,
    },
  ],
]
