import { combineReducers } from 'redux';
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer.js';
import { connectRouter } from 'connected-react-router'
import CurrentUserReducer from './containers/Auth/reducer.js';
import ImagePreviewReducer from './containers/ProfileEditContainer/reducer.js';
import UserInfoReducer from './containers/UserInfoContainer/reducer.js';
import TweetListReducer from './containers/TweetListContainer/reducer.js';

const rootReducer = (history) => combineReducers({
	router: connectRouter(history),
	trendings: TrendingTopicsReducer,
	current_user: CurrentUserReducer,
	image_preview: ImagePreviewReducer,
	user: UserInfoReducer,
	tweets: TweetListReducer
});

export default rootReducer;