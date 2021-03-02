import API from '../../../api.js';
import { logIn } from '../SignInContainer/actions.js';

export function register({name, email, password}) {
    const params = {"user": {name, email, password}}
    const request = API.post('/users', params);

    return (dispatch) => {
        request.then(
            resp => dispatch(logIn({email, password})),
            error => window.M.toast({html: 'User or password invalid', classes: 'red'})
        );
    };
}