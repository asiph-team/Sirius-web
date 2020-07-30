const FETCH_START_AUTH = 'FETCH_START_AUTH'
const FETCH_SUCCESS_AUTH = 'FETCH_SUCCESS_AUTH'
const FETCH_ERROR_AUTH = 'FETCH_ERROR_AUTH'

export const fetchStartAuth = () => ({
    type: FETCH_START_AUTH,
})

export const fetchSuccessAuth = payload => ({
    type: FETCH_SUCCESS_AUTH,
    payload
})

export const fetchErrorAuth = payload => ({
    type: FETCH_ERROR_AUTH,
    payload
})

export const initialState = {
    accessToken: null,
    error: null,
    loading: false,
    user: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START_AUTH:
            return {...state, loading: true}
        case FETCH_SUCCESS_AUTH:
            const { user, accessToken } = action.payload
            return {...state, user, accessToken}
        case FETCH_ERROR_AUTH:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}