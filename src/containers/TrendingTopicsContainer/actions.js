import axios from 'axios';
import { UPDATE_TRENDINGS } from './constants';

export function getHashtags() {
	const request = axios.get(process.env.REACT_APP_API + '/trending');
	return (dispatch) => {
		request.then(
			resp => dispatch({ type: UPDATE_TRENDINGS, payload: resp.data }),
			error => window.M.toast({html: "Fetch error", classes: "red"})
		);
	};
}