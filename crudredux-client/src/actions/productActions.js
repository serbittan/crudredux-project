import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types'

import { addProductDb } from '../logic'


// Crear nuevos productos.
export function createNewProductActions(product) {
    return async (dispatch) => {
        dispatch(addProduct())

        try {
            await addProductDb(product)

            dispatch(addProductSuccess(product))

        } catch (error) {
            console.log(error)
            dispatch(addProductError(true))
        }
    }

}





const addProduct = () => ({
    type: ADD_PRODUCT,
    //payload:
})

// Si el producto se guarda en db.
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

// Si hubo un error.
const addProductError = estado => ({
    type: ADD_PRODUCT_ERROR,
    payload: estado
})