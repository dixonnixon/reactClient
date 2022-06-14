import * as ActionTypes from './ActionTypes';
// import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT, //type is the unique name of the action
    // payload: { //here we define what content should action returns
    //     dishId: dishId,
    //     rating: rating,
    //     author: author,
    //     comment: comment
    // }
    payload: comment
});

export const postComment =  (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            let error = new Error('Error ' + response.status
                + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        let errmsg = new Error(error.message);
        throw errmsg;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => console.log('PostComments', error.message));

};

//fetchDishes is a Thunk
export const fetchDishes = () => (dispatch) => {
    
    dispatch(dishesLoading(true));
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);
    fetch(baseUrl + 'dishes')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                let error = new Error('Error ' + response.status
                    + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            let errmsg = new Error(error.message);
            throw errmsg;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmsg
});

export const commentsFailed = (errmsg) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmsg
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchComments = () => (dispatch) => {
    
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);
    fetch(baseUrl + 'comments')
            .then(response => {
                if(response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status
                        + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                let errmsg = new Error(error.message);
                throw errmsg;
            })
            .then(response => response.json())
            .then(dishes => dispatch(addComments(dishes)))        
            .catch(error => dispatch(commentsFailed(error.message)));

    };

    export const fetchPromos = () => (dispatch) => {
        
        dispatch(promosLoading(true));
        // setTimeout(() => {
        //     dispatch(addDishes(DISHES));
        // }, 2000);
        fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                let error = new Error('Error ' + response.status
                    + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            let errmsg = new Error(error.message);
            throw errmsg;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))        
        .catch(error => dispatch(promosFailed(error.message)));

};

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});


export const promosFailed = (errmsg) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmsg
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});