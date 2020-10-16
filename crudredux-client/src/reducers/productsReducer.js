import { 
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR
} from '../types'

// Cada reducer tiene su propio state.
const initialState = {
    products: [],
    error: null,
    loading: false,
    productdelete: null
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

        case GET_DELETE_PRODUCT:
            return {
                ...state,
                productdelete: action.payload
            }

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.productdelete),
                productdelete: null
            }

        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload  // true
            }

        default:
            return state
    }
}

export default productsReducer