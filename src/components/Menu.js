import React, { useEffect } from "react";
import { Card, Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Loading } from "./Loading";

import { baseUrl } from "../shared/baseUrl";
import  DishDetailCard  from './DishDetailCard';

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
           <DishDetailCard dish={dish} menu={true}/>
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