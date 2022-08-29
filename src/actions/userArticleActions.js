import axios from 'axios'
import {
    ADMIN_USER_ARTICLE_REQUEST,
    ADMIN_USER_ARTICLE_SUCCESS,
    ADMIN_USER_ARTICLE_FAIL,
    USER_USER_ARTICLE_REQUEST,
    USER_USER_ARTICLE_SUCCESS,
    USER_USER_ARTICLE_FAIL,
    GET_USER_ARTICLE_REQUEST,
    GET_USER_ARTICLE_SUCCESS,
    GET_USER_ARTICLE_FAIL,
    UPDATE_USER_ARTICLE_REQUEST,
    UPDATE_USER_ARTICLE_SUCCESS,
    UPDATE_USER_ARTICLE_FAIL,
    DELETE_USER_ARTICLE_REQUEST,
    DELETE_USER_ARTICLE_SUCCESS,
    DELETE_USER_ARTICLE_FAIL,
    NEW_USER_ARTICLE_REQUEST,
    NEW_USER_ARTICLE_SUCCESS,
    NEW_USER_ARTICLE_FAIL,
    CLEAR_ERRORS
} from '../constants/userArticleConstants'

// Get single user article 

export const getSingleUserArticle = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_USER_ARTICLE_REQUEST })
        const { data } = await axios.get(`/singlearticle/${id}`);
        dispatch({
            type: GET_USER_ARTICLE_SUCCESS,
            payload: data.article
        })
    } catch (error) {
        dispatch({
            type: GET_USER_ARTICLE_FAIL,
            payload: error.response.data.message
        })
    }
} 

// Sending User Article (user)
export const newUserArticle = (userArticleData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_USER_ARTICLE_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(userArticleData)
        const { data } = await axios.post(`/article/new`, userArticleData, config)
        dispatch({
            type: NEW_USER_ARTICLE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_USER_ARTICLE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get All userArticle () 
export const getUserArticle = () => async (dispatch) => {
    try {
        dispatch({ type: USER_USER_ARTICLE_REQUEST })
        const { data } = await axios.get(`/article/me`)
        dispatch({
            type: USER_USER_ARTICLE_SUCCESS,
            payload: data.articles
        })
    } catch (error) {
        dispatch({
            type: USER_USER_ARTICLE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get All userarticle (ADMIN) 
export const getAllUserArticle = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_USER_ARTICLE_REQUEST })
        const { data } = await axios.get(`/admin/submitted/articles`)
        dispatch({
            type: ADMIN_USER_ARTICLE_SUCCESS,
            payload: data.userArticle
        })
    } catch (error) {
        dispatch({
            type: ADMIN_USER_ARTICLE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Abstract Status (ADMIN)
export const updateUserArticleStatus = (id, statusData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_USER_ARTICLE_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/admin/article/${id}`, statusData, config)
        dispatch({
            type: UPDATE_USER_ARTICLE_SUCCESS,
            payload: data.success
        });
    } catch (error) {
        dispatch({
            type: UPDATE_USER_ARTICLE_FAIL,
            payload: error.response.data.message
        })
    }
}


// Delete User Article (ADMIN)
export const deleteUserArticle = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_USER_ARTICLE_REQUEST
        })
        const { data } = await axios.delete(`/admin/submitted/article/${id}`);

        dispatch({
            type: DELETE_USER_ARTICLE_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_USER_ARTICLE_FAIL,
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