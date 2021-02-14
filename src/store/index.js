import { combineReducers } from "redux";
import { BuyCakeReducer } from '../reducers/CakeReducers'

const reducers = combineReducers({
    BuyCakeReducer: BuyCakeReducer
})

export default reducers;