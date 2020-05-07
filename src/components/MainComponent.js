import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMeals,} from '../redux/ActionCreators';
import Category from './Categories';
const mapStateToProps = state => {
    return {
      meals: state.meals,
    }
}

const mapDispathToProps = dispatch => ({
  fetchMeals: () => {dispatch(fetchMeals())},
});


class MainComponent extends Component {
    componentDidMount() {
        this.props.fetchMeals();
    }
    
    render() {
        
        return (
            <div className='App'>
            <Header />
            <Switch>
                <Route path = '/home' component={() => <Home/>}/>
                <Route path='/menu' component={() => <Menu meals={this.props.meals} />} />
                <Route path='/categories' component={() => <Category />} />
                <Redirect to='/home' />
            </Switch>
            <Footer/>
            </div>
         
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispathToProps)(MainComponent));