import API from '../../api.js';
import { UPDATE_USER_INFO } from '../UserInfoContainer/constants';
import { FETCH_TWEETS } from '../TweetListContainer/constants';
 
 
export function getUserInfo(id) {
    const headers =  { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
    const request = API.get(`/users/${id}`, {headers: headers});
 
    return (dispatch) => {
        request.then(
            resp => dispatch({ type: UPDATE_USER_INFO, payload: resp.data }),
            error => window.M.toast({html: 'Problem in get User Info', classes: 'red'})
        )
    };
}

export function getTweetList(id) {
    const headers =  { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
    const request = API.get(`/tweets?user_id=${id}`, {headers: headers});
   
    return (dispatch) => {
        request.then(
            resp => dispatch({ type: FETCH_TWEETS, payload: resp.data }),
            error => window.M.toast({html: 'Problem in get Tweet List', classes: 'red'})
        )
    };
}