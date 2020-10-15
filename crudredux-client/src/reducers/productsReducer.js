import { 
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../types'

// Cada reducer tiene su propio state.
const initialState = {
    products: [],
    error: null,
    loading: false
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            }

        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [ ...state.products, action.payload],
                loading: false
            }

        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case GET_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false, 
                error: null,
                products: action.payload
            }

        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default productsReducer