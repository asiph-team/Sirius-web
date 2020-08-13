const FETCH_START = 'FETCH_START'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'
const CLEAN = 'CLEAN'

export const fetchStart = () => ({
  type: FETCH_START,
})

export const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
})

export const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload,
})

export const cleanState = () => ({
  type: CLEAN,
})

export const initialState = {
  error: null,
  loading: false,
  data: null,
}

export const resourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true }
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload }
    case CLEAN:
      return { ...state, ...initialState }
    default:
      return state
  }
}
