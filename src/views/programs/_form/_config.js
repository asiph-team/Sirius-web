import { frequency } from './_initialValues'

export const config = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre de la vigilancia médica*',
      type: 'text',
      grid: 6,
    },
    {
      input: 'MultipleCustomSelect',
      key: 6,
      name: 'employees_id',
      title: 'Empleados invitados*',
      type: 'text',
      options: [],
      selected: [],
      grid: 6,
      multiple: true,
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
      input: 'CustomSelect',
      key: 3,
      name: 'frequency',
      title: 'Frecuencia*',
      type: 'text',
      options: frequency,
      grid: 3,
    },
    {
      input: 'CustomSelect',
      key: 2,
      name: 'workstations_id',
      title: 'Puesto de trabajo*',
      type: 'text',
      options: [],
      grid: 3,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 3,
      name: 'description',
      title: 'Descripción*',
      rows: 5,
      grid: 12,
    },
  ],
]

export const editConfig = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre*',
      type: 'text',
      grid: 12,
    },
  ],
  [
    {
      input: 'CustomSelect',
      key: 2,
      name: 'workstations_id',
      title: 'Puesto de trabajo*',
      type: 'text',
      options: [],
      grid: 6,
    },
    {
      input: 'MultipleCustomSelect',
      key: 6,
      name: 'employees_id',
      title: 'Empleados invitados*',
      type: 'text',
      options: [],
      selected: [],
      grid: 6,
      multiple: true,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 3,
      name: 'description',
      title: 'Descripción*',
      rows: 5,
      grid: 12,
    },
  ],
]
