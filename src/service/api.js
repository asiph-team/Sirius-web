import axios from 'axios'
import { baseApiUrl, urlApi } from '../utility/helpers/consts'
import { getSubdomain } from '../utility/helpers/functions'
import { history } from '../history'

console.log('window.location', window.location)

const BASE_URL = urlApi + baseApiUrl
const api = axios.create({
  baseURL: getSubdomain().protocol + getSubdomain().sub + BASE_URL,
  timeoutErrorMessage: 'No fue posible conectarse al servidor',
})

const setAuthHeader = (props, url) => {
  const { access_token, refresh_token, token_type, expires_at, rol, user } = props
  const data = {
    access_token,
    expires_at,
    refresh_token,
    token_type,
    url,
    user: {
      ...user,
      role: rol,
    },
    refreshed: true,
  }
  localStorage.setItem('user', JSON.stringify(data))
}

const logout = () => {
  localStorage.removeItem('user')
  history.push('/')
}

api.interceptors.request.use(
  async (config) => {
    const { access_token: accessToken } = JSON.parse(localStorage.getItem('user'))
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config
    const { refresh_token: refreshToken, url } = JSON.parse(localStorage.getItem('user'))
    if (refreshToken
      && error.response.status === 500
      && originalRequest.url === 'users/refresh-token') { logout() }
    if (
      refreshToken
      && (error.response.status === 500 || error.response.status === 401)
      && !originalRequest._retry
    ) {
      originalRequest._retry = true
      return api
        .post(`${url}refresh-token`, { refresh_token: refreshToken })
        .then((res) => {
          if (res.status === 200) {
            setAuthHeader(res.data.data, url)
            return api(originalRequest)
          }
          logout()
        })
    }
    return Promise.reject(error)
  },
)

export default api
