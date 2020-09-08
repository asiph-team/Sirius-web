import mock from '../mock'

const workstations = [
  {
    id: 1,
    name: 'Frontend Developer',
    description: 'Encargado de armar la lógica presentacional de las aplicaciones',
    total_activities: 10,
    total_trainings: 2,
    total_programs: 5,
  },
  {
    id: 2,
    name: 'Backend Developer',
    description: 'Encargado de armar la lógica de negocio de las aplicaciones',
    total_activities: 20,
    total_trainings: 4,
    total_programs: 7,
  },
  {
    id: 3,
    name: 'Project Manager',
    description: 'Encargado de la fluidez del proyecto de software',
    total_activities: 24,
    total_trainings: 2,
    total_programs: 3,
  },
  {
    id: 4,
    name: 'Software Architect',
    description: 'Encargado de diseñar y ejectuar soluciones de software',
    total_activities: 12,
    total_trainings: 8,
    total_programs: 2,
  },
]

mock.onGet('/api/v1/workstations').reply(() => [200, workstations])
mock.onPost('/api/v1/workstations').reply((request) => {
  const reqData = JSON.parse(request.data)
  const newWorkStation = { ...reqData, status: true }
  workstations.push(newWorkStation)
  return [200, []]
})

mock.onPost('/api/v1/workstations/remove').reply((request) => {
  const { id } = JSON.parse(request.data)
  const index = workstations.findIndex((item) => item.id === id)
  workstations.splice(index, 1)
  return [200, workstations]
})

mock.onPost('/api/v1/workstations/update').reply((request) => {
  const data = JSON.parse(request.data)
  workstations.map((item) => {
    if (item.id === data.id) {
      return Object.assign(item, { ...data })
    }
    return item
  })

  return [200, []]
})
