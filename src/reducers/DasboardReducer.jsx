import {
    DASHBOARD_SERVICE_REQUEST,
    DASHBOARD_SERVICE_SUCCESS,
    DASHBOARD_SERVICE_FAIL,
    CLEAR_ERRORS
} from '../constants/DashboardConstant'

export const allServiceReducer = (state = { services: [] }, action) => {
    switch (action.type) {

        case DASHBOARD_SERVICE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case DASHBOARD_SERVICE_SUCCESS:
            return {
                ...state,
                loading: false,
                services: action.payload
            }

        case DASHBOARD_SERVICE_FAIL:
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
