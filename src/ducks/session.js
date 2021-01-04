const FETCH_START_AUTH = 'FETCH_START_AUTH'
const FETCH_SUCCESS_AUTH = 'FETCH_SUCCESS_AUTH'
const FETCH_ERROR_AUTH = 'FETCH_ERROR_AUTH'
const FETCH_USER_ALERT = 'FETCH_USER_ALERT'

export const fetchStartAuth = () => ({
  type: FETCH_START_AUTH,
})

export const fetchSuccessAuth = (payload) => ({
  type: FETCH_SUCCESS_AUTH,
  payload,
})

export const fetchErrorAuth = (payload) => ({
  type: FETCH_ERROR_AUTH,
  payload,
})

export const fetchUserAlert = (payload) => ({
  type: FETCH_USER_ALERT,
  payload,
})

export const initialState = {
  accessToken: null,
  error: null,
  loading: false,
  user: null,
  alert: null,
  enterprise: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START_AUTH:
      return { ...state, loading: true }
    case FETCH_SUCCESS_AUTH:
      const { user, access_token, enterprise } = action.payload
      return { ...state, user, accessToken: access_token, enterprise }
    case FETCH_ERROR_AUTH:
      return { ...state, loading: false, error: action.payload }
    case FETCH_USER_ALERT:
      return { ...state, loading: false, alert: action.payload }
    default:
      return state
  }
}
