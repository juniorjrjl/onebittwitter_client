import { UPDATE_USER_INFO } from './constants';
 
const initialState = { user: {} };
 
export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return action.payload
        default:
            return state;
    }
}