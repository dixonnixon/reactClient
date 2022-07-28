import * as ActionTypes from './ActionTypes';

export const favorites = (state = {
        isLoading: true,
        errMess: null,
        favorites: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_FAVORITES:
            console.log("ADD_FAVORITES", action.payload);

            return {...state, isLoading: false, errMess: null, favorites: action.payload};

        case ActionTypes.FAVORITES_LOADING:
            return {...state, isLoading: true, errMess: null, favorites: null};

        case ActionTypes.FAVORITES_FAILED:
            console.log("FAVORITES_FAILED", action.payload);

            return {...state, isLoading: false, errMess: action.payload, favorites: null};

        default:
            return state;
    }
}