import { combineReducers } from 'redux';
import auth from './auth';
import posts from './posts'
import renderer from './renderer'

const mainReducer = combineReducers({
    auth,
    posts,
    renderer
});

export default mainReducer;