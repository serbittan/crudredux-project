import { SHOW_ALERT } from '../../types'


// Mostrar alerta.
const showAlertAction = alert => {
    return (dispatch) => {
        dispatch(showAlert(alert))
    }
}

export default showAlertAction

const showAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})