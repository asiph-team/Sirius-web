import { frequency } from './_initialValues'

export const config = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre de capacitación*',
      type: 'text',
      grid: 6,
    },
    {
      input: 'CustomSelect',
      key: 3,
      name: 'frequency',
      title: 'Frecuencia*',
      type: 'text',
      options: frequency,
      grid: 6,
    },
  ],
  [
    {
      input: 'CustomDatePicker',
      key: 2,
      name: 'start_date',
      title: 'Fecha de inicio*',
      grid: 3,
    },
    {
      input: 'CustomDatePicker',
      key: 4,
      name: 'end_date',
      title: 'Fecha de termino*',
      grid: 3,
    },
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
      options: frequency,
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
