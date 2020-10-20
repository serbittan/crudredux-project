import axiosClient from '../config/axios'

const updateProductDb = product => {
    const { id } = product
    
    return ( async () => {
        const response = await axiosClient.put(`/productos/${id}`, product )

        console.log(response)
        return response
    })()
}
 
export default updateProductDb