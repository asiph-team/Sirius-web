export const config = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre de capacitación',
      type: 'text',
      grid: 6,
    },
    {
      input: 'CustomDatePicker',
      key: 2,
      name: 'date',
      title: 'Fecha de compromiso',
      grid: 6,
    },
  ],
  [
    {
      input: 'CustomInput',
      key: 3,
      name: 'frequency',
      title: 'Frecuencia',
      type: 'text',
      grid: 6,
    },
    {
      input: 'CustomSelect',
      key: 4,
      name: 'employees',
      title: 'Trabajadores invitados',
      options: [],
      multiple: true,
      grid: 6,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 5,
      name: 'description',
      title: 'Descripción',
      rows: 5,
      grid: 12,
    },
  ],
]
