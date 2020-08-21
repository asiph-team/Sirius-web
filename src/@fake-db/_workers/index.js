import mock from '../mock'

const workers = [
  {
    id: 1,
    name: 'Javier Andrés',
    lastname: 'Soto Pereira',
    phone: '+569 44650909',
    email: 'jsoto@asiph.cl',
    job: 'Frontend Developer',
    status: true,
  },
  {
    id: 2,
    name: 'Andrés',
    lastname: 'Maldonado Ramírez',
    phone: '+569 95651900',
    email: 'amaldonado@asiph.cl',
    job: 'Frontend Developer',
    status: true,
  },
  {
    id: 3,
    name: 'Yerco ignacio',
    lastname: 'Moreira Cuevas',
    phone: '+569 83331922',
    email: 'ymoreira@asiph.cl',
    job: 'Backend Developer',
    status: true,
  },
  {
    id: 4,
    name: 'Carlos Gabriel',
    lastname: 'Rios Sandoval',
    phone: '+569 44337699',
    email: 'crios@asiph.cl',
    job: 'Backend Developer',
    status: true,
  },
  {
    id: 5,
    name: 'Pedro Pablo',
    lastname: 'Gonzalez Jara',
    phone: '+569 771595834',
    email: 'pgonzalez@asiph.cl',
    job: 'Software Architect',
    status: true,
  },
]

mock.onGet('/api/v1/workers').reply(() => [200, workers])
