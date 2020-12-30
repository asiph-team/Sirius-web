export const headers = [
  {
    name: 'Nombre puesto de trabajo',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Área de pertenencia',
    selector: 'area',
    sortable: true,
    orderKey: 'area.name',
  },
  {
    name: 'Total actividades',
    selector: 'total_activities',
    sortable: true,
    center: true,
  },
  {
    name: 'Total trabajadores por puesto de trabajo',
    selector: 'total_employees',
    sortable: true,
    center: true,
  },
  {
    name: 'Revisiones',
    selector: 'revisions',
    sortable: true,
    center: true,
  },
  {
    name: '',
    selector: 'actions',
    maxWidth: '100px',
  },
]
