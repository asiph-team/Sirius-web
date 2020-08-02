import mock from '../mock'

let activities = [
    {
        id: 1,
        name: 'Diseño de arquitectura',
        description: 'Toda solución de software debe tener una arquitectura que responda a la necesidad del problema.',
        job: 'Software Architect'
    },
    {
        id: 2,
        name: 'Definir elementos presentacionales',
        description: 'En coordinación con el equipo de UI/UX, se deben seleccionar los elementos presentacionales a utilizar.',
        job: 'Frontend Developer'
    },
    {
        id: 3,
        name: 'Diseño de base de datos',
        description: 'Se debe contar con un modelo de datos acorde a la solución del problema.',
        job: 'Software Architect'
    },
    {
        id: 4,
        name: 'Implementación base de datos',
        description: 'Se debe implementar la base de datos diseñada',
        job: 'Backend Developer'
    },
]

mock.onGet('/api/v1/activities').reply(() => {
    return [200, activities]
})