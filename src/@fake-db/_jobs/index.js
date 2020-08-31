import mock from '../mock'

const jobs = [
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

mock.onGet('/api/v1/jobs').reply(() => [200, jobs])
mock.onPost('/api/v1/jobs').reply((request) => {
  const reqData = JSON.parse(request.data)
  const newJob = { ...reqData, status: true }
  jobs.push(newJob)
  return [200, []]
})

mock.onPost('/api/v1/jobs/remove').reply((request) => {
  const { id } = JSON.parse(request.data)
  const index = jobs.findIndex((item) => item.id === id)
  jobs.splice(index, 1)
  return [200, jobs]
})

mock.onPost('/api/v1/jobs/update').reply((request) => {
  const data = JSON.parse(request.data)
  jobs.map((item) => {
    if (item.id === data.id) {
      return Object.assign(item, { ...data })
    }
    return item
  })

  return [200, []]
})
