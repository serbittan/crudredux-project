import {
    START_EDITION_PRODUCT,
    PRODUCT_EDITED_SUCCESS,
    PRODUCT_EDITED_ERROR
} from '../../types'

import { updateProductDb } from '../../logic'

// Edita un registro en la api y state.
const editProductAction = product => {
    return async (dispatch) => {
        dispatch(editProduct(product))

        try {
            await updateProductDb(product)

            dispatch(editProductSuccess(product))
        } catch (error) {
            dispatch(editProductError())
        }
    }
}

export default editProductAction


const editProduct = () => ({
    type: START_EDITION_PRODUCT,
})

const editProductSuccess = product => ({
    type: PRODUCT_EDITED_SUCCESS,
    payload: product
})

const editProductError = () => ({
    type: PRODUCT_EDITED_ERROR,
    payload: true
})