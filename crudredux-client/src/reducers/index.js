import { combineReducers } from 'redux' // Función para manejar los reducers en caso de haber más de uno.

import productsReducer from './productsReducer'
import alertReducer from './alertReducer'

export default combineReducers({
    products: productsReducer,   // products sería el state del productsReducer.
    alert: alertReducer
})