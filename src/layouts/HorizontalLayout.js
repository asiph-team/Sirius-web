import React, { PureComponent } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

class HorizontalLayout extends PureComponent {
    render(){
        return(
            <div classname="wrapper horizontal-layout">
                <Navbar horizontal />
                <div className="content-wrapper">{this.props.children}</div>
                <Footer />
            </div>
        )
    }
}

export default HorizontalLayout