export const headers = [
  {
    selector: 'name',
    name: 'Nombre vigilancia médica',
    sortable: true,
    maxWidth: '250px',
  },
  {
    selector: 'workstation',
    name: 'Puesto de trabajo',
    sortable: true,
    orderKey: 'workstation.name',
    maxWidth: '200px',
  },
  {
    selector: 'start_date',
    name: 'Fecha comienzo',
    sortable: true,
    maxWidth: '150px',
  },
  {
    selector: 'end_date',
    name: 'Fecha termino',
    sortable: true,
    maxWidth: '150px',
  },
  {
    selector: 'frequency',
    name: 'Frecuencia',
    sortable: true,
    maxWidth: '150px',
  },
  {
    selector: 'description',
    name: 'Descripción',
    sortable: true,
    maxWidth: '150px',
  },
  {
    selector: 'actions',
    name: '',
    maxWidth: '50px',
  },
]
