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


export const allBookingReducer = (state = { bookingsData: [] }, action) => {
    switch (action.type) {

        case BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case BOOKING_SUCCESS:
            return {
                ...state,
                loading: false,
                bookingsData: action.payload
            }
        case BOOKING_FAIL:
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

export const onGoingBooking = (state = { bookingsData: [] }, action) => {
    switch (action.type) {

        case ONGOING_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ONGOING_BOOKING_SUCCESS:
            return {
                ...state,
                loading: false,
                bookingsData: action.payload
            }
        case ONGOING_BOOKING_FAIL:
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

export const ogDetailBooking = (state = { bookingsData: []}, action) => {
    switch(action.type) {
        case ONGOING_SINGLE_BOOKING_REQUEST: 
        return {
            loading: true,
            bookingsData: []
        }
        case ONGOING_SINGLE_BOOKING_SUCCESS: 
        return {
            loading: false,
            bookingsData: action.payload
        }
        case ONGOING_SINGLE_BOOKING_FAIL: 
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
