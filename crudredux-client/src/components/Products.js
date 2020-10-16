import React, { Fragment, useEffect } from 'react'
import ItemProduct from './Item-product'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getProductsActions } from '../actions/productAction'


const Products = () => {

    // Utilizar useDispatch para crear una function.
    const dispatch = useDispatch()

    // Mandar llamar al actions del productActions. (esto podría añadirlo dentro del useEffect)
    const getProducts = () => dispatch(getProductsActions())

    // Acceder al state del store.
    const products = useSelector(state => state.products.products)
    const error = useSelector(state => state.products.error)
    const charging = useSelector(state => state.products.loading)

    useEffect(() => {
        getProducts()

    }, [])


    return (
        <Fragment>
            <h2 className="text-centre my-5">Products List</h2>

            {charging && <p className="text-center">Cargando...</p>}
            
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Accions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? 'No products yet!' : (
                        products.map(product => (
                            <ItemProduct
                                key={product.id}
                                product={product}
                            />
                        ))
                    )}

                </tbody>
            </table>
            { error && <p className="font-weight-bold alert alert-danger text-center">There was a mistake 😖</p>}
        </Fragment>
    )
}

export default Products