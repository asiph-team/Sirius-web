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
      const response = await axios.post(`${urlApi}/api/v1/users/login`, values)
      const user = {}
      const { access_token } = response.data.data
      user.email = response.data.data.user.email
      user.id = response.data.data.user.id
      user.role = response.data.data.rol
      dispatch(fetchSuccessAuth({ user, access_token }))
      setSession({ user, access_token })
    } catch (error) {
      dispatch(fetchErrorAuth(error.response.data.error))
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
