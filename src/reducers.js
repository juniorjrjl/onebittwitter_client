import { combineReducers } from 'redux';
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer.js';

const rootReducer = combineReducers({
	trendings: TrendingTopicsReducer
});

export default rootReducer;