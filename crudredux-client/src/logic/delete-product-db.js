import axiosClient from '../config/axios'

const deleteProductDb = id => {
    return ( async () => {
        await axiosClient.delete(`/productos/${id}`)
        
        return 
    })()
}
 
export default deleteProductDb