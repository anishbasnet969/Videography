import { combineReducers } from 'redux';
import auth from './auth';
import posts from './posts'

const mainReducer = combineReducers({
    auth,
    posts
});

export default mainReducer;