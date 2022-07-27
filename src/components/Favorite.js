import React from 'react';

import {Breadcrumb,   Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';

function RenderMenuItem({ dish, deleteFavorite }) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img width="100%" variant="right" src={baseUrl + dish.image} 
                alt={dish.name}
            />
            <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Button outline color="danger" onClick={() => deleteFavorite(dish._id)}>
                    <span className="fa fa-times"></span>
                </Button>
            </Card.Body>
            </Card>
        
    );
}

const Favorites = (props) => {
    // console.log('Favorite', props);
    if (props.favorites.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.favorites.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.favorites.errMess}</h4>
                </div>
            </div>
        )
    }
    // else if (props.favorites.favorites.exists) {
    else if (props.favorites.favorites.favorites) {
        const favorites = props.favorites.favorites.favorites.dishes.map((dish) => {
            return (
                <div key={dish._id} className="col-lg-3 col-md-6 col-sm-6  col-xl-3  mt-2">
                    <RenderMenuItem dish={dish} deleteFavorite={props.deleteFavorite} />
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                       
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/home"}}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item  active>Menu</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My Favorites</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {favorites}
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="container">
                <div className="row">
                    <h4>You have no favorites</h4>
                </div>
            </div>
        )
    }
};





export default Favorites;