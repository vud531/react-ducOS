
import React, { Component } from 'react';

import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import Tasks from './Tasks'
import { Route } from 'react-router-dom'
import "./styles/Container.css"
import "./styles/shared.css"
import { apps } from "../apps/apps"
import App from './App'

// theme
import withTheme from '../utils/withTheme'


class Container extends Component {

    state = {
        apps: apps,
        tasks: []
    }
    render = () => {
        console.log(this.props)
        return (
        <div className="Container" style={this.props.style}>
            {/* <header>Time</header> */}
            <section className='main-display'>
                <Route path='/' component={Home} />
                <Route 
                exact 
                path='/menu' 
                render={props => <Menu apps={this.state.apps} {...props}/>} />
                <Route path='/tasks' render={() => <Tasks />} />
                <Route path={`/apps/:app`} component={App} />

            </section>
            <Footer />

        </div>
        );
    }
    
}

export default withTheme(Container);
