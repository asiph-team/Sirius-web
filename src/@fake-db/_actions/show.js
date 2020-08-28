import mock from '../mock'

const actions = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet',
    date_in: '01/09/20',
    responsable: 'elementum magna',
    origin: 'netus',
    priority: 'Alta',
    date_out: '10/09/20',
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet',
    date_in: '01/09/20',
    responsable: 'elementum magna',
    origin: 'netus',
    priority: 'Alta',
    date_out: '10/09/20',
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet',
    date_in: '01/09/20',
    responsable: 'elementum magna',
    origin: 'netus',
    priority: 'Alta',
    date_out: '10/09/20',
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor sit amet',
    date_in: '01/09/20',
    responsable: 'elementum magna',
    origin: 'netus',
    priority: 'Alta',
    date_out: '10/09/20',
  },
]

mock.onGet('/api/v1/actions').reply(() => [200, actions])
