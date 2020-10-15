import axiosClient from '../config/axios'


const getProductsDb = () => {
    return (async () => {
        const response = await axiosClient.get('/productos')

        return response

    })()
}

export default getProductsDb