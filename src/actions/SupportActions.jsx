import {
    GET_FAQS_REQUEST,
    GET_FAQS_SUCCESS,
    GET_FAQS_FAIL,
    ADD_FAQS_REQUEST,
    ADD_FAQS_SUCCESS,
    ADD_FAQS_FAIL,
} from '../constants/SupportConstants'
import axios from 'axios'

// Get Faqs
export const getAllFaqs = (actionData) => async (dispatch) => {
    dispatch({ type: GET_FAQS_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/faq.php', actionData, config)
    if (data.success === 1) {
        dispatch({
            type: GET_FAQS_SUCCESS,
            payload: data.result
        })
    } else {
        dispatch({
            type: GET_FAQS_FAIL,
            payload: "No Faq Found"
        })
    }
}
// Add Faqs
export const addFaqs = (actionData) => async (dispatch) => {
    dispatch({ type: ADD_FAQS_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/faq.php', actionData, config)
    if (data.success === 1) {
        dispatch({
            type: ADD_FAQS_SUCCESS,
        })
    } else {
        dispatch({
            type: ADD_FAQS_FAIL,
            payload: "Please Fill The Data"
        })
    }
}