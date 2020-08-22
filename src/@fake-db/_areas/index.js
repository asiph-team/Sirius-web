import mock from '../mock'

const areas = [
  {
    id: 1,
    name: 'Desarrollo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum gravida ex sed blandit.',
    manager: 'Javier Andrés',
  },
]

mock.onGet('/api/v1/areas').reply(() => [200, areas])
mock.onPost('/api/v1/areas').reply((request) => {
  const reqData = JSON.parse(request.data)
  const newArea = { ...reqData, status: true }
  areas.push(newArea)
  return [200, []]
})

mock.onPost('/api/v1/areas/remove').reply((request) => {
  const { id } = JSON.parse(request.data)
  const index = areas.findIndex((item) => item.id === id)
  areas.splice(index, 1)
  return [200, areas]
})

mock.onPost('/api/v1/areas/update').reply((request) => {
  const data = JSON.parse(request.data)
  areas.map((item) => {
    if (item.id === data.id) {
      return Object.assign(item, { ...data })
    }
    return item
  })

  return [200, []]
})
