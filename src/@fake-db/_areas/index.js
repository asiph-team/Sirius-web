import mock from '../mock'

const areas = [
  {
    id: 1,
    name: 'Desarrollo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum gravida ex sed blandit.',
    manager: 'Jorge Almonacid',
  },
]

mock.onGet('/api/v1/areas').reply(() => [200, areas])

mock.onPost('/api/v1/areas/remove').reply((request) => {
  const { id } = JSON.parse(request.data)
  const index = areas.findIndex((item) => item.id === id)
  areas.splice(index, 1)
  return [200, areas]
})
