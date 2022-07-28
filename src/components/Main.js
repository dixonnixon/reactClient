// import logo from './logo.svg';
// import { Navbar } from 'react-bootstrap';


import  Menu  from './Menu';
import DishDetail from './DishDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Favorites from './Favorite';



// import { DISHES } from '../shared/dishes'
// import { COMMENTS } from '../shared/comments'
// import { PROMOTIONS } from '../shared/promotions'
// import { LEADERS } from '../shared/leaders'

import React, { Component } from 'react';
import { Routes, Route,  useParams, useNavigate, Navigate, Outlet  } from 'react-router-dom';
import { connect } from 'react-redux';

// import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators'; //actionCrator 
import { postComment,  fetchComments, fetchPromos, 
  fetchLeaders, postFeedback, fetchDishes,
  fetchFavorites, postFavorite,
  loginUser, logoutUser, deleteFavorite
} from '../redux/ActionCreators'; //actionCrator 
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Nav } from 'react-bootstrap';


import AuthContext from './context/Auth';
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

const parseJwt = (token) => {
  // console.log("token", JSON.parse(atob(token.split('.')[1])));
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};
export const withRouter = (Component) => {

	const Wrapper = (props) => {
    const navigate = useNavigate();
    // console.log("history", navigate, props, props.history);


    // props.history.push(props.history.location.pathname);

    
		return <Component {...props} navigate={navigate}/>;
	};
	return Wrapper;
};

const mapStateToProps = state => {
  // console.log("mapState", state);
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    favorites: state.favorites,
    auth: state.auth,
  };
};


//here actions passed into the component
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)), //here is an imported action creator for Comment to change our app state 
  postFeedback: (feedback) => dispatch(postFeedback(feedback)), //here is an imported action creator for Comment to change our app state 
  fetchDishes: () => {dispatch(fetchDishes())}, //pass our ActionCreator of fetchDishes into the props of main component
  fetchPromos: () => {dispatch(fetchPromos())}, //pass our ActionCreator of fetchDishes into the props of main component
  fetchLeaders: () => {dispatch(fetchLeaders())}, //pass our ActionCreator of fetchDishes into the props of main component
  fetchComments: () => {dispatch(fetchComments())}, //pass our ActionCreator of fetchDishes into the props of main component
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  loginUser: (credentials) => dispatch(loginUser(credentials)),
  logoutUser: () => dispatch(logoutUser()),
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId)),
  fetchFavorites: () => dispatch(fetchFavorites()),
  postFavorite: (dishId) => dispatch(postFavorite(dishId))

  // fetchFavorites: () => dispatch(fetchFavorites()),

  //Form model name inside component???
});




class Main extends Component {

  // constructor(props) {
  //   super(props);

  //   // this.props = {
  //     // dishes: DISHES,
  //     // comments: COMMENTS,
  //     // promotions: PROMOTIONS,
  //     // leaders: LEADERS,
  //     // selectedDish: null
  //   // };
  // }

  // handleSelectDish(dishId) {
  //   // console.log(dishId);
  //   this.setState({
  //     selectedDish: dishId
  //   });

    // this.logOut = this.logOut.bind(this);
    // // console.log("MainConstructor", this.props, this.context);
    // this.props.history.listen(() => {
    //   this.logOut();
    // });
    // this.props.history.listen((t) => {
    //   const user = JSON.parse(localStorage.getItem("credentials"));
    //   const token = localStorage.getItem("token");

    //   // console.log("user---------------------------------------------", user,  t);
    //   if (user) {
    //     const decodedJwt = parseJwt(token);
    //     // console.log("jwtExp", decodedJwt.exp, decodedJwt.exp * 1000, Date.now());
    //     if (decodedJwt.exp * 10 < Date.now()) {
    //       this.logOut();
    //     }
    //   }
    // });
  // }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    this.props.fetchFavorites();
    // console.log(value);

      this.props.history.listen((t) => {
      const user = JSON.parse(localStorage.getItem("credentials"));
      const token = localStorage.getItem("token");

      // console.log("user---------------------------------------------", user,  t);
      if (user) {
        const decodedJwt = parseJwt(token);
        // console.log("jwtExp", decodedJwt.exp, decodedJwt.exp * 1000, Date.now());
        if (decodedJwt.exp * 1000 < Date.now()) {
          this.logOut();
        }
      }
    });
  }

  async logOut() {
    // this.props.dispatch(logoutUser());
    await  this.props.logoutUser();

  }

  render() {
      this.context.isAuthenticated = this.props.auth.isAuthenticated;
      // console.log("render MAin", this.props, this.props.history,
      //   this.props.dishes.dishes, this.props.dishes.leaders,
      //   this.props.dishes.dishes.filter((dish) => dish.featured)[0]
      //  );
      const HomePage = () => {
        return(
            <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMsg={this.props.dishes.errmsg}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErrMsg={this.props.promotions.errmsg}
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leaderLoading={this.props.leaders.isLoading}
              leaderErrMsg={this.props.leaders.errmsg}
            />
        );
      }
      
      const DishWithId = () => {
        let params = useParams();
        console.log("Match",  params, this.props,
          this.props.favorites,
         );
        return (
        <AuthContext.Provider value={this.props.auth.isAuthenticated} >
         
          {this.props.auth.isAuthenticated
        ?
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === params.dishId)[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dish === params.dishId)}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          favorite={this.props.favorites.favorites.dishes.some((dish) => dish._id === params.dishId)}
          postFavorite={this.props.postFavorite}
          />
        :
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === params.dishId)[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dish === params.dishId)}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          favorite={false}
          postFavorite={this.props.postFavorite}
          />}
           </AuthContext.Provider>
        );
      };

      // const PrivateRoute = ({
      //   component: Component,
      //   ...rest
      // }) => (
      //   <Route {...rest} render={(props) => (
      //       this.props.auth.isAuthenticated
      //       ? <Component {...props} />
      //       : <Navigate to='/home' />
      //   )}    />
      // );
      const PrivateRoute = () => {
        // console.log("Private", this.props.auth);
        const auth = this.props.auth.isAuthenticated; // determine if authorized, from context or however you're doing it
        // If authorized, return an outlet that will render child elements
        // If not, return element that will navigate to login page
        return auth ? <Outlet /> : <Navigate to="/users/login" />;
      };

    const AboutPage = () => {
      // console.log("AboutPage", this.props);
      return (
        <About leaders={this.props.leaders.leaders} />
      );
    };
    const currentKey = window.location.pathname.split('/')[1] || '/';
    
    console.log("context", this.context);

    return (
      <div >
        <Header 
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser} 
        />
        
        <TransitionGroup  >
          <CSSTransition key={currentKey} classNames="page"
            timeout={400} appear>
        
          

          
          <Routes >
              <Route path="/" >
                <Route path="home" element={<HomePage />}/>
                <Route path="aboutus" element={<AboutPage />}/>
                <Route path='menu' exact element={<Menu dishes={this.props.dishes}/>} />
                  {/*using arrayfunc for props passing*/}
                <Route path="menu/:dishId" exact element={<DishWithId />} />
                <Route exact element={<PrivateRoute/>}>
                  <Route  path="/favorites" element={<Favorites favorites={this.props.favorites} deleteFavorite={this.props.deleteFavorite} />}/>
                </Route>

                <Route path='contactus' 
                  element={ <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} 
                
                />
                <Route path="*" element={<HomePage />} />
                
              </Route>
             
            
          </Routes>
          </CSSTransition>
        </TransitionGroup>
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

Main.contextType = AuthContext;


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
