import mock from '../mock'

let areas = [
    {
        id: 1,
        name: 'Desarrollo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum gravida ex sed blandit.',
        manager: 'Jorge Almonacid',
    },
]

mock.onGet('/api/v1/areas').reply(() => {
    return [200, areas]
})