import React from "react";
import { Card, Breadcrumb } from 'react-bootstrap';
import {Link, Outlet } from 'react-router-dom';
import { Loading } from "./Loading";

import { baseUrl } from "../shared/baseUrl";
// import Image  from 'react-bootstrap/Image';
// import ListGroup  from 'react-bootstrap/ListGroup';
// import DishDetail from './DishDetail';

//mounting, updated, unmounting
//getDerivedStateFromProps
//componentDidMount

// export  class Menu extends React.Component {

    // componentDidMount() {
    //   console.log("componentDidMount() invoked Menu");
    // }

    // render() {
function RenderMenuItem({dish, onClick}) {
  return (
    // <Card onClick={() => onClick(dish.id)}>
    <Card >
        <Link to={`/menu/${dish.id}`} key={dish.id}>
        <Card.Img width="100%" variant="right" src={baseUrl + dish.image} alt={dish.name} />
        <Card.ImgOverlay>
            <Card.Title>{dish.name}</Card.Title>
        </Card.ImgOverlay>
        </Link>
    </Card> 
  );
}

const Menu = (props) => {
  console.log("RenderMenu invoked");
  const menu = props.dishes.dishes.map((dish) => {
    console.log("Menu dish", dish);
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
           {/* <Card onClick={() => this.handleSelectDish(dish)}> */}
           
          {/* <DishDetail overlay="true" dish={dish} 
            onClick={() => this.props.onClick(dish.id)}
          /> */}
          {/* <RenderMenuItem dish={dish} onClick={props.onClick}/> */}
          <RenderMenuItem dish={dish} />
        </div>
             
      );

  });

  if(props.dishes.isLoading) {
    return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
    );
  }
  else if(props.dishes.errmsg) {
    return (
      <div className="container">
          <div className="row">
              <h4>{props.dishes.errmsg}</h4>
          </div>
      </div>
    );
  }
  else
    return (
        <div className="container">
        <div className="row">
          <Breadcrumb>
            {/* <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item> */}
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/home"}}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Menu</Breadcrumb.Item>
          </Breadcrumb>
          <div className="col-sm-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
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
};

       
    // }
// }

export default Menu;