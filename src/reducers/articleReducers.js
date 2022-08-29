import {
    ALL_ARTICLES_REQUEST,
    ALL_ARTICLES_SUCCESS,
    ALL_ARTICLES_FAIL,
    ADMIN_ARTICLES_REQUEST,
    ADMIN_ARTICLES_SUCCESS,
    ADMIN_ARTICLES_FAIL,
    DELETE_ARTICLE_REQUEST,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_RESET,
    DELETE_ARTICLE_FAIL,
    NEW_ARTICLE_REQUEST,
    NEW_ARTICLE_SUCCESS,
    NEW_ARTICLE_FAIL,
    NEW_ARTICLE_RESET,
    CLEAR_ERRORS
} from '../constants/articleConstants'

// Get User amd admin Articles Reducer
export const articlesReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
        case ALL_ARTICLES_REQUEST:
        case ADMIN_ARTICLES_REQUEST:
            {
                return {
                    loading: true,
                    articles: []
                }
            }
        case ALL_ARTICLES_SUCCESS: {
            return {
                loading: false,
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount,
                resPerPage: action.payload.resPerPage,
                filteredArticlesCount: action.payload.filteredArticlesCount
            }
        }
        case ADMIN_ARTICLES_SUCCESS: {
            return {
                loading: false,
                articles: action.payload
            }
        }
        case ALL_ARTICLES_FAIL:
        case ADMIN_ARTICLES_FAIL:
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

// Delete Article (Admin)
export const articleReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_ARTICLE_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case DELETE_ARTICLE_SUCCESS: {
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        }
        case DELETE_ARTICLE_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }
        case DELETE_ARTICLE_RESET:
            return {
                ...state,
                isDeleted: false
            }
        default:
            return state;
    }
}

// Publish Paper (ADMIN) 
export const newArticleReducer = (state = { article: {} }, action) => {
    switch (action.type) {

        case NEW_ARTICLE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_ARTICLE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                article: action.payload.article
            }

        case NEW_ARTICLE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_ARTICLE_RESET:
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
