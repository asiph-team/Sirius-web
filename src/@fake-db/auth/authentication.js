import mock from '../mock'
import jwt from 'jsonwebtoken'

let users = [
    {
      id: 1,
      email: "superadmin@test.com",
      password: "123456",
      name: "Jorge Verdugo",
      role: "Superadministrador",
      enterprise: null
    },
    {
      id: 2,
      email: "admin@test.com",
      password: "123456",
      name: "Carlos Knopel",
      role: "Administrador",
      enterprise: "Asiph"
    },
    {
      id: 3,
      email: "jefearea@test.com",
      password: "123456",
      name: "Jorge Almonacid",
      role: "Jefe Area",
      enterprise: "Asiph"
    }
]

const jwtConfig = {
    "secret"   : "dd5f3089-40c3-403d-af14-d0c228b05cb4",
    "expireTime": 8000
}

mock.onPost('/api/v1/authenticate/login/user').reply(request => {
    let { email, password } = JSON.parse(request.data)
    let error = 'Se ha producido un error, intentalo más tarde'

    const user = users.find(user => user.email === email && user.password === password)

    if (user) {
        try {
            const accessToken = jwt.sign({id: user.id}, jwtConfig.secret, {expiresIn: jwtConfig.expireTime})
            const userData = Object.assign({}, user)
            delete userData.password
            const response = {
                user : userData,
                accessToken: accessToken
            }

            return [200, response]
        } catch(e) {
            error = e
        }
    } else {
        error = "Correo electronico o contraseña inválida"
    }

    return [422, {error}]
})