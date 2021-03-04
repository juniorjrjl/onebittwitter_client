import { FETCH_TWEETS, DELETE_TWEET, ADD_TWEET } from './constants';
 
const initialState = { tweets: [] };
 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TWEETS:
            return action.payload
        case DELETE_TWEET:
            return state.filter(tweet => tweet.id !== action.payload)
        case ADD_TWEET:
            return [action.payload, ...state]
        default:
            return state;
    }
}