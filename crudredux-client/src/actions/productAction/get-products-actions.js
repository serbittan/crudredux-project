import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../../types'

import { getProductsDb } from '../../logic'

const getProductsActions = () => {
    return async (dispatch) => {
        dispatch(getProducts())

        try {
            const response = await getProductsDb()

            dispatch(getProductsSuccess(response.data))

        } catch (error) {
            dispatch(getProductsError(error.response.data))
        }
    }
}

export default getProductsActions

const getProducts = () => ({
    type: GET_PRODUCTS,
    payload: true
})

const getProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
})

const getProductsError = message => ({
    type: GET_PRODUCTS_ERROR,
    payload: message
})

