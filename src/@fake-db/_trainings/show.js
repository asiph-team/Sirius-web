import mock from '../mock'

let trainings = [
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

mock.onGet('/api/v1/trainings').reply(() => {
    return [200, trainings]
})