import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AuthContext from './context/Auth';
import { baseUrl } from "../shared/baseUrl";
import { Button } from 'react-bootstrap';


export default function DishDetailCard({dish, menu, favorite, postFavorite}) {
    let image = 'images/empty.png';
    if(/^\w+\/\w+\.\w+/.test(dish.image)) {
        image = dish.image;
    }
    console.log("image", image);
    if(menu) {
        return (
            <Card key={dish._id}>
                <Link to={`/menu/${dish._id}`}>
                <Card.Img width="100%" variant="right" src={baseUrl + image} alt={dish.name} />
                <Card.ImgOverlay>
                    <Card.Title>{dish.name}</Card.Title>
                </Card.ImgOverlay>
                </Link>
            </Card> 
        );
    }

    return (
        <AuthContext.Consumer>
            {(isAuthenticated) => {
                let isFavoriteButton =  (isAuthenticated === false) ? "" : <Button 
                    color="primary" 
                    onClick={() => favorite ?  console.log('Already favorite') : postFavorite(dish._id)}>
                    {favorite ?
                        <span className="fa fa-heart"></span>
                        : 
                        <span className="fa fa-heart-o"></span>
                    }
                </Button>;

                return (
                    <Card >
                        <Card.Img width="100%" variant="right" src={baseUrl + image} 
                            alt={dish.name}
                        />
                        <Card.ImgOverlay>
                        {isFavoriteButton}
                        </Card.ImgOverlay>
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>
                            <Card.Text>{dish.description}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            }}
        </AuthContext.Consumer>
        
    );
    
};