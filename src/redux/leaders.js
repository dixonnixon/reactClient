// import { LEADERS } from '../shared/leaders';
import * as ActionTypes from './ActionTypes';


export const Leaders = (state = {
    isLoading: true,
    errmsg: null,
    leaders: []
}, action) => {
    switch(action.type) {
        case ActionTypes.LEADERS_LOADING:
            return {
                ...state,
               isLoading: true,
               errmsg: null,
               leaders: [] 
            };
        case ActionTypes.LEADERS_FAILED:
            return {
                ...state,
               isLoading: true,
               errmsg: action.payload,
               leaders: [] 
            };
        case ActionTypes.ADD_LEADERS:
            return {
                ...state,
                isLoading: false,
                errmsg: null,
                leaders: action.payload 
            };
        default:
            return state;
    }
};