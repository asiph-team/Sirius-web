import React, { createContext, useReducer } from 'react'
import { initialState, authReducer } from '../../hooks/session'

const ContextAuth = createContext({
    authenticated: false,
    user: null,
    accessToken: null,
    initiateLogin: () => {},
    handleAuthentication: () => {},
    logout: () => {}
})

const Auth = props => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const handleAuthentication = values => {
        dispatch({type: 'SET_USER'})
    }

    const logout = () => {
        console.log('CIERRO LOGOUT')
    }

    const setSession = (authResult) => {

    }

    const authProviderValue = {
        ...state,
        handleAuthentication,
        logout
    }

    return (
        <ContextAuth.Provider value={authProviderValue}>
            {props.children}
        </ContextAuth.Provider>
    )
}

export {Auth, ContextAuth};