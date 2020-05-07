import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Welcome!</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Today there are a lot of different restaurants and cafes where you can eat delicious and expensive food. In restaurants people can also meet and communicate with their friends, relatives or business partners.

There are many types of restaurants. They are divided into groups for price class, for service type (fast food, smorgasbord, a la carte), for type of cuisine (Italian, Chinese, Japanese, Indian and others).

Fast food is very popular and saves time for busy working people and it is not expensive. For example, McDonald's restaurants sell what is called "fast" or "junk" food — hamburgers, chips and so on. Such food is very popular, especially with children and teenagers. Personally, I don’t go to fast food restaurants often because I think that fast food is tasty, cheap but it is not completely healthy. But sometimes I can relax, enjoy the food and celebrate some event with my friends there.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a restaurants</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started at 2020</dt>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home;