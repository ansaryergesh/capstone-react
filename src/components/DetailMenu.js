/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, CardImg, CardText, CardColumns, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
import ReactPlayer from 'react-player';
import { Loading } from './Loader';

function RenderMeal({ meal }) {
  return (

    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)',
      }}
    >
      <CardColumns>
        <Card>
          <CardImg width="100%" src={meal.strMealThumb} alt={meal.strMeal} />
          <CardBody>
            <CardTitle>{meal.strMeal}</CardTitle>
            <CardText>{meal.strInstructions}</CardText>
          </CardBody>
        </Card>
        <Card className="rightCard">
          <p className="strTags">{meal.strTags}</p>
          <CardBody>
            <CardTitle>Video:</CardTitle>
            <ReactPlayer
              className="youtube"
              url={`${meal.strYoutube}`}
            />
          </CardBody>
        </Card>
      </CardColumns>


    </FadeTransform>
  );
}
const MealDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  if (props.meal) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.meal.strMeal}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.meal.strMeal}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <RenderMeal meal={props.meal} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div />
  );
};

export default MealDetail;
