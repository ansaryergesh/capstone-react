import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import MealDetail from './DetailMenu';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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

const MealWithId = ({match}) => {
    return (
        <MealDetail 
        meal={this.props.meals.meals.filter(meal => meal.id === parseInt(match.params.mealId, 10))[0]} 
        isLoading = {this.props.meals.isLoading}
        errMess = {this.props.meals.errMess}
            />
    );
}


class MainComponent extends Component {
    componentDidMount() {
        this.props.fetchMeals();
    }
    
    render() {
        
        return (
            <div className='App'>
            <Header />
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                    <Switch>
                        <Route path = '/home' component={() => <Home/>}/>
                        <Route exact path='/menu' component={() => <Menu meals={this.props.meals} />} />
                        <Route path="/menu/:mealId" component={MealWithId} />
                        <Route path='/categories' component={() => <Category />} />
                        <Redirect to='/home' />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer/>
            </div>
         
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispathToProps)(MainComponent));