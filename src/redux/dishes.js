// import { DISHES } from '../shared/dishes'; //move DISHES to actionsCreators
import * as ActionTypes from './ActionTypes'; 


export const Dishes = (state = {
        isLoading: true,
        errmsg: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {
                ...state,
               isLoading: false,
               errmsg: null,
               dishes: action.payload 
            };
        case ActionTypes.DISHES_LOADING:
            return {
                ...state,
               isLoading: true,
               errmsg: null,
               dishes: [] 
            };
        case ActionTypes.DISHES_FAILED:
            return {
                ...state,
               isLoading: true,
               errmsg: action.payload,
               dishes: [] 
            };
        default:
            return state;
    }
};


// import { createSlice } from '@reduxjs/toolkit';

// export const dishesSlice = createSlice({
//     name: 'dish',
//     initialState: {
//         isLoading: false,
//         errmsg: null,
//         dishes: []
//     }, 
//     reducers: {
//         add: (state, action) => { 
//             // console.log("action", action);
//             return state; 
//         },
//         loading: state => state,
//         failed: state => state
//     }
// });

// export const { add, loading, failed } = dishesSlice.actions;

// export default dishesSlice.reducer;