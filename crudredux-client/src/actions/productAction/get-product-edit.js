// Aquí no hay llamada a Api.

import {
        GET_PRODUCT_EDIT
} from "../../types"
    


    // Colocar producto en edición.
const getProductEdit = product => {
    return (dispatch => {
        dispatch(getProductAction(product))
    })
}

export default getProductEdit

const getProductAction = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
})