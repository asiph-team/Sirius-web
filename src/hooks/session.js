export const initialState = {
    accessToken: null,
    authenticated: false,
    user: null,
    loading: false,
    error: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, user: true}
        default:
            return state
    }
}