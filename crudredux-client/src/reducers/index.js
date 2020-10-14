import { combineReducers } from 'redux' // Función para manejar los reducers en caso de haber más de uno.

import productsReducer from './productsReducer'

export default combineReducers({
    products: productsReducer
})