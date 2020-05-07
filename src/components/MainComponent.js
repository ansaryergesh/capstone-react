import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {Switch, Route, Redirect} from 'react-router-dom';

class MainComponent extends Component {
    render() {
        return (
            <div className='App'>
            <Header />
            <Switch>
                <Route path = '/home' component={() => <Home/>}/>
                <Redirect to='/home' />
            </Switch>
            <Footer/>
            </div>
         
        )
    }
}

export default MainComponent;