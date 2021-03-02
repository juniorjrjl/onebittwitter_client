import API from '../../../api.js';
import { push } from 'connected-react-router'

export function logIn({email, password}) {
    const request = API.post('/user_token', {"auth": {email, password}});

    return (dispatch) => {
        request.then(
            resp => {
                localStorage.setItem('jwt', resp.data.jwt)
                dispatch(push('/timeline'))
            },
            error => window.M.toast({html: 'User or password incorrect', classes: 'red'})
        )
    };
}