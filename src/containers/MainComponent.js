/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from '../components/Home';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import MealDetail from '../components/DetailMenu';
import { fetchMeals, filterChange } from '../redux/actions/ActionCreators';
import Contact from '../components/Contact';

const mapStateToProps = (state) => ({
  meals: state.meals || [],
  filters: state.filters || [],
});

const mapDispathToProps = (dispatch) => ({
  fetchMeals: () => { dispatch(fetchMeals()); },
  filterChange: (filters) => { dispatch(filterChange(filters)); },
});


class MainComponent extends Component {
  componentDidMount() {
    this.props.fetchMeals();
  }

  render() {
    const MealWithId = ({ match }) => (
      <MealDetail
        meal={this.props.meals.meals.filter((meal) => meal.idMeal
          === match.params.mealId.toString())[0]}
        isLoading={this.props.meals.isLoading}
        errMess={this.props.meals.errMess}
      />
    );
    const mealsFilter = (filters) => {
      if (filters === 'All') {
        return this.props.meals.meals.filter((val) => val.strCategory !== 'All');
      }

      const opt = this.props.meals.meals.filter((val) => val.strCategory === this.props.filters);
      return opt;
    };


    return (
      <div className="App">
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={() => <Home />} />
              <Route exact path="/menu" component={() => <Menu meals={mealsFilter(this.props.filters)} filterChange={this.props.filterChange} />} />
              <Route path="/menu/:mealId" component={MealWithId} />
              <Route path="/contact" component={() => <Contact />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>

    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispathToProps)(MainComponent));
