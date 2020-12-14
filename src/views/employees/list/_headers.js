import { permitted } from '../../../utility/helpers/functions'

const actions = { selector: 'actions', name: '', maxWidth: '50px' }
const status = {
  selector: 'status', name: 'Estado', sortable: true, maxWidth: '50px', center: true,
}
export const headers = [
  {
    selector: 'fullname',
    name: 'Nombre del trabajador',
    sortable: true,
    orderKey: 'name',
  },
  {
    selector: 'rut',
    name: 'RUT',
    sortable: true,
    maxWidth: '150px',
  },
  {
    selector: 'area',
    name: 'Área de trabajo',
    sortable: true,
    orderKey: 'area.name',
  },
  {
    selector: 'workstation',
    name: 'Puesto de trabajo',
    sortable: true,
    orderKey: 'workstation.name',
  },
].concat((permitted('employees:edit') || permitted('employees:delete')) && status)
  .concat((permitted('employees:edit') || permitted('employees:delete')) && actions).filter((x) => x !== false)
