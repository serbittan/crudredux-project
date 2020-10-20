import {
    GET_DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR
} from '../../types'

import { deleteProductDb } from '../../logic'

import Swal from 'sweetalert2'

// Selecciona y elimina el producto.
const deleteProductAction = id => {

    return async(dispatch) => {
        dispatch(getDeleteProduct(id))

        try {
            await deleteProductDb(id)

            dispatch(deleteProductSuccess())

            // confirmación.
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )

        } catch (error) {
            dispatch(deleteProductError())
        }
    }
}

export default deleteProductAction


const getDeleteProduct = id => ({
    type: GET_DELETE_PRODUCT,
    payload: id
})

const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS,
})

const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR,
    payload: true
})