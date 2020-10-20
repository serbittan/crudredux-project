import { HIDE_ALERT } from '../../types'

const hideAlertAction = () => {
    return (dispatch) => {
        dispatch(hideAlert())
    }
}
 
export default hideAlertAction

const hideAlert = () => ({
    type: HIDE_ALERT
})