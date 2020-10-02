import { origins, priorities } from './_initialValues'

export const config = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre',
      type: 'text',
      grid: 6,
    },
    {
      input: 'CustomSelect',
      key: 2,
      name: 'manager_id',
      title: 'Responsable',
      type: 'text',
      options: [],
      grid: 6,
    },
  ],
  [
    {
      input: 'CustomDatePicker',
      key: 3,
      name: 'date_initial',
      title: 'Fecha de ingreso',
      grid: 6,
    },
    {
      input: 'CustomDatePicker',
      key: 4,
      name: 'date_committed',
      title: 'Fecha compromiso',
      grid: 6,
    },
  ],
  [
    {
      input: 'CustomSelect',
      key: 5,
      name: 'origin',
      title: 'Origen',
      type: 'text',
      options: origins,
      grid: 6,
    },
    {
      input: 'CustomSelect',
      key: 6,
      name: 'priority',
      title: 'Prioridad',
      type: 'text',
      options: priorities,
      grid: 6,
    },
  ],
]
