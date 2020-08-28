/* eslint-disable camelcase */
import mock from '../mock'

const actions = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet',
    date_initial: '01/09/20',
    manager: 'Javier Andrés',
    origin: 'CHPS',
    priority: 'Alta',
    date_committed: '10/09/20',
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet',
    date_initial: '01/09/20',
    manager: 'Javier Andrés',
    origin: 'CHPS',
    priority: 'Alta',
    date_committed: '10/09/20',
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet',
    date_initial: '01/09/20',
    manager: 'Javier Andrés',
    origin: 'CHPS',
    priority: 'Alta',
    date_committed: '10/09/20',
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor sit amet',
    date_initial: '01/09/20',
    manager: 'Javier Andrés',
    origin: 'CHPS',
    priority: 'Alta',
    date_committed: '10/09/20',
  },
]

mock.onGet('/api/v1/actions').reply(() => [200, actions])
mock.onPost('/api/v1/actions').reply((request) => {
  const reqData = JSON.parse(request.data)
  reqData.date_committed = '01/01/21'
  reqData.date_initial = '02/01/21'
  reqData.id = reqData.name
  const newActions = {
    ...reqData,
  }
  actions.push(newActions)
  return [200, []]
})

mock.onPost('/api/v1/actions/remove').reply((request) => {
  const { id } = JSON.parse(request.data)
  const index = actions.findIndex((item) => item.id === id)
  actions.splice(index, 1)
  return [200, actions]
})

mock.onPost('/api/v1/actions/update').reply((request) => {
  const data = JSON.parse(request.data)
  // data.date_committed = '01/01/21'
  // data.date_initial = '02/01/21'
  // actions.map((item) => {
  //   if (item.id === data.id) {
  //     return Object.assign(item, { ...data })
  //   }

  //   return item
  // })

  return [200, []]
})
