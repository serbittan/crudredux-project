// import { 
//     ADD_PRODUCT,
//     ADD_PRODUCT_SUCCESS,
//     ADD_PRODUCT_ERROR,
//     START_DOWNLOAD_PRODUCTS,
//     DOWNLOAD_PRODUCTS_SUCCESS,
//     DOWNLOAD_PRODUCTS_ERROR,
//     // GET_DELETE_PRODUCT,
//     // DELETE_PRODUCT_SUCCESS,
//     // DELETE_PRODUCT_ERROR,
//     // GET_PRODUCT_EDIT,
//     // PRODUCT_EDITED_SUCCESS,
//     // PRODUCT_EDITED_ERROR
// } from '../types'


// // Crear nuevos productos.
// export function createNewProductAction(product) {
//     return dispatch => {
//         dispatch(addProduct())

//         try {
//             dispatch(addProductSuccess(product))
//         } catch (error) {
//             dispatch(addProductError(true))
//         }
//     }
// }

// const addProduct = () => ({
//     type: ADD_PRODUCT,
//     payload: true
// })

// // Si el producto se guarda en DB.
// const addProductSuccess = product => ({
//     type: ADD_PRODUCT_SUCCESS,
//     payload: product
// })

// // Si el producto no se guarda y da error.
// const addProductError = estado => ({
//     type: ADD_PRODUCT_ERROR,
//     payload: estado
// })

// // Función que descarga los productos de dB.
// export function getProductsAction() {
//     return (dispatch) => {
//         dispatch(downloadProducts())
//     }
// }

// const downloadProducts = () => ({
//     type: START_DOWNLOAD_PRODUCTS,
//     payload: true
// })