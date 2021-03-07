import { FETCH_TWEETS, DELETE_TWEET, ADD_TWEET, LIKE_TWEET, DISLIKE_TWEET } from './constants';
 
const initialState = { tweets: [] };
 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TWEETS:
            return action.payload
        case DELETE_TWEET:
            return state.filter(tweet => tweet.id !== action.payload)
        case ADD_TWEET:
            return [action.payload, ...state]
        case LIKE_TWEET:
            return state.map(tweet => tweet.id === action.payload ? {...tweet, liked: true} : tweet)
        case DISLIKE_TWEET:
            return state.map(tweet => tweet.id === action.payload ? {...tweet, liked: false} : tweet)
        default:
            return state;
    }
}