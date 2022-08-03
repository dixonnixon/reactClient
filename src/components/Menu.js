import React, { useEffect } from "react";
import { Card, Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    //   // console.log("componentDidMount() invoked Menu");
    // }

    // render() {
function RenderMenuItem({dish}) {
  return (
    // <Card onClick={() => onClick(dish.id)}>
    
    <Card key={dish._id}>
        <Link to={`/menu/${dish._id}`}>
        <Card.Img width="100%" variant="right" src={baseUrl + dish.image} alt={dish.name} />
        <Card.ImgOverlay>
            <Card.Title>{dish.name}</Card.Title>
        </Card.ImgOverlay>
        </Link>
    </Card> 
  );
}

const Menu = (props) => {
  console.log("RenderMenu invoked", props, useEffect(() => {
    console.log("effect");
  }));
  const menu = props.dishes.dishes.map((dish) => {
    // console.log("Menu dish", dish);
      return (
        
         <Col key={dish._id} xs={12} lg={3} md={4}>
            
            {/* <Card onClick={() => this.handleSelectDish(dish)}> */}
         
           {/* <DishDetail overlay="true" dish={dish} 
             onClick={() => this.props.onClick(dish.id)}
           /> */}
           {/* <RenderMenuItem dish={dish} onClick={props.onClick}/> */}
           <RenderMenuItem  dish={dish} />
         </Col>
             
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
      <Container>
          <Row>
              <h4>{props.dishes.errmsg}</h4>
          </Row>
      </Container>
    );
  }
  else
    return (
        <Container>
          <Row>
            <Col xs={12}>
              <Breadcrumb>
                {/* <Breadcrumb.Item href="/home">Home */}
                {/* <Link to="/home">Home</Link> */}
                {/* </Breadcrumb.Item>  */}
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/home"}}>Home</Breadcrumb.Item>
                <Breadcrumb.Item  active>Menu</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col xs={12}>
              <h3>Menu</h3>
              <hr />
              <Row>
                  {menu}
              </Row>
            </Col>
          </Row>
          
          
          {/* <div className="row">
               {this.renderDish(this.state.selectedDish)} 
            <DishDetail 
              dish={this.state.selectedDish}
              onClick={() => this.props.onClick(dish.id)}
            />*/}
        </Container>
    );
};

       
    // }
// }

export default Menu;