import {
    PROMOTION_OFFER_LISTING_SUCCESS,
    PROMOTION_OFFER_LISTING_REQUEST,
    PROMOTION_OFFER_LISTING_FAIL,
    ADD_PROMOTION_OFFER_REQUEST,
    ADD_PROMOTION_OFFER_SUCCESS,
    ADD_PROMOTION_OFFER_FAIL,
    ADD_PROMOTION_OFFER_RESET,
    CLEAR_ERRORS
} from '../constants/PromotionConstants'

export const allOfferListing = (state = { results: [] }, action) => {
    switch (action.type) {

        case PROMOTION_OFFER_LISTING_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case PROMOTION_OFFER_LISTING_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload
            }

        case PROMOTION_OFFER_LISTING_FAIL:
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

// Create Promotion Offer
export const newOfferReducer = (state = { response: {} }, action) => {
    switch (action.type) {
        case ADD_PROMOTION_OFFER_REQUEST:
            return {
                ...state,
                loading: true,
                success: false
            }

        case ADD_PROMOTION_OFFER_SUCCESS:
            return {
                loading: false,
                success: true,
                response: action.payload
            } 

        case ADD_PROMOTION_OFFER_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case ADD_PROMOTION_OFFER_RESET:
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
