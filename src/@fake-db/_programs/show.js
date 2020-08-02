import mock from '../mock'

let workers = [
    {
        id: 1,
        name: 'Mauris feugiat',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at rutrum metus. Fusce non hendrerit dui.',
        state: 'Pendiente'
    },
    {
        id: 2,
        name: 'In nunc ipsum,',
        description: 'ehicula vitae nunc ut, vehicula dictum nulla.',
        state: 'Pendiente'
    },
    {
        id: 3,
        name: 'Curabitur aliquam',
        description: 'ut mattis sem lobortis.',
        state: 'Realizado'
    },
    {
        id: 4,
        name: 'nec suscipit sit',
        description: 'Suspendisse neque orci, rutrum in venenatis et.',
        state: 'Pendiente'
    },
]

let jobs = [
    {
        id: 5,
        name: 'In nunc ipsum,',
        description: 'ehicula vitae nunc ut, vehicula dictum nulla.',
        state: 'Pendiente'
    },
    {
        id: 6,
        name: 'Curabitur aliquam',
        description: 'ut mattis sem lobortis.',
        state: 'Realizado'
    },
    {
        id: 7,
        name: 'Mauris feugiat',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at rutrum metus. Fusce non hendrerit dui.',
        state: 'Pendiente'
    },
    {
        id: 8,
        name: 'nec suscipit sit',
        description: 'Suspendisse neque orci, rutrum in venenatis et.',
        state: 'Pendiente'
    },
]

mock.onGet('/api/v1/programs').reply(() => {
    return [200, {workers, jobs}]
})