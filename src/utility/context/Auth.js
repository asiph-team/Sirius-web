import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import {
  initialState, authReducer, fetchStartAuth, fetchSuccessAuth, fetchErrorAuth, fetchUserAlert,
} from '../../ducks/session'
import { urlApi } from '../helpers/consts'

const ContextAuth = createContext({
  authenticated: false,
  user: null,
  accessToken: null,
  initiateLogin: () => { },
  handleAuthentication: () => { },
  updateValidPassword: () => { },
  logout: () => { },
  alert: null,
})
const Auth = (props) => {
  const savedState = localStorage.getItem('user')
  const [state, dispatch] = useReducer(authReducer, savedState
    ? JSON.parse(savedState) : initialState)

  const getAlert = (token) => {
    axios.get(`${urlApi}/api/v1/courses/today`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => dispatch(fetchUserAlert(response.data)))
  }

  const setSession = (data, remove = false) => {
    if (remove) return localStorage.clear()
    localStorage.setItem('user', JSON.stringify(data))
    return null
  }

  const handleAuthentication = async (values) => {
    dispatch(fetchStartAuth())
    dispatch(fetchErrorAuth(null))
    try {
      const url = values.email === 'superadmin@test.com' ? 'admin/login' : 'users/login'
      const response = await axios.post(`${urlApi}/api/v1/${url}`, values)
      const { user, access_token, refresh_token, token_type, expires_at, rol } = response.data.data
      user.role = rol
      dispatch(fetchSuccessAuth({ user, access_token, refresh_token, token_type, expires_at }))
      setSession({ user, access_token, refresh_token, token_type, expires_at })
      getAlert(access_token)
    } catch (error) {
      const { response: { data: { message } } } = error
      dispatch(fetchErrorAuth(message))
    }
  }

  const workonAuthentication = async (values) => {
    const { enterprise } = values
    const prevAuth = localStorage.getItem('user')
    localStorage.setItem('user_aux', prevAuth)
    dispatch(fetchErrorAuth(null))
    try {
      const url = values.email === 'superadmin@test.com' ? 'admin/login' : 'users/login'
      const response = await axios.post(`${urlApi}/api/v1/${url}`, values)
      const { user, access_token, rol } = response.data.data
      user.role = rol
      dispatch(fetchSuccessAuth({ user, access_token, enterprise }))
      setSession({ user, access_token })
      getAlert(access_token)
      localStorage.setItem('workon', true)
    } catch (error) {
      const { response: { data: { message } } } = error
      dispatch(fetchErrorAuth(message))
    }
  }

  const switchAuthentication = async () => {
    const { user, access_token } = JSON.parse(localStorage.getItem('user_aux'))
    dispatch(fetchSuccessAuth({ user, access_token }))
    setSession({ user, access_token })
  }

  const updateValidPassword = (data) => {
    const { access_token } = JSON.parse(localStorage.getItem('user'))
    const user = { ...data, valid_password: true }
    dispatch(fetchSuccessAuth({ user, access_token }))
  }

  const logout = () => {
    setSession(null, true)
  }

  const authProviderValue = {
    ...state,
    handleAuthentication,
    workonAuthentication,
    switchAuthentication,
    updateValidPassword,
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
