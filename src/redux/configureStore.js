import { createSlice } from '@reduxjs/toolkit'
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { combineReducers, createStore } from 'redux';

import { Reducer, initialState } from './reducer';

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
export  const configureStore = () => {
//    const store = createStore(Reducer, initialState);
   const store = createStore(
       combineReducers({
           dishes: Dishes,
           comments: Comments,
           leaders: Leaders,
           promotions: Promotions
       })
   );

   return store;
};

// export  const ConfigureStore = () => {
//     const store = configureStore(
//         combineReducers({
//             dishes: Dishes,
//             comments: Comments 
//         })
//     );

//     return store;
// };