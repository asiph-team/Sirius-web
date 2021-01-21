import { permitted } from '../../../utility/helpers/functions'

const actions = { selector: 'actions', name: '', right: true }
const status = {
  selector: 'status', name: 'Estado', sortable: true, center: true,
}
export const headers = [
  {
    selector: 'fullname',
    name: 'Nombre del trabajador',
    sortable: true,
    orderKey: 'name',
    minWidth: '250px',
  },
  {
    selector: 'rut',
    name: 'RUT',
    sortable: true,
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
    minWidth: '300px',
  },
].concat((permitted('employees:edit') || permitted('employees:delete')) && status)
  .concat((permitted('employees:edit') || permitted('employees:delete')) && actions).filter((x) => x !== false)
