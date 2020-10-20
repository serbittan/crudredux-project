import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions de Redux.
import { createNewProductAction } from '../actions/productAction'
import { showAlertAction, hideAlertAction } from '../actions/alertAction'


const NewProduct = ({ history }) => {
    // State local propio del componente.
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    // Utilizar useDispatch para crear una función.
    const dispatch = useDispatch()

    // Acceder al state del store.(products o alert)
    const charging = useSelector( state => state.products.loading)
    const error = useSelector(state => state.products.error)
    const alert = useSelector(state => state.alert.alert)

    // mandar llamar el action del productActions
    const addProduct =  product => dispatch( createNewProductAction(product) )

    // cuando user hace submit
    const submitNewProduct = event => {
        event.preventDefault()

        // validar campos.
        if (!name.trim() || price <= 0) {  // trim no es un método de los números.

            // creamos un objeto para alertas.
            const alert = {
                msg: 'All fields are require',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            // llamar al actions.
            dispatch(showAlertAction(alert))

            return
        }
        // si no hay error.
        dispatch(hideAlertAction())

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

                        {alert && <p className={alert.classes}>{alert.msg}</p>}
                        
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
                                    autoFocus
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