import { USER_SUCCESS, USER_REQUEST, USER_FAILURE } from './userConstant'
import { userapi } from '../api/userapi'

export const userInfoAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REQUEST
            })
            const data = await userapi();
            console.log(data.data)
            dispatch({
                type: USER_SUCCESS,
                payload: data.data
            })
        }
        catch (error) {
            console.log(error)
            dispatch({
                type: USER_FAILURE,
                payload: error
            })
        }
    }
}