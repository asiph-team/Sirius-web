import mock from '../mock'

const performance = {
  globalPerformance: 62,
  actionsPlans: 89,
  trainings: 9,
  PVE: 59,
  leadership: 89,
  activityRisk: {
    acceptable: 25,
    alert: 62,
    unacceptable: 13,
  },
}

mock.onGet('api/v1/dashboard/admin').reply(() => [200, performance])
