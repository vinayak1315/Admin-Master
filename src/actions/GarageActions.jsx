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
    ADD_PARTNER_STEP_1_REQUEST,
    ADD_PARTNER_STEP_1_SUCCESS,
    ADD_PARTNER_STEP_1_FAIL,
    ADD_PARTNER_STEP_2_REQUEST,
    ADD_PARTNER_STEP_2_SUCCESS,
    ADD_PARTNER_STEP_2_FAIL,
    ADD_PARTNER_STEP_4_REQUEST,
    ADD_PARTNER_STEP_4_SUCCESS,
    ADD_PARTNER_STEP_4_FAIL,
    GET_SERVICE_REQUEST,
    GET_SERVICE_SUCCESS,
    GET_SERVICE_FAIL,
    GET_SERVICE_PACKAGE_REQUEST,
    GET_SERVICE_PACKAGE_SUCCESS,
    GET_SERVICE_PACKAGE_FAIL,
    ADD_MANAGER_REQUEST,
    ADD_MANAGER_SUCCESS,
    ADD_MANAGER_FAIL,
    DELETE_MANAGER_REQUEST,
    DELETE_MANAGER_SUCCESS,
    DELETE_MANAGER_FAIL,
    DELETE_SERVICE_REQUEST,
    DELETE_SERVICE_SUCCESS,
    DELETE_SERVICE_FAIL,
} from '../constants/GarageConstants'

import axios from 'axios'

// Get All Garages
export const getAllGarages = (actionData) => async (dispatch) => {
    dispatch({ type: ALL_GARAGES_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/all-garages.php', actionData, config)
    if (!data) {
        dispatch({
            type: ALL_GARAGES_FAIL,
            payload: "Garages Not Found"
        })
    } else {
        dispatch({
            type: ALL_GARAGES_SUCCESS,
            payload: data.allVendor
        })
    }
}
// Get single Garage info
export const getSingleGarage = (actionData) => async (dispatch) => {
    dispatch({ type: SINGLE_GARAGE_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/all-garages.php', actionData, config)
    if (!data) {
        dispatch({
            type: SINGLE_GARAGE_FAIL,
            payload: "No Data Found"
        })
    } else {
        dispatch({
            type: SINGLE_GARAGE_SUCCESS,
            payload: data
        })
    }
}

// Get All Outlet
export const allOutlets = (actionData) => async (dispatch) => {
    dispatch({ type: ALL_OUTLET_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/all-garages.php', actionData, config)
    console.log(data)
    if (!data) {
        dispatch({
            type: ALL_OUTLET_FAIL,
            payload: "No Data Found"
        })
    } else {
        dispatch({
            type: ALL_OUTLET_SUCCESS,
            payload: data.allOutlets
        })
    }
}

// Get Outlet Info
export const outletInfo = (actionData) => async (dispatch) => {
    dispatch({ type: OUTLET_INFO_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/all-garages.php', actionData, config)
    console.log(data)
    if (!data) {
        dispatch({
            type: OUTLET_INFO_FAIL,
            payload: "No Data Found"
        })
    } else {
        dispatch({
            type: OUTLET_INFO_SUCCESS,
            payload: data.outletInfo
        })
    }
}

// Add Outlet
export const newOutlet = (actionData) => async (dispatch) => {
    dispatch({ type: ADD_OUTLET_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/all-garages.php', actionData, config)
    if (!data) {
        dispatch({
            type: ADD_OUTLET_FAIL,
            payload: "Please Fill The Data"
        })
    } else {
        dispatch({
            type: ADD_OUTLET_SUCCESS,
            payload: data
        })
    }
}
// step 1
export const addStep1 = (actionData) => async (dispatch) => {
    dispatch({ type: ADD_PARTNER_STEP_1_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/offers.php', actionData, config)
    console.log(data);
    if (!data) {
        dispatch({
            type: ADD_PARTNER_STEP_1_FAIL,
            payload: "Please Fill The Data"
        })
    } else {
        dispatch({
            type: ADD_PARTNER_STEP_1_SUCCESS,
            payload: data.data
        })
    }
}
// Step 1 add partner
// export const addStep1 = (actionData) => async (dispatch) => {
//     dispatch({ type: ADD_PARTNER_STEP_1_REQUEST });

//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     const { response } = await axios.post('http://www.mastergarage.in/garageapi/admin/offers.php', actionData, config)
//     console.log(response)
//     if (response.statusCode === 200) {
//         dispatch({
//             type: ADD_PARTNER_STEP_1_SUCCESS,
//             payload: response.data
//         })
//     } else {
//         dispatch({
//             type: ADD_PARTNER_STEP_1_FAIL,
//             payload: "Data Missing "
//         })
//     }
// }
// Step 2 add partner

export const addStep2 = (actionData) => async (dispatch) => {
    dispatch({ type: ADD_PARTNER_STEP_2_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/offers.php', actionData, config)
    if (!data) {
        dispatch({
            type: ADD_PARTNER_STEP_2_FAIL,
            payload: "Please Fill The Data"
        })
    } else {
        dispatch({
            type: ADD_PARTNER_STEP_2_SUCCESS,
            payload: data
        })
    }
}

// Step 4 add partner

export const addStep4 = (actionData) => async (dispatch) => {
    dispatch({ type: ADD_PARTNER_STEP_4_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/offers.php', actionData, config)
    console.log(data);
    if (!data) {
        dispatch({
            type: ADD_PARTNER_STEP_4_FAIL,
            payload: data
        })
    } else {
        dispatch({
            type: ADD_PARTNER_STEP_4_SUCCESS,
            payload: data
        })
    }
}
// Get service info
export const getService = (id) => async (dispatch) => {
    dispatch({ type: GET_SERVICE_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post(`http://www.mastergarage.in/garageapi/user/getServiceList.php?serviceType=${id}`, config)

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

// Get service package
export const getPackage = (id) => async (dispatch) => {
    dispatch({ type: GET_SERVICE_PACKAGE_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post(`http://www.mastergarage.in/garageapi/user/getServicePackage.php?serviceId=${id}`, config)
    console.log(data)
    if (!data) {
        dispatch({
            type: GET_SERVICE_PACKAGE_FAIL,
            payload: "No Data Found"
        })
    } else {
        dispatch({
            type: GET_SERVICE_PACKAGE_SUCCESS,
            payload: data.result
        })
    }
}

// Step 1 add manager
export const addManagers = (actionData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch({ type: ADD_MANAGER_REQUEST });
        const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/offers.php', actionData, config)

        dispatch({
            type: ADD_MANAGER_SUCCESS,
            payload: data.result
        })
    } catch (err) {
        dispatch({
            type: ADD_MANAGER_FAIL,
            payload: "Please Fill The Data"
        })
    }
}
// Step 1 delete manager
export const deleteManagers = (actionData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch({ type: DELETE_MANAGER_REQUEST });
        const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/offers.php', actionData, config)

        dispatch({
            type: DELETE_MANAGER_SUCCESS,
            payload: data.message
        })
    } catch (err) {
        dispatch({
            type: DELETE_MANAGER_FAIL,
            payload: "Please Fill The Data"
        })
    }
}
// Step 2 delete service
export const deleteServices = (actionData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch({ type: DELETE_SERVICE_REQUEST });
        const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/offers.php', actionData, config)

        dispatch({
            type: DELETE_SERVICE_SUCCESS,
            payload: data.message
        })
    } catch (err) {
        dispatch({
            type: DELETE_SERVICE_FAIL,
            payload: "Please Fill The Data"
        })
    }
}