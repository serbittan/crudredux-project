import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { editProductAction } from '../actions/productAction'



const EditProduct = () => {
    // Crear la función dispatch.
    const dispatch = useDispatch()

    // Habilitar useHistory para redireccionar.
    const history = useHistory()

    // Nuevo state de product. El state del producto modificado antes de usuario hacer submit
    const [product, setProduct] = useState({
        name: '',
        price: ''
    })
    
    // Producto a editar.
    const productedit = useSelector(state => state.products.productedit)
    console.log(productedit)

    // Llenar el state automáticamente.
    useEffect( () => {
        setProduct(productedit)

    }, [productedit]) 

    

    // Leer los datos del formulario.
    const onChangeFormulario = event => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }
    
    const { name, price } = product // mucho cuidado aquí!!

    
    const submitEditProduct = event => {
        event.preventDefault()
        // Para enviar al actions.
        dispatch(editProductAction(product))

        history.push('/')
    }


    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit New Product
                        </h2>

                        <form 
                            onSubmit={submitEditProduct}
                        >
                            <div className="form-group">
                                <label>Product Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
                                    onChange={onChangeFormulario}
                                />
                            </div>

                            <div className="form-group">
                                <label>Product Price:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Price"
                                    name="price"
                                    value={price}
                                    onChange={onChangeFormulario}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                >Save Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default EditProduct