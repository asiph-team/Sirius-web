const FETCH_START_ENTERPRISES = 'FETCH_START_ENTERPRISES'
const FETCH_SUCCESS_ENTERPRISES = 'FETCH_SUCCESS_ENTERPRISES'
const FETCH_ERROR_ENTERPRISES = 'FETCH_ERROR_ENTERPRISES'

export const fetchStartEnterprises = () => ({
    type: FETCH_START_ENTERPRISES,
})

export const fetchSuccessEnterprises = payload => ({
    type: FETCH_SUCCESS_ENTERPRISES,
    payload
})

export const fetchErrorEnterprises = payload => ({
    type: FETCH_ERROR_ENTERPRISES,
    payload
})

export const initialState = {
    error: null,
    loading: false,
    enterprises: null,
}

export const enterprisesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START_ENTERPRISES:
            return {...state, loading: true}
        case FETCH_SUCCESS_ENTERPRISES:
            return {...state, loading: false, enterprises: action.payload}
        case FETCH_ERROR_ENTERPRISES:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}