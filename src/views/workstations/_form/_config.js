export const config = [
  [
    {
      input: 'CustomInput',
      key: 1,
      name: 'name',
      title: '*Nombre del puesto de trabajo',
      type: 'text',
      grid: 12,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 3,
      name: 'description',
      title: '*Descripción del puesto de trabajo, actividades principales, funciones relevantes.',
      rows: 5,
      grid: 12,
      maxLength: 300,
    },
  ],
  [
    {
      input: 'CustomTextArea',
      key: 3,
      name: 'information',
      title: 'Licencias / Permisos / Certificaciones / Cursos / Conocimientos obligatorios.',
      rows: 5,
      grid: 12,
    },
  ],
]
