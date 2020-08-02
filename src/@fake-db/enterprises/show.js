import mock from '../mock'

let enterprises = [
    {
        id: 1,
        name: 'Soprole',
        spin: 'Industrial',
        heading: 'Lacteos',
        RUT: '77123123-2',
        address: 'Avenida Vitacura N° 4465, Santiago',
        phone: '600 600 6600',
        email: 'contacto@soprole.cl',
        size: 'Más de 100',
        RL: 'Juan Cárcamo',
        CRL: '+569 91349182',
        RT: 'Grabriel Vasquez',
        CRT: '+569 77381029',
    },
    {
        id: 2,
        name: 'Verde Construcciones',
        spin: 'Servicios',
        heading: 'Construcción',
        RUT: '74229122-8',
        address: 'Avda. España #452, Valdivia',
        phone: '63 2 245391',
        email: 'verdeconst@gmail.com',
        size: '11 - 20',
        RL: 'Jaime Segovia',
        CRL: '+569 93659298',
        RT: 'Pablo Segovia',
        CRT: '+569 44650208',
    },
    {
        id: 3,
        name: 'Colún',
        spin: 'Industrial',
        heading: 'Lacteos',
        RUT: '77153543-2',
        address: 'Esmeralda 641, La Unión',
        phone: '600 2300 333',
        email: 'contacto@colun.cl',
        size: 'Más de 100',
        RL: 'Carlos Saavedra',
        CRL: '+569 91444184',
        RT: 'Ignacio Muñoz',
        CRT: '+569 73381329',
    },
]

mock.onGet('/api/v1/enterprises').reply(() => {
    return [200, enterprises]
})