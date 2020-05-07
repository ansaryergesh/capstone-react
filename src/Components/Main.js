import React, {Component} from 'react';
import { url } from '../shared/url';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Home from './Home';
import { fetchTests } from '../redux/ActionCreators';
const mapStateToProps = state => {
    return {
        tests: state.tests,
    }
};

const mapDispathToProps = dispatch => ({
    fetchTests: () => {dispatch(fetchTests)}, 
});
class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
    }

    
    const HomePage = ({match}) => {
        return (
            <Home 
            dish={this.props.tests.filter(test => test.id === parseInt(match.params.testId, 10))[0]} 
            isLoading = {this.props.tests.isLoading}
            errMess = {this.props.tests.errMess}
                />
        );
    }
    render() {
        
        return(
            <Header />
            <Switch location={this.props.location}>
                <Route path = '/home' component = {() => <Home tests={this.props.tests}/>} />
                <Route path="/home/:testId" component={HomePage} />
                <Redirect to='/home' />
            </Switch>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispathToProps)(Main));
