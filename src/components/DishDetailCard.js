import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AuthContext from './context/Auth';
import { baseUrl } from "../shared/baseUrl";
import { Button } from 'react-bootstrap';


export default function DishDetailCard({dish, menu, favorite, isFavorite, postFavorite, deleteFavorite}) {
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

                if(isFavorite) {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img width="100%" variant="right" src={baseUrl + image} 
                                alt={dish.name}
                            />
                            <Card.Body>
                                <Card.Title>{dish.name}</Card.Title>
                                <Card.Text>{dish.description}</Card.Text>
                                <Button  color="danger" onClick={() => deleteFavorite(dish._id)}>
                                    <span className="fa fa-times"></span>
                                </Button>
                            </Card.Body>
                        </Card>
                    );
                }

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