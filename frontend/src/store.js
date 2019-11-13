import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mainReducer from './reducers';

const initialState = {}

const store = createStore(
    mainReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))    
);

export default store;