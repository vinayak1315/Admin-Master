import {
    PROMOTION_OFFER_LISTING_SUCCESS,
    PROMOTION_OFFER_LISTING_REQUEST,
    PROMOTION_OFFER_LISTING_FAIL,
    ADD_PROMOTION_OFFER_REQUEST,
    ADD_PROMOTION_OFFER_SUCCESS,
    ADD_PROMOTION_OFFER_FAIL
} from '../constants/PromotionConstants'
import axios from 'axios'

// Get Promotion Offer Listing
export const getOfferListing = (actionData) => async (dispatch) => {
    dispatch({ type: PROMOTION_OFFER_LISTING_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/offers.php', actionData, config)
    if (!data) {
        dispatch({
            type: PROMOTION_OFFER_LISTING_FAIL,
            payload: "No Offer Available"
        })
    } else {
        dispatch({
            type: PROMOTION_OFFER_LISTING_SUCCESS,
            payload: data.result
        })
    }
}

// Add Promotion Offer Step 3
export const addOffer = (mgData) => async (dispatch) => {
    dispatch({ type: ADD_PROMOTION_OFFER_REQUEST })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const { data } = await axios.post('http://www.mastergarage.in/garageapi/admin/offers.php', mgData, config)
        dispatch({
            type: ADD_PROMOTION_OFFER_SUCCESS,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: ADD_PROMOTION_OFFER_FAIL,
            payload: err
        })
    }
}
