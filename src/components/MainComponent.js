import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import MealDetail from './DetailMenu';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { fetchMeals, filterChange} from '../redux/ActionCreators';
import Contact from './Contact';
const mapStateToProps = state => {
    return {
      meals: state.meals || [],
      filters: state.filters || [],
    }
}

const mapDispathToProps = dispatch => ({
  fetchMeals: () => {dispatch(fetchMeals())},
  filterChange: (filters) => {dispatch(filterChange(filters))}
});



class MainComponent extends Component {
    componentDidMount() {
        this.props.fetchMeals();
        
    }
    
    render() {
        const MealWithId = ({match}) => {
            return (
                <MealDetail 
                meal={this.props.meals.meals.meals.filter(meal => meal.idMeal === match.params.mealId.toString())[0]} 
                isLoading = {this.props.meals.isLoading}
                errMess = {this.props.meals.errMess}
                    />
            );
        }

        const mealsFilter = filters => {
            if (filters === 'All') {
              return this.props.meals
            }
            const opt = this.props.meals.meals.meals.map(val => val.strCategory === filters);
            return opt;
        };
        
   
        return (
            <div className='App'>
            <Header />
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                    <Switch>
                        <Route path = '/home' component={() => <Home/>}/>
                        <Route exact path='/menu' component={() => <Menu meals={mealsFilter(this.props.filters)} filterChange={this.props.filterChange} />} />
                        <Route path="/menu/:mealId" component={MealWithId} />
                        <Route path='/contact' component={() => <Contact />} />
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