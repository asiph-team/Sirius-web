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
    const savedState = localStorage.getItem('user')

    const [state, dispatch] = useReducer(authReducer, savedState ? JSON.parse(savedState) : initialState)

    const handleAuthentication = async values => {
        dispatch(fetchStartAuth())
        try {
            const response = await axios.post('/api/authenticate/login/user', values)
            dispatch(fetchSuccessAuth(response.data))
            setSession(response.data)
        } catch (error) {
            dispatch(fetchErrorAuth(error.response.data.error))
        }
    }

    const setSession = (data, remove = false) => {
        if (remove) return localStorage.clear();
        else localStorage.setItem('user', JSON.stringify(data));
    }

    const logout = () => {
        setSession(null, true)
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