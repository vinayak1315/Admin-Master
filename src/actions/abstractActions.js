import axios from 'axios'

import {
    ADMIN_ABSTRACT_REQUEST,
    ADMIN_ABSTRACT_SUCCESS,
    ADMIN_ABSTRACT_FAIL,
    UPDATE_ABSTRACT_REQUEST,
    UPDATE_ABSTRACT_SUCCESS,
    UPDATE_ABSTRACT_FAIL,
    DELETE_ABSTRACT_REQUEST,
    DELETE_ABSTRACT_SUCCESS,
    DELETE_ABSTRACT_FAIL,
    NEW_ABSTRACT_REQUEST,
    NEW_ABSTRACT_SUCCESS,
    NEW_ABSTRACT_FAIL,
    CLEAR_ERRORS
} from '../constants/abstractConstants'

// Sending Abstract
export const newAbstract = (abstractData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_ABSTRACT_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(abstractData)
        const { data } = await axios.post(`/abstract/new`,abstractData, config)
        dispatch({
            type: NEW_ABSTRACT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_ABSTRACT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get All Abstract (ADMIN) 
export const getUserAbstract = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_ABSTRACT_REQUEST })
        const { data } = await axios.get(`/abstract/me`)
        dispatch({
            type: ADMIN_ABSTRACT_SUCCESS,
            payload: data.abstracts
        })
    } catch (error) {
        dispatch({
            type: ADMIN_ABSTRACT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get All Abstract (ADMIN) 
export const getAllAbstract = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_ABSTRACT_REQUEST })
        const { data } = await axios.get(`/admin/abstracts`)
        dispatch({
            type: ADMIN_ABSTRACT_SUCCESS,
            payload: data.abstracts
        })
    } catch (error) {
        dispatch({
            type: ADMIN_ABSTRACT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Abstract Status (ADMIN)
export const updateAbstractStatus = (id, statusData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ABSTRACT_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        const { data } =  await axios.put(`/admin/abstract/${id}`, statusData, config)
        dispatch({ 
            type: UPDATE_ABSTRACT_SUCCESS,
            payload: data.success
        });
    } catch (error) {
        dispatch({
            type: UPDATE_ABSTRACT_FAIL, 
            payload: error.response.data.message
        })
    }
}


// Delete Abstract (ADMIN)
export const deleteAbstract = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_ABSTRACT_REQUEST
        })
        const { data } = await axios.delete(`/admin/abstract/${id}`);

        dispatch({
            type: DELETE_ABSTRACT_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_ABSTRACT_FAIL,
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