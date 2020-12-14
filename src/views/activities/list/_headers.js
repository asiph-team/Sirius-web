export const headers = [
  {
    selector: 'name',
    name: 'Nombre de actividad',
    sortable: true,
  },
  {
    selector: 'description',
    name: 'Descripción',
    sortable: true,
  },
  {
    selector: 'workstation',
    name: 'Puesto de trabajo',
    sortable: true,
    orderKey: 'workstations.name',
  },
  {
    selector: 'risk',
    name: 'Riesgos',
    sortable: true,
    center: true,
  },
  {
    selector: 'actions',
    name: '',
    maxWidth: '150px',
  },
]
