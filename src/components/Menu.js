import React from "react";
import Card from 'react-bootstrap/Card';


import Image  from 'react-bootstrap/Image';
import ListGroup  from 'react-bootstrap/ListGroup';
import DishDetail from './DishDetail';

//mounting, updated, unmounting
//getDerivedStateFromProps
//componentDidMount

export  class Menu extends React.Component {

    componentDidMount() {
      console.log("componentDidMount() invoked");
    }

    render() {
        console.log("RenderMenu invoked");
        const menu = this.props.dishes.map((dish) => {
          console.log("Menu dish", dish);
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                 {/* <Card onClick={() => this.handleSelectDish(dish)}>
                  <Card.Img width="100%" variant="right" src={dish.image} alt={dish.name} />
                  <Card.ImgOverlay>
                      <Card.Title>{dish.name}</Card.Title>
                  </Card.ImgOverlay>
                </Card>  */}
                <DishDetail overlay="true" dish={dish} 
                  onClick={() => this.props.onClick(dish.id)}
                />
              </div>
                   
            );

        });

        return (
            <div className="container">
            <div className="row">
                  {menu}
            </div>
            {/* <div className="row">
                  {/* {this.renderDish(this.state.selectedDish)} 
                <DishDetail 
                  dish={this.state.selectedDish}
                  onClick={() => this.props.onClick(dish.id)}
                />
            </div> */}
          </div>
        );
    }
}