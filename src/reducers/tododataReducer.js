import {GET_TODO, TODO_LOADING, CLEAR_CURRENT_TODO} from '../actions/types';


const initialState = {
    todo: null,
    // classrooms: null,
    loading: false
}
 
export default function(state = initialState, action){
    switch (action.type){
        case TODO_LOADING:
            return{
                ...state,
                loading: true
            }
        case GET_TODO:
            return{
                ...state,
                todo: action.payload,
                loading: false
            }

        case CLEAR_CURRENT_TODO:
            return{
                ...state,
                todo: null
            }
        
        default:
            return state;
    }
}