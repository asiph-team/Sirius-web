import { risks } from './_initialValues'

export const config = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre de la actividad*',
      type: 'text',
      grid: 6,
    },
    {
      input: 'CustomSelect',
      key: 2,
      name: 'workstation',
      title: 'Area de pertenencia*',
      type: 'text',
      options: [],
      grid: 6,
    },
  ],
  [
    {
      input: 'CustomSelect',
      key: 3,
      name: 'risk',
      title: 'Riesgo de la actividad*',
      type: 'text',
      options: risks,
      grid: 6,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 4,
      name: 'description',
      title: 'Descripción de la actividad, principales tareas, consideraciones relevantes, principales riesgos*',
      rows: 5,
      grid: 12,
    },
  ],
]
