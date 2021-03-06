/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import {
  Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './Loader';
import Categories from './Categories';

const Menu = props => {
  if (props.meals.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.meals.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.meals.errMess}</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <Categories val={props.filters} filterChange={props.filterChange} />
          <hr />

        </div>
      </div>
      <div className="row">
        {props.meals.map(meal => (
          <div key={meal.idMeal} className="col-12 col-md-5 m-1">
            <Card>
              <Link to={`/menu/${meal.idMeal}`}>
                <CardImg width="100%" src={meal.strMealThumb} alt={meal.strMeal} />
                <CardImgOverlay>
                  <CardTitle className="mealName">{meal.strMeal}</CardTitle>

                </CardImgOverlay>
                <CardText className="category">{meal.strCategory}</CardText>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
