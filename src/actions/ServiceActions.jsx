import {
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_SUCCESS,
    ADD_SERVICE_FAIL,
    GET_SERVICE_REQUEST,
    GET_SERVICE_SUCCESS,
    GET_SERVICE_PACKAGE_REQUEST,
    GET_SERVICE_PACKAGE_SUCCESS,
    GET_SERVICE_PACKAGE_FAIL,
    GET_SERVICE_FAIL,
    GET_SERVICE_PACKAGE_BY_ID_REQUEST,
    GET_SERVICE_PACKAGE_BY_ID_SUCCESS,
    GET_SERVICE_PACKAGE_BY_ID_FAIL,
    SERVICE_INFO_REQUEST,
    SERVICE_INFO_SUCCESS,
    SERVICE_INFO_FAIL,
    GET_SINGLE_PACKAGE_REQUEST,
    GET_SINGLE_PACKAGE_SUCCESS,
    GET_SINGLE_PACKAGE_FAIL
} from '../constants/ServiceConstants'
import axios from 'axios'
// Add Service
export const newService = (mgData) => async (dispatch) => {
        dispatch({ type: ADD_SERVICE_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/services.php', mgData, config)
        if (!data) {
            dispatch({
                type: ADD_SERVICE_FAIL,
                payload: "Please Fill The Data"
            })
        } else {
            dispatch({
                type: ADD_SERVICE_SUCCESS,
                payload: data
            })
        }
}

export const getAllService = (id) => async (dispatch) => {
    dispatch({ type: GET_SERVICE_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.get(`http://www.mastergarage.in/garageapi/user/getServiceList.php?serviceType=${id}`, config)
    if (!data) {
        dispatch({
            type: GET_SERVICE_FAIL,
            payload: "No Data Found"
        })
    } else {
        dispatch({
            type: GET_SERVICE_SUCCESS,
            payload: data.result
        })
    }
} 

export const getServicePackage = (actionData) => async (dispatch) => {
    dispatch({ type: GET_SERVICE_PACKAGE_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/service-packages.php', actionData, config)
    
    if (!data) {
        dispatch({
            type: GET_SERVICE_PACKAGE_FAIL,
            payload: "No Service Found"
        })
    } else {
        dispatch({
            type: GET_SERVICE_PACKAGE_SUCCESS,
            payload: data.servicesList
        })
    }
} 

export const getServicePackageById = (actionData) => async (dispatch) => {
    dispatch({ type: GET_SERVICE_PACKAGE_BY_ID_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/service-packages.php', actionData, config)

    if (!data) {
        dispatch({
            type: GET_SERVICE_PACKAGE_BY_ID_FAIL,
            payload: "No Service Found"
        })
    } else {
        dispatch({
            type: GET_SERVICE_PACKAGE_BY_ID_SUCCESS,
            payload: data.servicesList
        })
    }
}

// get single service info 
export const getServiceInfo = (actionData) => async (dispatch) => {
    dispatch({ type: SERVICE_INFO_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/services.php', actionData, config)
    if (data.statusCode === 200) {
        dispatch({
            type: SERVICE_INFO_SUCCESS,
            payload: data.result
        })
    } else {
        dispatch({
            type: SERVICE_INFO_FAIL,
            payload: "No Service Found"
        })
    }
} 

// get single package info 
export const getSinglePackage = (actionData) => async (dispatch) => {
    dispatch({ type: GET_SINGLE_PACKAGE_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/getSinglePackage.php', actionData, config)
    console.log(data);
    if (data) {
        dispatch({
            type: GET_SINGLE_PACKAGE_SUCCESS,
            payload: data.result
        })
    } else {
        dispatch({
            type: GET_SINGLE_PACKAGE_FAIL,
            payload: "No Service Found"
        })
    }
} 