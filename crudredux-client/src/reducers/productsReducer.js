import { 
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    GET_PRODUCT_EDIT,
    PRODUCT_EDITED_SUCCESS,
    PRODUCT_EDITED_ERROR
} from '../types'

// Cada reducer tiene su propio state.
const initialState = {
    products: [],
    error: null,
    loading: false,
    productdelete: null,
    productedit: null
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:
        case START_DOWNLOAD_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }

        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [ ...state.products, action.payload]
            }

        case ADD_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case DELETE_PRODUCT_ERROR:
        case  PRODUCT_EDITED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false, 
                error: null,
                products: action.payload
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
            
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                productedit: action.payload
            }
        
        case PRODUCT_EDITED_SUCCESS:
            return {
                ...state,
                productedit: null,
                products: state.products.map(product => product.id === action.payload.id ? product = action.payload : product )
            }
            
            default:
                return state
        }
    }
    
    export default productsReducer






