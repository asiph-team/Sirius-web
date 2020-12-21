const FETCH_START = 'FETCH_START'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_SEARCH = 'FETCH_SEARCH'
const FETCH_ERROR = 'FETCH_ERROR'
const FETCH_ORDER = 'FETCH_ORDER'
const CLEAN = 'CLEAN'
const UPDATE_STATUS = 'UPDATE_STATUS'
const UPDATE_SIGNATURE = 'UPDATE_SIGNATURE'

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

export const updateStatus = (payload, field, sw) => ({
  type: UPDATE_STATUS,
  payload,
  field,
  sw,
})

export const fetchSignature = (payload, field, list) => ({
  type: UPDATE_SIGNATURE,
  payload,
  field,
  list,
})

export const fetchOrder = (payload, order, data) => ({
  type: FETCH_ORDER,
  payload,
  order,
  data,
})

export const initialState = {
  error: null,
  loading: false,
  items: null,
  temp: null,
  order: null,
}

export const resourcesReducer = (state = initialState, action) => {
  let newData = null
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true }
    case FETCH_SUCCESS:
      return { ...state, loading: false, items: action.payload }
    case FETCH_SEARCH:
      return {
        ...state,
        loading: false,
        items: action.payload,
        temp: action.data,
      }
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload }
    case FETCH_ORDER:
      return {
        ...state,
        loading: false,
        items: action.payload,
        temp: action.data,
      }
    case CLEAN:
      return { ...state, ...initialState }
    case UPDATE_STATUS:
      const { items } = state
      const { data: dataItems } = items
      const { data: { data } } = items
      const { payload: { id }, field, sw } = action
      if (sw) {
        newData = data.map((obj) => obj.id === id ? { ...obj, signature: field.signature, status: field.status } : obj)
      } else {
        newData = data.map((obj) => obj.id === id ? { ...obj, [field]: !obj[field] } : obj)
      }
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
    case UPDATE_SIGNATURE:
      const dataNew = action.list.data.data.map((obj) => obj.id === action.field.id ? { ...obj, signature: action.field.signature.signature, assistance: 'attended', status: 'attended' } : obj)
      const newList = {
        ...action.list,
        data: {
          ...action.list.data,
          data: dataNew,
        },
      }
      return {
        ...state,
        loading: false,
        items: newList,
      }
    default:
      return state
  }
}
