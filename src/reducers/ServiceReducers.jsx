import {
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_SUCCESS,
    ADD_SERVICE_FAIL,
    ADD_SERVICE_RESET,
    GET_SERVICE_REQUEST,
    GET_SERVICE_SUCCESS,
    GET_SERVICE_FAIL,
    GET_SERVICE_PACKAGE_REQUEST,
    GET_SERVICE_PACKAGE_SUCCESS,
    GET_SERVICE_PACKAGE_FAIL,
    GET_SERVICE_PACKAGE_BY_ID_REQUEST,
    GET_SERVICE_PACKAGE_BY_ID_SUCCESS,
    GET_SERVICE_PACKAGE_BY_ID_FAIL,
    SERVICE_INFO_REQUEST,
    SERVICE_INFO_SUCCESS,
    SERVICE_INFO_FAIL,
    GET_SINGLE_PACKAGE_REQUEST,
    GET_SINGLE_PACKAGE_SUCCESS,
    GET_SINGLE_PACKAGE_FAIL,
    CLEAR_ERRORS
} from '../constants/ServiceConstants'

export const newServiceReducer = (state = { service: {} }, action) => {
    switch (action.type) {
        case ADD_SERVICE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_SERVICE_SUCCESS:
            return {
                loading: false,
                success: action.payload.status,
                message: action.payload.message
            } 

        case ADD_SERVICE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case ADD_SERVICE_RESET:
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

export const ServiceReducer = (state = { servicesList: []}, action) => {
    switch(action.type) {
        case GET_SERVICE_REQUEST: 
        return {
            loading: true,
            servicesList: []
        }
        case GET_SERVICE_SUCCESS: 
        return {
            loading: false,
            servicesList: action.payload
        }
        case GET_SERVICE_FAIL: 
        return {
            error: action.payload
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

export const servicePackageReducer = (state = { servicesLists: []}, action) => {
    switch(action.type) {
        case GET_SERVICE_PACKAGE_REQUEST: 
        return {
            loading: true,
            servicesLists: []
        }
        case GET_SERVICE_PACKAGE_SUCCESS: 
        return {
            loading: false,
            servicesLists: action.payload
        }
        case GET_SERVICE_PACKAGE_FAIL: 
        return {
            error: action.payload
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


export const servicePackageByIdReducer = (state = { filterList: []}, action) => {
    switch(action.type) {
        case GET_SERVICE_PACKAGE_BY_ID_REQUEST: 
        return {
            loading: true,
            filterList: []
        }
        case GET_SERVICE_PACKAGE_BY_ID_SUCCESS: 
        return {
            loading: false,
            filterList: action.payload
        }
        case GET_SERVICE_PACKAGE_BY_ID_FAIL: 
        return {
            error: action.payload
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
// Get Single Serivce Info 
export const serviceInfoReducer = (state = { result: []}, action) => {
    switch(action.type) {
        case SERVICE_INFO_REQUEST: 
        return {
            loading: true,
            result: []
        }
        case SERVICE_INFO_SUCCESS: 
        return {
            loading: false,
            result: action.payload
        }
        case SERVICE_INFO_FAIL: 
        return {
            error: action.payload
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

// Get Single pACKAGE Info 
export const packageInfoReducer = (state = { result: []}, action) => {
    switch(action.type) {
        case GET_SINGLE_PACKAGE_REQUEST: 
        return {
            loading: true,
            result: []
        }
        case GET_SINGLE_PACKAGE_SUCCESS: 
        return {
            loading: false,
            result: action.payload
        }
        case GET_SINGLE_PACKAGE_FAIL: 
        return {
            error: action.payload
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