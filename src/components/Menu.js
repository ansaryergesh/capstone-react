import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from './Loader';
function RenderMenuItem ({meal, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${meal.idMeal}`} >
                <CardImg width="100%" src={meal.strMealThumb} alt={meal.strMeal} />
                <CardImgOverlay>
                    <CardTitle>{meal.strMeal}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}


const Menu = props => {

    // const menu = () => {
    // for(let meal of props.meals.meals) {
    //     return(
    //         <div key = {meal.idMeal} className='col-12 col-md-5 m-1'>
    //             <RenderMenuItem meal={meal} />
    //         </div>
    //     )
    // }
    // }
    // const menu = props.meals.meals.meals.map(dish => {
    //     return (
    //         <div key={dish.id} className="col-12 col-md-5 m-1">
    //             <RenderMenuItem dish={dish} />
    //         </div>
    //     )
    // });



    if(props.meals.isLoading) {
        return(
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.meals.errMess) {
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{props.meals.errMess}</h4>
                </div>
            </div>
        )
    }
    else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderMenuItem meal={props.meals.meals.meals[0]} />
                </div>
            </div>
        );
}

export default Menu;