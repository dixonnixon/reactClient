// import logo from './logo.svg';
import { Navbar } from 'react-bootstrap';


import  {Menu}  from './Menu';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes'

import React from 'react';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  handleSelectDish(dishId) {
    console.log(dishId);
    this.setState({
      selectedDish: dishId
    });
  }

  render() {
      console.log(this.state.selectedDish, this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]);
    return (
      <div >
        <Navbar bg="light" color="primary"> 
          <div className="container">
            <Navbar.Brand href="/" bg="light">Retoran </Navbar.Brand>
          </div>
        </Navbar>
        <Menu 
            dishes={this.state.dishes} 
            onClick={(dishId) => this.handleSelectDish(dishId)}
        />
        <DishDetail 
            dish={this.state.dishes
                .filter((dish) => dish.id === this.state.selectedDish)[0]
            } 
        />
      </div>
    );
  }
  
}

export default Main;
