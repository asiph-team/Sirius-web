const FETCH_START = 'FETCH_START'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_SEARCH = 'FETCH_SEARCH'
const FETCH_ERROR = 'FETCH_ERROR'
const CLEAN = 'CLEAN'
const UPDATE_STATUS = 'UPDATE_STATUS'

export const fetchStart = () => ({
  type: FETCH_START,
})

export const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
})
export const fetchSearch = (payload, data) => ({
  type: FETCH_SEARCH,
  payload,
  data,
})

export const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload,
})

export const cleanState = () => ({
  type: CLEAN,
})

export const updateStatus = (payload, field) => ({
  type: UPDATE_STATUS,
  payload,
  field,
})

export const initialState = {
  error: null,
  loading: false,
  items: null,
  temp: null,
}

export const resourcesReducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true }
    case FETCH_SUCCESS:
      return { ...state, loading: false, items: action.payload }
    case FETCH_SEARCH:
      return { ...state, loading: false, items: action.payload, temp: action.data }
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload }
    case CLEAN:
      return { ...state, ...initialState }
    case UPDATE_STATUS:
      const { items } = state
      const { data: dataItems } = items
      const { data: { data } } = items
      const { payload: { id }, field } = action
      const newData = data.map((obj) => obj.id === id ? { ...obj, [field]: !obj[field] } : obj)
      const newItems = {
        ...items,
        data: {
          ...dataItems,
          data: newData,
        },
      }
      return {
        ...state,
        loading: false,
        items: newItems,
      }
    default:
      return state
  }
}
