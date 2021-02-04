import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import {
  initialState, authReducer, fetchStartAuth, fetchSuccessAuth, fetchErrorAuth, fetchUserAlert,
} from '../../ducks/session'
import { urlApi, baseApiUrl } from '../helpers/consts'
import { setDomain, getSubdomain } from '../helpers/functions'
import { history } from '../../history'

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
    axios.get('http://' + JSON.parse(localStorage.getItem('sub')) + urlApi + baseApiUrl + 'courses/today', { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => dispatch(fetchUserAlert(response.data)))
  }

  const setSession = (data, remove = false) => {
    if (remove) return localStorage.clear()
    localStorage.setItem('user', JSON.stringify(data))
    return null
  }
  const handleAuthentication = async (values) => {
    setDomain(window.location.hostname)
    dispatch(fetchStartAuth())
    dispatch(fetchErrorAuth(null))
    try {
      let enterpriseData = { name: 'Super Administrador', subDomain: null }
      const url = getSubdomain() === '' ? 'admin/' : 'users/'
      const response = await axios.post(`http://${JSON.parse(localStorage.getItem('sub')) + urlApi + baseApiUrl + url}login`, values)
      const { user, access_token, refresh_token, token_type, expires_at, rol } = response.data.data
      user.role = rol
      if (rol !== 'superadministrator') {
        const { enterprise } = response.data.data
        enterpriseData = enterprise
      }
      dispatch(fetchSuccessAuth({ user, access_token, refresh_token, token_type, expires_at, enterprise: enterpriseData.name }))
      setSession({ user, access_token, refresh_token, token_type, expires_at, url })
      if (rol !== 'superadministrator') { getAlert(access_token) }
    } catch (error) {
      const { response: { data: { message } } } = error
      dispatch(fetchErrorAuth(message))
    }
  }

  const workonAuthentication = async (values) => {
    const { enterprise } = values
    setDomain(`${enterprise}.app.sinjury.cl`)
    const prevAuth = localStorage.getItem('user')
    localStorage.setItem('user_aux', prevAuth)
    localStorage.setItem('sub', JSON.stringify(`${enterprise.subDomain}.`))
    dispatch(fetchErrorAuth(null))
    try {
      const response = await axios.post(`http://${`${enterprise.subDomain}.${urlApi + baseApiUrl}`}users/login`, values)
      const { user, access_token, rol } = response.data.data
      user.role = rol
      dispatch(fetchSuccessAuth({ user, access_token, enterprise: enterprise.name }))
      setSession({ user, access_token })
      getAlert(access_token)
      localStorage.setItem('workon', true)
      return history.push('/dashboard')
    } catch (error) {
      const { response: { data: { message } } } = error
      dispatch(fetchErrorAuth(message))
    }
  }

  const switchAuthentication = async () => {
    const { user, access_token } = JSON.parse(localStorage.getItem('user_aux'))
    dispatch(fetchSuccessAuth({ user, access_token }))
    setSession({ user, access_token })
    setDomain('app.sinjury.cl')
    localStorage.removeItem('workon')
    return history.push('/dashboard/enterprises')
  }

  const updateValidPassword = (data) => {
    const { access_token: accessToken } = JSON.parse(localStorage.getItem('user'))
    const user = { ...data, valid_password: true }
    dispatch(fetchSuccessAuth({ user, accessToken }))
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
