import mock from '../mock'

const jobs = [
  {
    id: 1,
    name: 'Frontend Developer',
    description: 'Encargado de armar la lógica presentacional de las aplicaciones',
    t_activities: 10,
    t_trainings: 2,
    t_programs: 5,
  },
  {
    id: 2,
    name: 'Backend Developer',
    description: 'Encargado de armar la lógica de negocio de las aplicaciones',
    t_activities: 20,
    t_trainings: 4,
    t_programs: 7,
  },
  {
    id: 3,
    name: 'Project Manager',
    description: 'Encargado de la fluidez del proyecto de software',
    t_activities: 24,
    t_trainings: 2,
    t_programs: 3,
  },
  {
    id: 4,
    name: 'Software Architect',
    description: 'Encargado de diseñar y ejectuar soluciones de software',
    t_activities: 12,
    t_trainings: 8,
    t_programs: 2,
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
