import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem,CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
const Testing = ({meal}) => {
    return (
        <div className="col-12 col-md-5 m-1">
        <Card>
            <Link to={`/menu/${meal.idMeal}`} >
                <CardImg width="100%" src={meal.strMealThumb} alt={meal.strMeal} />
                <CardImgOverlay>
                    <CardTitle className='mealName'>{meal.strMeal}</CardTitle>
                  
                </CardImgOverlay>
                <CardText className='category'>{meal.strCategory}</CardText>
            </Link>
        </Card>
    </div>
    )
}

export default Testing;