import { FOLLOW_USER } from './constants';
import API from '../../api.js';

export function followUser(id){
    const headers =  { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
    const request = API.post(`/users/${id}/follow`, {}, {headers: headers});

    return(dispatch) =>{
        request.then(
            resp => dispatch({type: FOLLOW_USER, payload: id}),
            error =>window.M.toast({html: 'Problem to follow a user', classes: 'red'})
        )
    }
}