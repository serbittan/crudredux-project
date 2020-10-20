import React from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

// Redux
import { useDispatch } from 'react-redux'
import { deleteProductAction, getProductEdit } from '../actions/productAction'



const ItemProduct = ({ product }) => {
    const { name, price, id } = product

    // Crear funcion con useDispatch.
    const dispatch = useDispatch()
    
    // Habilitar useHistory para redirección.
    const history = useHistory()

    // Confirmar si desea eliminarlo.
    const confirmDeleteProduct = id => {

        // preguntar si desea eliminar con un alert.
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                // pasar al action.
                dispatch(deleteProductAction(id))
            }
          })
    }

    // Function que redirecciona de forma programada.
    const redirectEdit = product => {
        dispatch(getProductEdit(product))
        
        history.push(`/products/edit/${product.id}`)
    }


    return (

        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">€ {price}</span></td>
            <td className="acciones">
                <button
                    onClick={ () => redirectEdit(product)}
                    type="button" 
                    className="btn btn-primary mr-2"
                    
                >Edit</button>

                <button
                    onClick={() => confirmDeleteProduct(id)}
                    type="button"
                    className="btn btn-danger"
                >Delete</button>
            </td>
        </tr>

    )
}

export default ItemProduct