import { BUY_CAKE } from '../action/CakeConstant'

const initialState = {
    cakes: 10
}

export const BuyCakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                cakes: state.cakes - 1,
                message: action.payload
            }
        default:
            return state
    }
}