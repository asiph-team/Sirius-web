import { userData } from '../../../../../utility/helpers/functions'

const user = userData()
console.log('user', user)
const areas = [
  {
    input: 'CustomSelect',
    key: 2,
    name: 'area_id',
    title: 'Áreas*',
    type: 'text',
    options: [],
    grid: 6,
  },
]

export const config = [
  [
    {
      input: 'CustomDatePicker',
      key: 3,
      name: 'date_start',
      title: 'Fecha de inicio*',
      grid: 6,
    },
    {
      input: 'CustomDatePicker',
      key: 4,
      name: 'date_end',
      title: 'Fecha termino*',
      grid: 6,
    },
  ].concat((user.role === 'administrator' || user.role === 'superadministrator') && areas).filter((x) => x !== false),
]
