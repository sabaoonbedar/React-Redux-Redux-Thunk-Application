import {combineReducers} from 'redux';
import formHandlerReducer from './FormHandlerReducer'
export default combineReducers({


formHandler: formHandlerReducer,

})