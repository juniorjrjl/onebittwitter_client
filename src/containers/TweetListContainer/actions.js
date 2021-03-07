import API from '../../api.js';
import { FETCH_TWEETS, DELETE_TWEET, ADD_TWEET, LIKE_TWEET, DISLIKE_TWEET } from './constants';
 
export function deleteTweet(id) {
    const headers =  { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
    const request = API.delete(`/tweets/${id}`, {headers: headers});
 
    return (dispatch) => {
        request.then(
            resp => dispatch({ type: DELETE_TWEET, payload: id }),
            error => window.M.toast({html: 'Problem in delete Tweet', classes: 'red'})
        )
    };
}
 
export function createTweet(body) {
    const headers =  { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
    const request = API.post(`/tweets`, {body: body}, {headers: headers});
 
    return (dispatch) => {
        request.then(
            resp => dispatch({ type: ADD_TWEET, payload: resp.data }),
            error => window.M.toast({html: 'Problem in create Tweet', classes: 'red'})
        )
    };
}

export function likeTweet(id){
    const headers =  { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
    const request = API.post(`/tweets/${id}/like`, {}, {headers: headers});

    return(dispatch) =>{
        request.then(
            resp => dispatch({type: LIKE_TWEET, payload: id}),
            error =>window.M.toast({html: 'Problem to like a tweet', classes: 'red'})
        )
    }
}

export function dislikeTweet(id){
    const headers =  { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
    const request = API.delete(`/tweets/${id}/like`, {headers: headers});

    return(dispatch) =>{
        request.then(
            resp => dispatch({type: DISLIKE_TWEET, payload: id}),
            error =>window.M.toast({html: 'Problem to dislike a tweet', classes: 'red'})
        )
    }
}