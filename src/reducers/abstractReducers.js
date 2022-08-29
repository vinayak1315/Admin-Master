import {
    ADMIN_ABSTRACT_REQUEST,
    ADMIN_ABSTRACT_SUCCESS,
    ADMIN_ABSTRACT_FAIL,
    USER_ABSTRACT_REQUEST,
    USER_ABSTRACT_SUCCESS,
    USER_ABSTRACT_FAIL,
    UPDATE_ABSTRACT_REQUEST,
    UPDATE_ABSTRACT_SUCCESS,
    UPDATE_ABSTRACT_FAIL,
    UPDATE_ABSTRACT_RESET,
    DELETE_ABSTRACT_REQUEST,
    DELETE_ABSTRACT_SUCCESS,
    DELETE_ABSTRACT_RESET,
    DELETE_ABSTRACT_FAIL,
    NEW_ABSTRACT_REQUEST,
    NEW_ABSTRACT_SUCCESS,
    NEW_ABSTRACT_FAIL,
    NEW_ABSTRACT_RESET,
    CLEAR_ERRORS
} from '../constants/abstractConstants'



// Publish Paper (ADMIN) 
export const newAbstractReducer = (state = { abstract: {} }, action) => {
    switch (action.type) {
        case NEW_ABSTRACT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_ABSTRACT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                abstract: action.payload.abstract
            }

        case NEW_ABSTRACT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_ABSTRACT_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

// Abstract Reducer 

export const abstractsReducer = (state={ abstracts: [] }, action) => {
    switch (action.type) {
        case USER_ABSTRACT_REQUEST:
        case ADMIN_ABSTRACT_REQUEST:
            {
                return {
                    loading: true,
                    abstracts: []
                }
            }
        case USER_ABSTRACT_SUCCESS:
        case ADMIN_ABSTRACT_SUCCESS: {
            return {
                loading: false,
                abstracts: action.payload
            }
        }
        case USER_ABSTRACT_FAIL:
        case ADMIN_ABSTRACT_FAIL:
            {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: null
            }
        }
        default:
            return state
    }
}

// Update Abstract Status Reducer

export const abstractReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_ABSTRACT_REQUEST:
        case DELETE_ABSTRACT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_ABSTRACT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_ABSTRACT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_ABSTRACT_FAIL:
        case DELETE_ABSTRACT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_ABSTRACT_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case DELETE_ABSTRACT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
