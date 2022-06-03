// import logo from './logo.svg';
// import { Navbar } from 'react-bootstrap';


import  Menu  from './Menu';
import DishDetail from './DishDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';


import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'

import React from 'react';
import { Routes, Route, Navigate, useParams  } from 'react-router-dom';


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
      
      const DishWithId = () => {
        let params = useParams();
        // console.log("Match", match, params, this.state.comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10)));
        return (
          <DishDetail 
            dish={this.state.dishes
                .filter((dish) => dish.id === parseInt(params.dishId, 10))[0]
            }
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10))}
          />
        );
      };

      const AboutPage = () => {
        return (
          <About leaders={this.state.leaders} />
        );
      };
    
    return (
      <div >
        
        <Header />
        <Routes>
            <Route path="/"  >
              <Route path="home" element={<HomePage />}/>
              <Route path="aboutus" element={<AboutPage />}/>
              <Route path='menu' element={<Menu dishes={this.state.dishes}/>} />
                 {/*using arrayfunc for props passing*/}
              <Route path="menu/:dishId" element={<DishWithId />} />
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
