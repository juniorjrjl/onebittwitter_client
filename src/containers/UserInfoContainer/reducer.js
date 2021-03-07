import { UPDATE_USER_INFO } from './constants';
import { FOLLOW_USER } from './../UserFollow/constants'
import { UNFOLLOW_USER } from './../UserUnFollow/constants'
 
const initialState = { user: {} };
 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return action.payload
        case FOLLOW_USER:
            return {...state, followed: true}
        case UNFOLLOW_USER:
            return {...state, followed: false}
        default:
            return state;
    }
}