import { UPDATE_TRENDINGS } from './constants';

const initialState = { hashtags: [] };
 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TRENDINGS:
            return { ...state, hashtags: action.payload.hashtags }
        default:
            return state;
    }
}