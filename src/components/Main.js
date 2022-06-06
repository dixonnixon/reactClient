// import logo from './logo.svg';
// import { Navbar } from 'react-bootstrap';


import  Menu  from './Menu';
import DishDetail from './DishDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';


// import { DISHES } from '../shared/dishes'
// import { COMMENTS } from '../shared/comments'
// import { PROMOTIONS } from '../shared/promotions'
// import { LEADERS } from '../shared/leaders'

import React from 'react';
import { Routes, Route, Navigate, useParams, useNavigate  } from 'react-router-dom';
import { connect } from 'react-redux';


//so wee need a state container to manage itself through a bunch of independent or related
//components *REDUX<-Flux, Elm, ImmutableJs
//1. It makes states mutations predictable
//2. Abilities:
/**
 * Logging of how state changing through time
 * API handling?
 * Undo/redo?
 * state persistance
 * "time-travel debugging"
 * 
 */
//3. Reducer  functions (can modify the states) Pure function, recieves the actions from dispatch
//  and returns the next state
//  it stored in store
//4. State tree is in the store
//5. State stored in plain obj
//  type field spec. how to change something in state () payload
//6. Redux store holds the state value
//  using methods createStore()
//  dispatch() - update state
//  getState() - get updated state from store
//  subscribe() - runs every time when action is dispatched
//7. use react-redux package with methods:
//  connect() - generate wrapper "container" that subscribes to the store
//    mapStateToProps() - ?
//    mapDispatchToProps() - ?
//  using <Provider> to wrap root

export const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <Component history={history} {...props} />;
	};
	return Wrapper;
};

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};


class Main extends React.Component {

  constructor(props) {
    super(props);

    // this.props = {
      // dishes: DISHES,
      // comments: COMMENTS,
      // promotions: PROMOTIONS,
      // leaders: LEADERS,
      // selectedDish: null
    // };
  }

  // handleSelectDish(dishId) {
  //   console.log(dishId);
  //   this.setState({
  //     selectedDish: dishId
  //   });
  // }

  render() {
      console.log(this.props.selectedDish, this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]);
      const HomePage = () => {
        return(
            <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }
      
      const DishWithId = () => {
        let params = useParams();
        // console.log("Match", match, params, this.props.comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10)));
        return (
          <DishDetail 
            dish={this.props.dishes
                .filter((dish) => dish.id === parseInt(params.dishId, 10))[0]
            }
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10))}
          />
        );
      };

      const AboutPage = () => {
        return (
          <About leaders={this.props.leaders} />
        );
      };
    
    return (
      <div >
        
        <Header />
        <Routes>
            <Route path="/"  >
              <Route path="home" element={<HomePage />}/>
              <Route path="aboutus" element={<AboutPage />}/>
              <Route path='menu' element={<Menu dishes={this.props.dishes}/>} />
                 {/*using arrayfunc for props passing*/}
              <Route path="menu/:dishId" element={<DishWithId />} />
              <Route path='contactus' element={ <Contact />} />
              <Route path="*" element={<HomePage />} />
            </Route>
            
           
        </Routes>
        {/* <Menu 
            dishes={this.props.dishes} 
            onClick={(dishId) => this.handleSelectDish(dishId)}
        />
        <DishDetail 
            dish={this.props.dishes
                .filter((dish) => dish.id === this.props.selectedDish)[0]
            }
        /> */}
        <Footer />
      </div>
    );
  }
  
}

export default withRouter(connect(mapStateToProps)(Main));
