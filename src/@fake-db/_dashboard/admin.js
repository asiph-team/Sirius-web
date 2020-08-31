import mock from '../mock'

const performance = [
  {
    global_performance: 62,
    actions_planes: 89,
    trainings: 9,
    PVE: 59,
    leadership: 89,
    activity_risk: {
      acceptable: 25,
      alert: 62,
      unacceptable: 13,
    },
  },
]

mock.onGet('api/v1/dashboard/admin').reply(() => [200, performance])
