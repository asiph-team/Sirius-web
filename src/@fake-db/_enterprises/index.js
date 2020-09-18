import mock from '../mock'

const enterprises = {
  current_page: 1,
  data: [
    {
      id: 1,
      name: 'Soprole',
      spin: 'Industrial',
      heading: 'Lacteos',
      RUT: '77123123-2',
      address: 'Avenida Vitacura N° 4465, Santiago',
      phone: '600 600 6600',
      email: 'contacto@soprole.cl',
      size: 'Más de 100',
      RL: 'Juan Cárcamo',
      CRL: '+569 91349182',
      RT: 'Grabriel Vasquez',
      CRT: '+569 77381029',
      status: true,
    },
    {
      id: 2,
      name: 'Verde Construcciones',
      spin: 'Servicios',
      heading: 'Construcción',
      RUT: '74229122-8',
      address: 'Avda. España #452, Valdivia',
      phone: '63 2 245391',
      email: 'verdeconst@gmail.com',
      size: '11 - 20',
      RL: 'Jaime Segovia',
      CRL: '+569 93659298',
      RT: 'Pablo Segovia',
      CRT: '+569 44650208',
      status: false,
    },
    {
      id: 3,
      name: 'Colún',
      spin: 'Industrial',
      heading: 'Lacteos',
      RUT: '77153543-2',
      address: 'Esmeralda 641, La Unión',
      phone: '600 2300 333',
      email: 'contacto@colun.cl',
      size: 'Más de 100',
      RL: 'Carlos Saavedra',
      CRL: '+569 91444184',
      RT: 'Ignacio Muñoz',
      CRT: '+569 73381329',
      status: true,
    },
  ],
  first_page_url: 'http://api.com/api/v1/enterprises/?page=1',
  from: 1,
  last_page: 1,
  last_page_url: 'http://api.com/api/v1/enterprises/?page=1',
  next_page_url: null,
  path: 'http://api.com/api/v1/enterprises/',
  per_page: 10,
  prev_page_url: null,
  to: 9,
  total: 9,
}

const enterprises_2 = {
  current_page: 1,
  data: [
    {
      id: 1,
      name: 'Soprole 2',
      spin: 'Industrial',
      heading: 'Lacteos',
      RUT: '77123123-2',
      address: 'Avenida Vitacura N° 4465, Santiago',
      phone: '600 600 6600',
      email: 'contacto@soprole.cl',
      size: 'Más de 100',
      RL: 'Juan Cárcamo',
      CRL: '+569 91349182',
      RT: 'Grabriel Vasquez',
      CRT: '+569 77381029',
      status: true,
    },
    {
      id: 2,
      name: 'Verde Construcciones 2',
      spin: 'Servicios',
      heading: 'Construcción',
      RUT: '74229122-8',
      address: 'Avda. España #452, Valdivia',
      phone: '63 2 245391',
      email: 'verdeconst@gmail.com',
      size: '11 - 20',
      RL: 'Jaime Segovia',
      CRL: '+569 93659298',
      RT: 'Pablo Segovia',
      CRT: '+569 44650208',
      status: false,
    },
    {
      id: 3,
      name: 'Colún 2',
      spin: 'Industrial',
      heading: 'Lacteos',
      RUT: '77153543-2',
      address: 'Esmeralda 641, La Unión',
      phone: '600 2300 333',
      email: 'contacto@colun.cl',
      size: 'Más de 100',
      RL: 'Carlos Saavedra',
      CRL: '+569 91444184',
      RT: 'Ignacio Muñoz',
      CRT: '+569 73381329',
      status: true,
    },
  ],
  first_page_url: 'http://api.com/api/v1/enterprises/?page=1',
  from: 1,
  last_page: 1,
  last_page_url: 'http://api.com/api/v1/enterprises/?page=1',
  next_page_url: null,
  path: 'http://api.com/api/v1/enterprises/',
  per_page: 10,
  prev_page_url: null,
  to: 9,
  total: 9,
}

mock.onGet('/api/v1/enterprises').reply(() => [200, enterprises])
mock.onGet('/api/v1/enterprises/?page=1').reply(() => [200, enterprises_2])

mock.onPost('/api/v1/enterprises').reply((request) => {
  const reqData = JSON.parse(request.data)
  const newEnterprise = { ...reqData, status: true }
  enterprises.push(newEnterprise)
  return [200, []]
})

mock.onPost('/api/v1/enterprises/remove').reply((request) => {
  const { id } = JSON.parse(request.data)
  const index = enterprises.findIndex((item) => item.id === id)
  enterprises.splice(index, 1)
  return [200, enterprises]
})

mock.onPost('/api/v1/enterprises/status').reply((request) => {
  const { id, status } = JSON.parse(request.data)
  const nEnterprises = enterprises.map((item) => {
    if (item.id === id) return { ...item, status }
    return item
  })

  return [200, nEnterprises]
})

mock.onPost('/api/v1/enterprises/update').reply((request) => {
  const data = JSON.parse(request.data)
  enterprises.map((item) => {
    if (item.id === data.id) {
      return Object.assign(item, { ...data })
    }
    return item
  })

  return [200, []]
})
