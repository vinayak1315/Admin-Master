import {
    ALL_ARTICLES_REQUEST,
    ALL_ARTICLES_SUCCESS,
    ALL_ARTICLES_FAIL,
    ADMIN_ARTICLES_REQUEST,
    ADMIN_ARTICLES_SUCCESS,
    ADMIN_ARTICLES_FAIL,
    DELETE_ARTICLE_REQUEST,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_FAIL,
    NEW_ARTICLE_REQUEST,
    NEW_ARTICLE_SUCCESS,
    NEW_ARTICLE_FAIL,
    CLEAR_ERRORS
} from '../constants/articleConstants'

import axios from 'axios'

// Get articles
export const getArticles = (keyword = '' , currentPage=1, category) => async (dispatch) => {
    try {
        dispatch({ type: ALL_ARTICLES_REQUEST })
        let link = `/articles?keyword=${keyword}&page=${currentPage}`
         if (category) {
            link = `/articles?keyword=${keyword}&page=${currentPage}&category=${category}`
        }
        const { data } = await axios.get(link)
        dispatch({
            type: ALL_ARTICLES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_ARTICLES_FAIL,
            payload: error.response.data.message
        })
    }
}
// Get Admin Articles
export const getAdminArticles = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_ARTICLES_REQUEST })
        const { data } = await axios.get(`/admin/articles`)
        dispatch({
            type: ADMIN_ARTICLES_SUCCESS,
            payload: data.articles
        })
    } catch (error) {
        dispatch({
            type: ADMIN_ARTICLES_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete Admin Article
export const deleteArticle = (id) => async (dispatch) => {
    try {
        dispatch({type: DELETE_ARTICLE_REQUEST})
        const { data } = await axios.delete(`/admin/article/${id}`)
        dispatch({
            type: DELETE_ARTICLE_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_ARTICLE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Publishing Paper
export const newArticle = (articleData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_ARTICLE_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(articleData)
        const { data } = await axios.post(`/admin/article/new`,articleData, config)
        dispatch({
            type: NEW_ARTICLE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_ARTICLE_FAIL,
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