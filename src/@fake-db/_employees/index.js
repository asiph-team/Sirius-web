import mock from '../mock'

const employees = [
  {
    id: 'eb181a40-fc5c-11ea-824d-7356ab1e5d61',
    name: 'Javier Andrés',
    lastname: 'Soto Pereira',
    RUT: '10515377-5',
    phone: '+569 44650909',
    email: 'jsoto@asiph.cl',
    workstation: 'Frontend Developer',
    address: 'Avda. España 1234',
    date_start: '01/09/2010',
    status: true,
  },
  {
    id: 'eb181a40-fc5c-11ea-824d-7356ab1e5d62',
    name: 'Andrés',
    lastname: 'Maldonado Ramírez',
    RUT: '17693283-k',
    phone: '+569 95651900',
    email: 'amaldonado@asiph.cl',
    workstation: 'Frontend Developer',
    address: 'Arauco 327',
    date_start: '01/09/2010',
    status: true,
  },
  {
    id: 'eb181a40-fc5c-11ea-824d-7356ab1e5d63',
    name: 'Yerco ignacio',
    lastname: 'Moreira Cuevas',
    RUT: '11426634-5',
    phone: '+569 83331922',
    email: 'ymoreira@asiph.cl',
    workstation: 'Backend Developer',
    address: 'Orompello 129',
    date_start: '01/09/2010',
    status: true,
  },
  {
    id: 'eb181a40-fc5c-11ea-824d-7356ab1e5d64',
    name: 'Carlos Gabriel',
    lastname: 'Rios Sandoval',
    RUT: '18133681-1',
    phone: '+569 44337699',
    email: 'crios@asiph.cl',
    workstation: 'Backend Developer',
    address: 'Chacabuco 768',
    date_start: '01/09/2010',
    status: true,
  },
  {
    id: 'eb181a40-fc5c-11ea-824d-7356ab1e5d65',
    name: 'Pedro Pablo',
    lastname: 'Gonzalez Jara',
    RUT: '24292723-0',
    phone: '+569 771595834',
    email: 'pgonzalez@asiph.cl',
    workstation: 'Software Architect',
    address: 'Isabel Rodas 247',
    date_start: '01/09/2010',
    status: true,
  },
]

mock.onGet('/api/v1/employees').reply(() => [200, employees])
mock.onPost('/api/v1/employees').reply((request) => {
  const reqData = JSON.parse(request.data)
  const newEmployees = { ...reqData, status: true }
  employees.push(newEmployees)
  return [200, []]
})

mock.onPost('/api/v1/employees/remove').reply((request) => {
  const { id } = JSON.parse(request.data)
  const index = employees.findIndex((item) => item.id === id)
  employees.splice(index, 1)
  return [200, employees]
})

mock.onPost('/api/v1/employees/update').reply((request) => {
  const data = JSON.parse(request.data)
  employees.map((item) => {
    if (item.id === data.id) {
      return Object.assign(item, { ...data })
    }
    return item
  })

  return [200, []]
})
