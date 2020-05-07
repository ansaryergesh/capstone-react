import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import {Switch, Route, Redirect} from 'react-router-dom';
import Category from './Categories';

class MainComponent extends Component {
    render() {
        return (
            <div className='App'>
            <Header />
            <Switch>
                <Route path = '/home' component={() => <Home/>}/>
                <Route path='/menu' component={() => <Menu />} />
                <Route path='/categories' component={() => <Category />} />
                <Redirect to='/home' />
            </Switch>
            <Footer/>
            </div>
         
        )
    }
}

export default MainComponent;