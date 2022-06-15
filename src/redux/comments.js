// import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


// export const Comments = (state = COMMENTS, action) => {
export const Comments = (state = {
    errmsg: null,
    comments: []
}, action) => {
    console.log("CommentsReducer", state, action);
    switch(action.type) {
        case ActionTypes.COMMENTS_FAILED:
            return {
                ...state,
               isLoading: true,
               errmsg: action.payload,
               comments: [] 
            };
        case ActionTypes.COMMENTS_LOADING:
            return {
                ...state,
               isLoading: true,
               errmsg: null,
               comments: [] 
            };
        case ActionTypes.ADD_COMMENTS:
            return {
                ...state,
               isLoading: false,
               errmsg: null,
               comments: action.payload 
            };

        case ActionTypes.ADD_COMMENT: //only comments part of reducer will change our immutable state
            let comment = action.payload; //here we pass payload(a form data in our case)
            //inside a new comment
            // comment.id = state.comments.length;//???
            // comment.date = new Date().toISOString(); //should be persistent
            return { ...state, comments: state.comments.concat(comment) }; //create mutation

        default:
            return state;
    }
};