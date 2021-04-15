import { combineReducers } from 'redux';

import tododataReducer from './tododataReducer'




export default combineReducers({
    
    todo: tododataReducer
    
})
