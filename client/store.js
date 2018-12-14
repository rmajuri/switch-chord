import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import loggingMiddleware from "redux-logger"; 
import thunkMiddleware from "redux-thunk";
import dummyReducer from './reducers/index'

const store = createStore(
    dummyReducer,
    composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggingMiddleware
    )
    )
)

export default store