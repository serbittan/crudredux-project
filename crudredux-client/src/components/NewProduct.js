import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions de Redux.
import { createNewProductActions } from '../actions/productAction'



const NewProduct = ({ history }) => {
    // State propio del componente.
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    // Utilizar useDispatch para crear una función.
    const dispatch = useDispatch()

    // Acceder al state del store.
    const charging = useSelector( state => state.products.loading)
    const error = useSelector(state => state.products.error)


    // mandar llamar el action del productActions
    const addProduct =  (product) => dispatch( createNewProductActions(product) )

    // cuando user hace submit
    const submitNewProduct = event => {
        event.preventDefault()

        // validar campos
        if (!name.trim() || price <= 0) {
            return
        }
        // error
        // crear new product
        addProduct({
            name,
            price
        })

        // redireccionar.
        history.push('/')
    }


    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add New Product
                        </h2>

                        <form
                            onSubmit={submitNewProduct}
                        >
                            <div className="form-group">
                                <label>Product Name:</label>
                                <input
                                    type="text" 
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
                                    onChange={ event => setName(event.target.value)}
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
                                    onChange={event => setPrice(Number(event.target.value)) }  // por default se crea como string y lo queremos como number.
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Add</button>
                            
                        </form>

                        {charging && <p>Loading...</p>}
                        {error && <p className="alert alert-danger p2 mt-4 text-center">There was a mistake!</p>}
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default NewProduct