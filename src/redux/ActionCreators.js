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

export const favoritesLoading = () => ({
    type: ActionTypes.FAVORITES_LOADING
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

export const postFeedback = (feedback) => (dispatch) => {
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(feedback),
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

export const loginUser = (credentials) => (dispatch) => {
    dispatch(requestLogin(credentials));
    console.log(credentials);

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(response => {
        // response.json().then(messeage => console.log(message));
        console.log("Post USer Login",  response);
       if(!response.success) {
            let error = new Error('Error ' + response.status + ': ' + response.err.message);
            error.response = response;
            throw error;    
       }

        if (response.success) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ');
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
    })
    
    .then(response => {
        console.log("Response Login", response);
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('credentials', JSON.stringify(credentials));
            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(response));

        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch((error) => {
        console.log(error)
        return dispatch(loginError(error.message + ":-------------------Alert!"));
    

    })
    
};

export const deleteFavorite = (dishId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites/' + dishId, {
        method: "DELETE",
        headers: {
          'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(favorites => { console.log('Favorite Deleted', favorites); dispatch(addFavorites(favorites)); })
    .catch(error => dispatch(favoritesFailed(error.message)));
};

export const receiveLogin = (response) => {
    console.log("receiveLogin", response);
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const requestLogin = (credentials) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        credentials
    }
}

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

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const fetchLeaders = () => (dispatch) => {
    fetch(baseUrl + 'leaders')
            .then(response => {
                console.log('leaders response', response);

                if(response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error leaders' + response.status
                        + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                let errmsg = new Error(error.message);
                throw errmsg;
            })
            .then(response => response.json())
            .then(leaders => dispatch(addLeaders(leaders)))        
            .catch(error => dispatch(leadersFailed(error.message)));

};

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

    export const postFavorite = (dishId) => (dispatch) => {

        const bearer = 'Bearer ' + localStorage.getItem('token');
    
        return fetch(baseUrl + 'favorites/' + dishId, {
            method: "POST",
            body: JSON.stringify({"_id": dishId}),
            headers: {
              "Content-Type": "application/json",
              'Authorization': bearer
            },
            credentials: "same-origin"
        })
        .then(response => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
          error => {
                throw error;
          })
        .then(response => response.json())
        .then(favorites => { console.log('Favorite Added', favorites); dispatch(addFavorites(favorites)); })
        .catch(error => dispatch(favoritesFailed(error.message)));
    }

    export const fetchFavorites = () => (dispatch) => {
        // console.log("never type this here", localStorage.getItem("token"));
        dispatch(favoritesLoading(true));
        const bearer = 'Bearer ' + localStorage.getItem('token');

        //This. is dangerous I think...
        if(localStorage.getItem("token")) {
            
            return fetch(baseUrl + 'favorites', {
                headers: {
                    'Authorization': bearer
                }
            })

            .then(response => {
                console.log("fetchFavorite", response);
                if (response.ok) {  
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())

            .then(favorites => dispatch(addFavorites(favorites)))
            .catch(error => dispatch(favoritesFailed(error.message)));
        }

        
    };

    // Logs the user out
    export const logoutUser = () => (dispatch) => {
        dispatch(requestLogout())
        localStorage.removeItem('token');
        localStorage.removeItem('credentials');
        dispatch(favoritesFailed("Error 401: Unauthorized"));
        dispatch(receiveLogout())
    };

    export const receiveLogout = () => {
        return {
          type: ActionTypes.LOGOUT_SUCCESS
        }
    }
    

    export const requestLogout = () => {
        return {
          type: ActionTypes.LOGOUT_REQUEST
        }
    }

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

export const favoritesFailed = (errmess) => ({
    type: ActionTypes.FAVORITES_FAILED,
    payload: errmess
});

export const addFavorites = (favorites) => ({
    type: ActionTypes.ADD_FAVORITES,
    payload: favorites
});

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

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmsg) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmsg
});
