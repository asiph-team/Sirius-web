import mock from '../mock'

const trainings = [
  {
    id: 1,
    name: 'Introducción a Git',
    description: 'Curso introductorio al uso de git y sus buenas prácticas',
    invited: 10,
    date: '01/09/20',
    frequency: '1 vez por semestre',
  },
  {
    id: 2,
    name: 'TDD',
    description: 'Curso introductorio al uso de tdd en frontend',
    invited: 5,
    date: '24/09/20',
    frequency: '1 vez por semestre',
  },
]

mock.onGet('/api/v1/trainings').reply(() => [200, trainings])
mock.onPost('/api/v1/trainings').reply((request) => {
  const reqData = JSON.parse(request.data)
  const newTraining = { ...reqData, invited: 0, id: reqData.name }
  trainings.push(newTraining)
  return [200, []]
})

mock.onPost('/api/v1/trainings/remove').reply((request) => {
  const { id } = JSON.parse(request.data)
  const index = trainings.findIndex((item) => item.id === id)
  trainings.splice(index, 1)
  return [200, trainings]
})

mock.onPost('/api/v1/trainings/update').reply((request) => {
  const data = JSON.parse(request.data)
  trainings.map((item) => {
    if (item.id === data.id) {
      return Object.assign(item, { ...data })
    }
    return item
  })

  return [200, []]
})
