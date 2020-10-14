import axiosClient from '../config/axios'

const addProductDb = product => {
    return (async () => {
        await axiosClient.post('/productos', product)
        
        return

    })()
}

export default addProductDb