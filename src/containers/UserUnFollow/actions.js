import { UNFOLLOW_USER } from './constants';
import API from '../../api.js';

export function unfollowUser(id){
    const headers =  { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
    const request = API.delete(`/users/${id}/follow`, {headers: headers});

    return(dispatch) =>{
        request.then(
            resp => dispatch({type: UNFOLLOW_USER, payload: id}),
            error =>window.M.toast({html: 'Problem to unfollow a user', classes: 'red'})
        )
    }
}