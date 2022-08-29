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
    UPDATE_USER_ARTICLE_RESET,
    DELETE_USER_ARTICLE_REQUEST,
    DELETE_USER_ARTICLE_SUCCESS,
    DELETE_USER_ARTICLE_RESET,
    DELETE_USER_ARTICLE_FAIL,
    NEW_USER_ARTICLE_REQUEST,
    NEW_USER_ARTICLE_SUCCESS,
    NEW_USER_ARTICLE_FAIL,
    NEW_USER_ARTICLE_RESET,
    CLEAR_ERRORS
} from '../constants/userArticleConstants'


// Get single user request

export const getSingleUserArticle = (state = { article: []}, action) => {
    switch(action.type) {
        case GET_USER_ARTICLE_REQUEST: 
        return {
            loading: true,
            article: []
        }
        case GET_USER_ARTICLE_SUCCESS: 
        return {
            loading: false,
            article: action.payload
        }
        case GET_USER_ARTICLE_FAIL: 
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

// Publish Paper (USER) 
export const newUserArticleReducer = (state = { userArticle: {} }, action) => {
    switch (action.type) {
        case NEW_USER_ARTICLE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_USER_ARTICLE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                userArticle: action.payload.userArticle
            }

        case NEW_USER_ARTICLE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_USER_ARTICLE_RESET:
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

// Abstract Reducer 

export const userArticlesReducer = (state={ userArticles: [] }, action) => {
    switch (action.type) {
        case USER_USER_ARTICLE_REQUEST:
        case ADMIN_USER_ARTICLE_REQUEST:
            {
                return {
                    loading: true,
                    userArticles: []
                }
            }
        case USER_USER_ARTICLE_SUCCESS:
        case ADMIN_USER_ARTICLE_SUCCESS: {
            return {
                loading: false,
                userArticles: action.payload
            }
        }
        case USER_USER_ARTICLE_FAIL:
        case ADMIN_USER_ARTICLE_FAIL:
            {
                return {
                    loading: false,
                    error: action.payload
                }
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

// Update Abstract Status Reducer

export const userArticleReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_USER_ARTICLE_REQUEST:
        case DELETE_USER_ARTICLE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_USER_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_USER_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_USER_ARTICLE_FAIL:
        case DELETE_USER_ARTICLE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_USER_ARTICLE_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case DELETE_USER_ARTICLE_RESET:
            return {
                ...state,
                isDeleted: false
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
