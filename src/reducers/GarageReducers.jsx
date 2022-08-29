import {
    ALL_GARAGES_REQUEST,
    ALL_GARAGES_SUCCESS,
    ALL_GARAGES_FAIL,
    SINGLE_GARAGE_REQUEST,
    SINGLE_GARAGE_SUCCESS,
    SINGLE_GARAGE_FAIL,
    ALL_OUTLET_REQUEST,
    ALL_OUTLET_SUCCESS,
    ALL_OUTLET_FAIL,
    OUTLET_INFO_REQUEST,
    OUTLET_INFO_SUCCESS,
    OUTLET_INFO_FAIL,
    ADD_OUTLET_REQUEST,
    ADD_OUTLET_SUCCESS,
    ADD_OUTLET_FAIL,
    ADD_OUTLET_RESET,
    ADD_PARTNER_STEP_1_REQUEST,
    ADD_PARTNER_STEP_1_SUCCESS,
    ADD_PARTNER_STEP_1_FAIL,
    ADD_PARTNER_STEP_1_RESET,
    ADD_PARTNER_STEP_2_REQUEST,
    ADD_PARTNER_STEP_2_SUCCESS,
    ADD_PARTNER_STEP_2_FAIL,
    ADD_PARTNER_STEP_2_RESET,
    ADD_PARTNER_STEP_4_REQUEST,
    ADD_PARTNER_STEP_4_SUCCESS,
    ADD_PARTNER_STEP_4_FAIL,
    ADD_PARTNER_STEP_4_RESET,
    GET_SERVICE_REQUEST,
    GET_SERVICE_SUCCESS,
    GET_SERVICE_FAIL,
    GET_SERVICE_PACKAGE_REQUEST,
    GET_SERVICE_PACKAGE_SUCCESS,
    GET_SERVICE_PACKAGE_FAIL,
    ADD_MANAGER_REQUEST,
    ADD_MANAGER_SUCCESS,
    ADD_MANAGER_FAIL,
    ADD_MANAGER_RESET,
    DELETE_MANAGER_REQUEST,
    DELETE_MANAGER_SUCCESS,
    DELETE_MANAGER_FAIL,
    DELETE_SERVICE_REQUEST,
    DELETE_SERVICE_SUCCESS,
    DELETE_SERVICE_FAIL,
    CLEAR_ERRORS
} from '../constants/GarageConstants'

