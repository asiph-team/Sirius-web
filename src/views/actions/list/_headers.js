import { permitted } from '../../../utility/helpers/functions'

const actions = { selector: 'actions', name: '', maxWidth: '100px' }
export const headers = [
  {
    selector: 'name',
    name: 'Nombre plan de acción',
    sortable: true,
    minWidth: '200px',
  },
  {
    selector: 'area',
    name: 'Área',
    sortable: true,
    orderKey: 'area.name',
  },
  {
    selector: 'date_initial',
    name: 'Fecha ingreso',
    sortable: true,
  },
  {
    selector: 'manager',
    name: 'Responsable',
    sortable: true,
    orderKey: 'user.name',
  },
  {
    selector: 'origin',
    name: 'Origen',
    sortable: true,
  },
  {
    selector: 'priority',
    name: 'Prioridad',
    sortable: true,
    minWidth: '50px',
    center: true,
  },
  {
    selector: 'date_committed',
    name: 'Fecha compromiso',
    sortable: true,
    minWidth: '100px',
  },
  {
    selector: 'status',
    name: 'Estado',
    sortable: true,
    minWidth: '50px',
  },
].concat((permitted('actions:edit') || permitted('actions:delete')) && actions).filter((x) => x !== false)
