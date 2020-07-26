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
        lastLayout: null,
    }

    updateWidth = () => {
        this.setState({ width: window.innerWidth })
    }

    handleWindowResize = () => {
        const { activeLayout, lastLayout, width } = this.state
        this.updateWidth()
        if (activeLayout === 'horizontal' && width <= 1199) {
            this.setState({ activeLayout: 'vertical', lastLayout: 'horizontal' })
        }

        if (lastLayout === 'vertical' && width >= 1199) {
            this.setState({ activeLayout: 'horizontal', lastLayout: 'vertical' })
        }
    }

    componentDidMount = () => {
        const {activeLayout, width} = this.state;
        if (window !== 'undefined') {
            window.addEventListener('resize', this.handleWindowResize)
        }

        if (activeLayout === 'horizontal' && width <= 1199) {
            this.setState({ activeLayout: 'vertical'})
        } else if (themeConfig.layout === 'horizontal' && width >= 1200) {
            this.setState({ activeLayout: 'horizontal'})
        } else {
            this.setState({ activeLayout: 'vertical' })
        }
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
                    switchLayout: layout => this.setState({ activeLayout: layout })
                }}
            >
                {children}
            </ContextLayout.Provider>
        )
    }
}

export { Layout, ContextLayout }