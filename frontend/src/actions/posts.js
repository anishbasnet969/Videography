import axios from 'axios';
import { tokenConfig } from './auth';
import { GET_POSTS,ADD_POST,DELETE_POST } from './types';

export const getPosts = () => (dispatch,getState) => {
    axios
    .get('http://localhost:8000/vines/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    })
}

export const deletePost = id => (dispatch,getState) => {
    axios
    .delete(`http://localhost:8000/vines/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type:DELETE_POST,
            payload:id
        });
    })
}


export const addPost = postData => (dispatch) => {

    const config = {
        headers: {
            "content-type": "multipart/form-data",
            "Authorization" : `Token ${localStorage.getItem("token")}`
        }
    }
    
    axios
    .post("http://localhost:8000/vines/", postData ,config)
    .then(res => {
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    })
    .catch( err => console.log(err) )


}