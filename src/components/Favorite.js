import React from 'react';

import {Breadcrumb,   Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import  DishDetailCard  from './DishDetailCard';

function RenderMenuItem({ dish, deleteFavorite }) {
    return(
        
        <DishDetailCard dish={dish} deleteFavorite={deleteFavorite} isFavorite={true} />
    );
}

const Favorites = (props) => {
    console.log('Favorite', props);
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
    else if (props.favorites.favorites) {
        const favorites = props.favorites.favorites.dishes.map((dish) => {
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