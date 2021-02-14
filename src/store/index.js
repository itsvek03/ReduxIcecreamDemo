import { combineReducers } from "redux";
import { BuyCakeReducer } from '../reducers/CakeReducers'
import { userReducer } from '../reducers/userReducers'

const reducers = combineReducers({
    BuyCakeReducer: BuyCakeReducer,
    userReducer: userReducer
})

export default reducers;