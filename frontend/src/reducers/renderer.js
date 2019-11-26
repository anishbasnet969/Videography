import { GET_POST } from '../actions/types';

const initialState = {}

export default function( state=initialState, action ){
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                ...action.payload
            }
    
        default:
            return state;
    }
}