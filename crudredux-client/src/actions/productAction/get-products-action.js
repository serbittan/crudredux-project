import {
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
} from '../../types'

 import { getProductsDb } from '../../logic'

const getProductsAction = () => {
    return async (dispatch) => {
        dispatch(downloadProducts())

        try {
            const response = await getProductsDb()

            dispatch(downloadProductsSuccess(response.data))

        } catch (error) {
            dispatch(downloadProductsError())
        }
    }
 }

 export default getProductsAction

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
})

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
})

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
})

