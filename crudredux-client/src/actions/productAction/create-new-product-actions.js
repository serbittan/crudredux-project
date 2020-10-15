import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../../types'

import Swal from 'sweetalert2'
import { addProductDb } from '../../logic'


// Crear nuevos productos.
export default function createNewProductActions(product) {
    return async (dispatch) => {
        dispatch(addProduct())

        try {
            await addProductDb(product)
            // alerta de éxito.
            dispatch(addProductSuccess(product))

            Swal.fire({
                icon: 'success',
                title: 'Correct',
                text: 'you product has been added successfully',
                showConfirmButton: false,
                timer: 1500
            })
            
        } catch (error) {
            console.log(error)
            dispatch(addProductError(true))
            // alerta de error.
            Swal.fire({
                icon: 'error',
                title: 'Ooops!',
                text: 'There was a mistake, try again.',
                showConfirmButton: true,
                //timer: 1500    
            })
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