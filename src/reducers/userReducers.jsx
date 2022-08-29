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
    OTP_REQUEST,
    OTP_SUCCESS,
    OTP_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants'

// Login - (ADMIN)
export const authReducer = (state = {user: {}}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST : 
        case LOAD_USER_REQUEST :
        return {
            loading : true,
            isAuthenticated : false
        }
        case LOGIN_SUCCESS :  
        case LOAD_USER_SUCCESS :
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGOUT_SUCCESS: 
            return {
                loading : false,
                isAuthenticated :false,
                user: null
            }
        case LOAD_USER_FAIL :
            return {
                loading: false,
                isAuthenticated: false,
                user:null,
                error: action.payload
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case LOGIN_FAIL :
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS :
            return {
                ...state,
                error: null
            }
        default: 
            return state;
    }
}



// Forgot password
export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
        case NEW_PASSWORD_REQUEST:
            return {
                ...state,
                loading : true,
                error: null,
                success: false
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message : action.payload,
                success: true
            }
        case NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                success: action.payload
            }
        case FORGOT_PASSWORD_FAIL:
        case NEW_PASSWORD_FAIL:
        return {
            ...state,
            loading: false,
            error: action.payload,
            success: false
        }
        case CLEAR_ERRORS :
            return {
                ...state,
                error: null
            }
        default: 
        return state;
    }
}

// OTP Password
export const OtpReducer = (state = {}, action) => {
    switch (action.type) {
        case OTP_REQUEST:
            return {
                ...state,
                loading : true,
                error: null,
                success: false
            }
        case OTP_SUCCESS:
            return {
                ...state,
                loading: false,
                message : action.payload,
                success: true
            }
        case OTP_FAIL:
        return {
            ...state,
            loading: false,
            error: action.payload,
            success: false
        }
        case CLEAR_ERRORS :
            return {
                ...state,
                error: null
            }
        default: 
        return state;
    }
}

// OTP Password
export const newPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_PASSWORD_REQUEST:
            return {
                ...state,
                loading : true,
                error: null,
                success: false
            }
        case NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message : action.payload,
                success: true
            }
        case NEW_PASSWORD_FAIL:
        return {
            ...state,
            loading: false,
            error: action.payload,
            success: false
        }
        case CLEAR_ERRORS :
            return {
                ...state,
                error: null
            }
        default: 
        return state;
    }
}