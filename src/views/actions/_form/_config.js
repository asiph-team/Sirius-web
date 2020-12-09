import { origins, priorities } from './_initialValues'
import { userData } from '../../../utility/helpers/functions'

const user = userData()
export const config = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre plan de acción*',
      type: 'text',
      grid: 6,
    },
    {
      input: 'CustomSelect',
      key: 2,
      name: 'manager_id',
      title: 'Jefe de área*',
      type: 'text',
      options: [],
      grid: 6,
      disabled: (user.role === 'chief_of_area'),
    },
  ],
  [
    {
      input: 'CustomDatePicker',
      key: 3,
      name: 'date_initial',
      title: 'Fecha de inicio*',
      grid: 3,
    },
    {
      input: 'CustomDatePicker',
      key: 4,
      name: 'date_committed',
      title: 'Fecha compromiso*',
      grid: 3,
    },
    {
      input: 'CustomSelect',
      key: 5,
      name: 'origin',
      title: 'Origen*',
      type: 'text',
      options: origins,
      grid: 3,
    },
    {
      input: 'CustomSelect',
      key: 6,
      name: 'priority',
      title: 'Prioridad*',
      type: 'text',
      options: priorities,
      grid: 3,
    },
  ],

]
