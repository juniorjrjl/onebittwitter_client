import API from '../../api.js';
import { UPDATE_IMAGE_PREVIEW } from './constants';

export function updateUserInfo({id, name, email, description, photo}) {
	const headers =  { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
	const params = {"user": {name, email, description, photo}}
	const request = API.put(`/users/${id}`, params, {headers: headers});
   
	return (dispatch) => {
		request.then(
			resp => window.M.toast({html: 'Success in user update', classes: 'green'}),
			error => window.M.toast({html: 'Problem in user update', classes: 'red'})
		);
	};
}
   
export function updateUserPassword({id, password, password_confirmation}) {
	const headers =  { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
	const params = {"user": {password, password_confirmation}}
	const request = API.put(`/users/${id}`, params, {headers: headers});
   
	return (dispatch) => {
		request.then(
			resp => window.M.toast({html: 'Success in password update', classes: 'green'}),
			error => window.M.toast({html: 'Problem in password update', classes: 'red'})
		);
	};
}
   
export function updateImagePreview(image_preview) {
	return {
		type: UPDATE_IMAGE_PREVIEW,
		payload: image_preview
	}
}