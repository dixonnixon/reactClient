// import logo from './logo.svg';
// import { Navbar } from 'react-bootstrap';


import  Menu  from './Menu';
import DishDetail from './DishDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';


import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'

import React from 'react';
import { Routes, Route, Navigate  } from 'react-router-dom';


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      // selectedDish: null
    };
  }

  // handleSelectDish(dishId) {
  //   console.log(dishId);
  //   this.setState({
  //     selectedDish: dishId
  //   });
  // }

  render() {
      console.log(this.state.selectedDish, this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]);
      const HomePage = () => {
        return(
            <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }
    
    return (
      <div >
        
        <Header />
        <Routes>
            <Route path="/"  >
              <Route path="home" element={<HomePage />}/>
              <Route path='menu' element={<Menu dishes={this.state.dishes}/>} /> {/*using arrayfunc for props passing*/}
              <Route path='contactus' element={ <Contact />} />
              <Route path="*" element={<HomePage />} />
            </Route>
            
           
        </Routes>
        {/* <Menu 
            dishes={this.state.dishes} 
            onClick={(dishId) => this.handleSelectDish(dishId)}
        />
        <DishDetail 
            dish={this.state.dishes
                .filter((dish) => dish.id === this.state.selectedDish)[0]
            }
        /> */}
        <Footer />
      </div>
    );
  }
  
}

export default Main;
