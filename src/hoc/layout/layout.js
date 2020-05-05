import React, { Component } from 'react';
import './layout.css'


//components
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


class Layout extends Component {
    state = {
       showNav:false 
    }
    togglesidenav = (action) =>{
        this.setState({
            showNav:action
        })

    }
    render (){
        return(
            <div>
                <Header 
                showNav={this.state.showNav}
                onHideNav={() => this.togglesidenav(false)}
                onOpenNav={() => this.togglesidenav(true)}
                />
                {this.props.children}
                <Footer/>
            </div>
        )
    }

}

export default Layout;