import React,{ createContext, Component } from 'react'

const ContextAuth = createContext({
    authenticated: false,
    user: null,
    accessToken: null,
    initiateLogin: () => {},
    handleAuthentication: () => {},
    logout: () => {}
})

class Auth extends Component {
    state = {
        accessToken: null,
        authenticated: false,
        user: null,
    }

    handleAuthentication = values => {
        console.log(values)
    }

    logout = () => {
        console.log('CIERRO LOGOUT')
    }

    setSession(authResult) {

    }

    render() {
        const authProviderValue = {
            ...this.state,
            handleAuthentication: this.handleAuthentication,
            logout: this.logout
        }

        return (
            <ContextAuth.Provider value={authProviderValue}>
                {this.props.children}
            </ContextAuth.Provider>
        )
    }
}

export {Auth, ContextAuth};