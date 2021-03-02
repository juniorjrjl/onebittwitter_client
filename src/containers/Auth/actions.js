import API from '../../api.js';
import { push } from 'connected-react-router';
import { UPDATE_CURRENT_USER, REMOVE_CURRENT_USER } from './constants';

export function getCurrentUser() {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
    const request = API.get('/users/current', {headers: headers});

    return (dispatch) => {
        request.then(
            resp => dispatch({ type: UPDATE_CURRENT_USER, payload: resp.data }),
            error => console.log('LogOut')
        );
    }; 
 }

 export function logOut() {
    localStorage.removeItem('jwt');
   
    return (dispatch) => {
        dispatch({ type: REMOVE_CURRENT_USER })
        dispatch(push('/'));
    };
}