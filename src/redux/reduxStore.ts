import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import itemsReducer from "./itemsReducer"

let reducers = combineReducers({
    itemsReducer: itemsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store