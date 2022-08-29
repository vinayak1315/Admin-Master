import {
    BOOKING_REQUEST,
    BOOKING_SUCCESS,
    BOOKING_FAIL,
    ONGOING_BOOKING_REQUEST,
    ONGOING_BOOKING_SUCCESS,
    ONGOING_BOOKING_FAIL,
    ONGOING_SINGLE_BOOKING_REQUEST,
    ONGOING_SINGLE_BOOKING_SUCCESS,
    ONGOING_SINGLE_BOOKING_FAIL,
    CLEAR_ERRORS
} from '../constants/BookingConstants'
import axios from 'axios'
// Get Bookings
export const getBooking = (actionData) => async (dispatch) => {
    dispatch({ type: BOOKING_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/all-bookings.php', actionData, config)
    console.log(data)
    if (!data) {
        dispatch({
            type: BOOKING_FAIL,
            payload: "No Booking Found"
        })
    } else {
        dispatch({
            type: BOOKING_SUCCESS,
            payload: data.bookingsData
        })
    }
}

// Get Bookings
export const getOnGoingBooking = (actionData) => async (dispatch) => {
    dispatch({ type: ONGOING_BOOKING_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/all-bookings.php', actionData, config)
    if (!data) {
        dispatch({
            type: ONGOING_BOOKING_FAIL,
            payload: data.status
        })
    } else {
        dispatch({
            type: ONGOING_BOOKING_SUCCESS,
            payload: data.bookingsData
        })
    }
}


export const getOgDetailBooking = (actionData) => async (dispatch) => {
    dispatch({ type: ONGOING_SINGLE_BOOKING_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/all-bookings.php', actionData, config)
    if (!data) {
        dispatch({
            type: ONGOING_SINGLE_BOOKING_FAIL,
            payload: "No Data Found"
        })
    } else {
        dispatch({
            type: ONGOING_SINGLE_BOOKING_SUCCESS,
            payload: data.bookingsData
        })
    }
} 