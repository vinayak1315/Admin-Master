import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    OTP_REQUEST,
    OTP_SUCCESS,
    OTP_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants';
// Login
export const login = (loginCred) => async (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST,
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/signin.php', loginCred, config)
        if (data.statusCode === 400) {
            dispatch({
                type: LOGIN_FAIL,
                payload: data.message
            })
        } else {
            dispatch({
                type: LOGIN_SUCCESS, 
                payload: data
            })
        }

}

// Load Users
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: LOAD_USER_REQUEST,
        })
        const { data } = await axios.get('/me')
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Forgot password
export const forgotPassword = (actionData) => async (dispatch) => {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST,
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/forgot-password.php', actionData, config)
        if(data.statusCode === 200) {
            dispatch({
                type: FORGOT_PASSWORD_SUCCESS,
                payload: data.message
            })
        } else {
            dispatch({
                type: FORGOT_PASSWORD_FAIL,
                payload: "Please Enter Valid Mobile Number"
            })
        }
}

// OTP 
export const OtpVerification = (actionData) => async (dispatch) => {
    dispatch({
        type: OTP_REQUEST,
    })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/forgot-password.php', actionData, config)
    if(data.statusCode === 200) {
        dispatch({
            type: OTP_SUCCESS,
            payload: data.message
        })
    } else {
        dispatch({
            type: OTP_FAIL,
            payload: "Please Enter Valid OTP"
        })
    }
}
// New Password
export const newPasswordAction = (actionData) => async (dispatch) => {
    dispatch({
        type: NEW_PASSWORD_REQUEST,
    })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/forgot-password.php', actionData, config)
    if(data.statusCode === 200) {
        dispatch({
            type: NEW_PASSWORD_SUCCESS,
            payload: data.message
        })
    } else {
        dispatch({
            type: NEW_PASSWORD_FAIL,
            payload: "Please Enter New Password"
        })
    }
}
// Logout Users
export const logout = () => async (dispatch) => {
    try {
        await axios.get('/logout')
        dispatch({
            type: LOGOUT_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
