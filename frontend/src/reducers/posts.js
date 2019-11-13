import { GET_POSTS,ADD_POST,DELETE_POST } from '../actions/types';


const initalState = {
    posts: []
};


export default function (state = initalState, action){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter( post => post.id !== action.payload )
            }
        default:
            return state;
    }

}


