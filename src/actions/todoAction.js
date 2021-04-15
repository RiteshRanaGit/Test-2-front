import axios from 'axios';
import { GET_TODO, TODO_LOADING, GET_ERRORS, CLEAR_CURRENT_TODO,} from './types';

import url from "../config/url";


export const createToDo = ( todoData, history) => dispatch =>{
    axios
        .post(url+'/api/todo', todoData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
}

// classroom loading 
 export const setToDoLoading = () => {
     return{
         type: TODO_LOADING
     }
 }

//  clear current classroom  
 export const clearToDo = () => {
    return{
        type: CLEAR_CURRENT_TODO
    }
}

// get all classroms
export const getToDo = () => dispatch =>{
    dispatch(setToDoLoading());
    axios.get(url+'/api/todo/all')
        .then(res =>
            ( console.log("all data", res.data),dispatch({
                type: GET_TODO,
                payload: res.data,
                loading: false
            }))
        )
        .catch(err => 
            dispatch({
                type: GET_TODO,
                payload: {}
            })    
        )
}

