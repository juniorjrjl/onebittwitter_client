import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 

const Store = createStore(Reducers(history), applyMiddleware(routerMiddleware(history), thunk));

export default Store;