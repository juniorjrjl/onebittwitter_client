import { UPDATE_IMAGE_PREVIEW } from './constants';
 
// The initial state of the App
const initialState = { image_preview: {} };
 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_IMAGE_PREVIEW:
            return action.payload
        default:
            return state;
    }        
}