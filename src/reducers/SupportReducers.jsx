import {
    GET_FAQS_REQUEST,
    GET_FAQS_SUCCESS,
    GET_FAQS_FAIL,
    ADD_FAQS_REQUEST,
    ADD_FAQS_SUCCESS,
    ADD_FAQS_FAIL,
    ADD_FAQS_RESET,
    CLEAR_ERRORS
} from '../constants/SupportConstants'

export const faqsReducers = (state = { faqs: [] }, action) => {
    switch (action.type) {

        case GET_FAQS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case GET_FAQS_SUCCESS:
            return {
                ...state,
                loading: false,
                faqs: action.payload
            }

        case GET_FAQS_FAIL:
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
// Add new Faqs
export const newFaqsReducers = (state = { response: {} }, action) => {
    switch (action.type) {
        case ADD_FAQS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_FAQS_SUCCESS:
            return {
                loading: false,
                success01: true,
                response: "Added Successfully"
            } 

        case ADD_FAQS_FAIL:
            return {
                ...state,
                error01: action.payload
            }

        case ADD_FAQS_RESET:
            return {
                ...state,
                success01: false
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