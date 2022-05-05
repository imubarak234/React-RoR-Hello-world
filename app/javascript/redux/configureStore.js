import { createStore, combineReducers, applyMiddleware } from "redux"
import rootReducer from './greetings/greeting'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//import { initialState } from "./greetings/greeting";

const reducer = combineReducers({
  rootReducer
})

const stores = createStore(reducer, applyMiddleware(logger, thunk));

export default stores;