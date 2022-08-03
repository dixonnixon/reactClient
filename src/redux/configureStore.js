import { configureStore as cs } from '@reduxjs/toolkit'
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
// import dishesReducer from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Auth } from './auth';
import { favorites } from './favorites';


import { combineReducers,  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback, InitialLogin } from './forms';

import { print1 } from '../addons/middleware'


// import { Reducer, initialState } from './reducer';

// //creating redux store
// export const ConfigureStore = () => {
//     const store = createStore(
//         Reducer,
//         initialState
//     );
//     return store;
// };

// export default configureStore({
//     reducer: Reducer
// });
// export  const configureStore = () => {
// //    const store = createStore(Reducer, initialState);

//     /**
//      * inside each of the reducers it should not be any async logic, random calcs and side effects?
//      * only state, actions and new state if necessary
//      */
//    const store = createStore(
//        combineReducers({
//            dishes: Dishes,
//            comments: Comments,
//            leaders: Leaders,
//            promotions: Promotions,
//            ...createForms({
//                 feedback: InitialFeedback
//            })
//        }),
//        applyMiddleware(thunk, logger) //allow our store to use middleware
//    );

//    return store;
// };

export  const configureStore = () => {
    const store = cs({
        reducer: combineReducers({
            favorites,
            dishes: Dishes,
            // dishes: dishesReducer,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            auth: Auth,


            ...createForms({
                    feedback: InitialFeedback,
                    login: InitialLogin
            })
        })
    },  applyMiddleware(thunk, logger, print1));

    console.log("configureStore", store, store.getState());
    return store;
};
