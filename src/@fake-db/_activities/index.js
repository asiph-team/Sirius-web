import mock from '../mock'

const activities = [
  {
    id: 1,
    name: 'Diseño de arquitectura',
    description: 'Toda solución de software debe tener una arquitectura que responda a la necesidad del problema.',
    job: 'Software Architect',
  },
  {
    id: 2,
    name: 'Definir elementos presentacionales',
    description: 'En coordinación con el equipo de UI/UX, se deben seleccionar los elementos presentacionales a utilizar.',
    job: 'Frontend Developer',
  },
  {
    id: 3,
    name: 'Diseño de base de datos',
    description: 'Se debe contar con un modelo de datos acorde a la solución del problema.',
    job: 'Software Architect',
  },
  {
    id: 4,
    name: 'Implementación base de datos',
    description: 'Se debe implementar la base de datos diseñada',
    job: 'Backend Developer',
  },
]

mock.onGet('/api/v1/activities').reply(() => [200, activities])
mock.onPost('/api/v1/activities').reply((request) => {
  const reqData = JSON.parse(request.data)
  const newActivities = { ...reqData, status: true }
  activities.push(newActivities)
  return [200, []]
})

mock.onPost('/api/v1/activities/remove').reply((request) => {
  const { id } = JSON.parse(request.data)
  const index = activities.findIndex((item) => item.id === id)
  activities.splice(index, 1)
  return [200, activities]
})

mock.onPost('/api/v1/activities/update').reply((request) => {
  const data = JSON.parse(request.data)
  activities.map((item) => {
    if (item.id === data.id) {
      return Object.assign(item, { ...data })
    }
    return item
  })

  return [200, []]
})
