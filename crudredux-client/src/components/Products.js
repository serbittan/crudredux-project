import React, { Fragment } from 'react'

const Products = () => {
    return ( 
        <Fragment>
            <h2 className="text-centre my-5">Products List</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Accions</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>

        </Fragment>
     )
}
 
export default Products