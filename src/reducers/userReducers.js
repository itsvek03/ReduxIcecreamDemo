import { USER_SUCCESS, USER_REQUEST, USER_FAILURE } from '../action/userConstant'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return { ...state, loading: true }
        case USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state;
    }
}