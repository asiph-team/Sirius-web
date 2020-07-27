import React from 'react'
import VerticalLayout from '../../layouts/VerticalLayout'
import FullLayout from '../../layouts/FullpageLayout'
import themeConfig from '../../configs/themeConfig'

const layouts = {
    vertical: VerticalLayout,
    full: FullLayout
}

const ContextLayout = React.createContext()

class Layout extends React.Component {
    state = {
        activeLayout: themeConfig.layout,
        width: window.innerWidth,
    }

    render() {
        const { children } = this.props;
        return (
            <ContextLayout.Provider
                value={{
                    state: this.state,
                    fullLayout: layouts["full"],
                    VerticalLayout: layouts["vertical"],
                    horizontalLayout: layouts["horizontal"],
                }}
            >
                {children}
            </ContextLayout.Provider>
        )
    }
}

export { Layout, ContextLayout }