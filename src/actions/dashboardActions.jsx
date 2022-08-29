import {
    DASHBOARD_SERVICE_REQUEST,
    DASHBOARD_SERVICE_SUCCESS,
    DASHBOARD_SERVICE_FAIL,
    CLEAR_ERRORS
} from '../constants/DashboardConstant'

import axios from 'axios'

// Get Dashboard Services
export const getAllService = (actionData) => async (dispatch) => {
        dispatch({ type: DASHBOARD_SERVICE_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/dashboard-data.php', actionData , config)
        if (!data) {
            dispatch({
                type: DASHBOARD_SERVICE_FAIL,
                payload: "Service Not Found"
            })
        } else {
            dispatch({
                type: DASHBOARD_SERVICE_SUCCESS,
                payload: data.servicesInfo
            })
        }
}