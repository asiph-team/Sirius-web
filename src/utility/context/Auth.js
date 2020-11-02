import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import {
  initialState, authReducer, fetchStartAuth, fetchSuccessAuth, fetchErrorAuth,
} from '../../ducks/session'
import { urlApi } from '../helpers/consts'

const ContextAuth = createContext({
  authenticated: false,
  user: null,
  accessToken: null,
  initiateLogin: () => { },
  handleAuthentication: () => { },
  logout: () => { },
})
const authUrl = {
  'admin@test.com': 'admin/login',
  'superadmin@test.comn': 'users/login',
}
const Auth = (props) => {
  const savedState = localStorage.getItem('user')
  const [state, dispatch] = useReducer(authReducer, savedState
    ? JSON.parse(savedState) : initialState)

  const setSession = (data, remove = false) => {
    if (remove) return localStorage.clear()
    localStorage.setItem('user', JSON.stringify(data))
    return null
  }

  const handleAuthentication = async (values) => {
    dispatch(fetchStartAuth())
    try {
      const url = values.email === 'superadmin@test.com' ? 'admin/login' : 'users/login'
      const response = await axios.post(`${urlApi}/api/v1/${url}`, values)
      const { user, access_token, rol } = response.data.data
      user.role = rol
      dispatch(fetchSuccessAuth({ user, access_token }))
      setSession({ user, access_token })
    } catch (error) {
      const { response: { data: { message } } } = error
      dispatch(fetchErrorAuth(message))
    }
  }

  const logout = () => {
    setSession(null, true)
  }

  const authProviderValue = {
    ...state,
    handleAuthentication,
    logout,
  }
  const { children } = props
  return (
    <ContextAuth.Provider value={authProviderValue}>
      {children}
    </ContextAuth.Provider>
  )
}

export { Auth, ContextAuth }
