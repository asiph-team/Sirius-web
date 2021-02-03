import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import {
  initialState, authReducer, fetchStartAuth, fetchSuccessAuth, fetchErrorAuth, fetchUserAlert,
} from '../../ducks/session'
import { urlApi, baseApiUrl } from '../helpers/consts'
import { getSubdomain } from '../helpers/functions'

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
    axios.get(`${getSubdomain().protocol + getSubdomain().sub}${urlApi}${baseApiUrl}courses/today`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => dispatch(fetchUserAlert(response.data)))
  }

  const setSession = (data, remove = false) => {
    if (remove) return localStorage.removeItem('user')
    localStorage.setItem('user', JSON.stringify(data))
    return null
  }

  const handleAuthentication = async (values) => {
    dispatch(fetchStartAuth())
    dispatch(fetchErrorAuth(null))
    try {
      const { hostname } = window.location
      const parts = hostname.split('.')
      localStorage.setItem('sub', JSON.stringify({ protocol: 'http://', sub: parts[0] === 'app' ? '' : `${parts[0]}.` }))
      const url = getSubdomain().sub === '' ? 'admin/' : 'users/'
      const response = await axios.post(`http://${parts[0]}${urlApi}${baseApiUrl}${url}login`, values)
      const { user, access_token, refresh_token, token_type, expires_at, rol } = response.data.data
      user.role = rol
      dispatch(fetchSuccessAuth({ user, access_token, refresh_token, token_type, expires_at }))
      setSession({ user, access_token, refresh_token, token_type, expires_at, url })
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
    localStorage.setItem('subDomain', `${enterprise}.`)
    dispatch(fetchErrorAuth(null))
    try {
      const url = values.email === 'superadmin@test.com' ? 'admin/login' : 'users/login'
      const response = await axios.post(`${getSubdomain().protocol + getSubdomain().sub + urlApi + baseApiUrl}users/login`, values)
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
