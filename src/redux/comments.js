import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const Comments = (state = COMMENTS, action) => {
    console.log("CommentsReducer", state, action);
    switch(action.type) {
        case ActionTypes.ADD_COMMENT: //only comments part of reducer will change our immutable state
            let comment = action.payload; //here we pass payload(a form data in our case)
            //inside a new comment
            comment.id = state.length;//???
            comment.date = new Date().toISOString(); //should bbe persistent
            return state.concat(comment); //create mutation

        default:
            return state;
    }
};