export const allGarageReducer = (state = { garages: [] }, action) => {
    switch (action.type) {

        case ALL_GARAGES_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_GARAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                garages: action.payload,
                success : true
            }

        case ALL_GARAGES_FAIL:
            {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
// Get Single Garage
export const getSingleGarage = (state = { allGarages: []}, action) => {
    switch(action.type) {
        case SINGLE_GARAGE_REQUEST: 
        return {
            loading: true,
            allGarages: []
        }
        case SINGLE_GARAGE_SUCCESS: 
        return {
            loading: false,
            success : true,
            allGarages: action.payload
        }
        case SINGLE_GARAGE_FAIL: 
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
// Get Single Service
export const getSingleService = (state = { services: []}, action) => {
    switch(action.type) {
        case GET_SERVICE_REQUEST: 
        return {
            loading: true,
            services: []
        }
        case GET_SERVICE_SUCCESS: 
        return {
            loading: false,
            success : true,
            services: action.payload
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

// Get Single package
export const getServicePackageReducers = (state = { packages: []}, action) => {
    switch(action.type) {
        case GET_SERVICE_PACKAGE_REQUEST: 
        return {
            loading: true,
            packages: []
        }
        case GET_SERVICE_PACKAGE_SUCCESS: 
        return {
            loading: false,
            success : true,
            packages: action.payload
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


// Get All Outlet
export const allOutletsReducer = (state = { allOutlets: []}, action) => {
    switch(action.type) {
        case ALL_OUTLET_REQUEST: 
        return {
            loading: true,
            allOutlets: []
        }
        case ALL_OUTLET_SUCCESS: 
        return {
            loading: false,
            success : true,
            allOutlets: action.payload
        }
        case ALL_OUTLET_FAIL: 
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

// Get Outlet Info
export const outletInfoReducers = (state = { outletInfo: []}, action) => {
    switch(action.type) {
        case OUTLET_INFO_REQUEST: 
        return {
            loading: true,
            outletInfo: []
        }
        case OUTLET_INFO_SUCCESS: 
        return {
            loading: false,
            success : true,
            outletInfo: action.payload
        }
        case OUTLET_INFO_FAIL: 
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

// Add new Outlet
export const newOutletReducer = (state = { outlet: {} }, action) => {
    switch (action.type) {
        case ADD_OUTLET_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_OUTLET_SUCCESS:
            return {
                loading: false,
                success: action.payload.status,
                message: "Added Successfully"
            } 

        case ADD_OUTLET_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case ADD_OUTLET_RESET:
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

// Add new Outlet step 1
export const stepOneReducers = (state = { response: {} }, action) => {
    switch (action.type) {
        case ADD_PARTNER_STEP_1_REQUEST:
            return {
                ...state,
                loading: true,
                success: false
            }

        case ADD_PARTNER_STEP_1_SUCCESS:
            return {
                loading: false,
                success: true,
                response : action.payload
            } 

        case ADD_PARTNER_STEP_1_FAIL:
            return {
                ...state,
                error1:true,
                error: action.payload,
                success: false
            }

        case ADD_PARTNER_STEP_1_RESET:
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
// Add new Outlet step 2
export const stepTwoReducers = (state = { datas: {} }, action) => {
    switch (action.type) {
        case ADD_PARTNER_STEP_2_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_PARTNER_STEP_2_SUCCESS:
            return {
                loading: false,
                success: true,
                message: action.payload
            } 

        case ADD_PARTNER_STEP_2_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case ADD_PARTNER_STEP_2_RESET:
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
// Add new Outlet step 4
export const stepFourReducers = (state = { response: {} }, action) => {
    switch (action.type) {
        case ADD_PARTNER_STEP_4_REQUEST:
            return {
                ...state,
                loading: true,
                success4:false
            }

        case ADD_PARTNER_STEP_4_SUCCESS:
            return {
                loading: false,
                success4: true,
                response: action.payload
            } 

        case ADD_PARTNER_STEP_4_FAIL:
            return {
                ...state,
                error1: false,
                error: "Please Fill The Data"
            }

        case ADD_PARTNER_STEP_4_RESET:
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
// Add manager
export const addManagerReducers = (state = { managers: [] }, action) => {
    switch (action.type) {
        case ADD_MANAGER_REQUEST:
            return {
                ...state,
                loading: true,
                success: false
            }

        case ADD_MANAGER_SUCCESS:
            return {
                loading: false,
                success: true,
                managers : action.payload
            } 

        case ADD_MANAGER_FAIL:
            return {
                ...state,
                error1:true,
                error: "Incomplete Data",
                success: false
            }

        case ADD_MANAGER_RESET:
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
// Delete manager
export const deleteManagerReducers = (state = { response: [] }, action) => {
    switch (action.type) {
        case DELETE_MANAGER_REQUEST:
            return {
                ...state,
                loading: true,
                success: false
            }

        case DELETE_MANAGER_SUCCESS:
            return {
                loading: false,
                success: true,
                response : action.payload
            } 

        case DELETE_MANAGER_FAIL:
            return {
                ...state,
                error1:true,
                error: action.payload,
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
// Delete service
export const deleteServiceReducers = (state = { response: [] }, action) => {
    switch (action.type) {
        case DELETE_SERVICE_REQUEST:
            return {
                ...state,
                loading: true,
                success: false
            }

        case DELETE_SERVICE_SUCCESS:
            return {
                loading: false,
                success: true,
                response : action.payload
            } 

        case DELETE_SERVICE_FAIL:
            return {
                ...state,
                error1:true,
                error: action.payload,
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