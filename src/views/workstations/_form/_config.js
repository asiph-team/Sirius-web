export const config = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre del puesto de trabajo*',
      type: 'text',
      grid: 6,
    },
    {
      input: 'CustomInputAddonCheckbox',
      key: 2,
      name: 'revisions',
      title: 'El puesto de trabajo es supervisor',
      type: 'number',
      grid: 6,
      disabled: true,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 3,
      name: 'description',
      title: 'Descripción del Cargo/ Funciones / Responsabilidades / Competencias Requeridas / Principales Riesgos*',
      rows: 5,
      grid: 12,
      maxLength: 300,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 4,
      name: 'information',
      title: 'Licencias / Permisos / Certificaciones / Cursos / Conocimientos obligatorios.',
      rows: 5,
      grid: 12,
    },
  ],
]

export const Editconfig = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: 'Nombre del puesto de trabajo*',
      type: 'text',
      grid: 6,
    },
    {
      input: 'CustomInputAddonCheckbox',
      key: 2,
      name: 'revisions',
      title: 'El puesto de trabajo es supervisor',
      type: 'number',
      grid: 6,
      disabled: true,
    },
  ],
  [
    {
      input: 'CustomSelect',
      key: 3,
      name: 'area_id',
      title: 'Area de pertenencia*',
      type: 'text',
      options: [],
      grid: 12,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 4,
      name: 'description',
      title: 'Descripción del Cargo/ Funciones / Responsabilidades/ Competencias Requeridas / Principales Riesgos*',
      rows: 5,
      grid: 12,
      maxLength: 300,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 5,
      name: 'information',
      title: 'Licencias / Permisos / Certificaciones / Cursos / Conocimientos obligatorios.',
      rows: 5,
      grid: 12,
    },
  ],
]
