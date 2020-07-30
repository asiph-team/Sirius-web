import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import { initialState, authReducer, fetchStartAuth, fetchSuccessAuth, fetchErrorAuth } from '../../ducks/session'

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

    const handleAuthentication = async values => {
        dispatch(fetchStartAuth())
        try {
            const response = await axios.post('/api/authenticate/login/user', values)
            dispatch(fetchSuccessAuth(response.data))
        } catch (error) {
            dispatch(fetchErrorAuth(error.response.data.error))
        }
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