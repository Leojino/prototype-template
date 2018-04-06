import React, { Component } from 'react';
import './Cart.css';


class Cart extends Component {

    render() {
        return (
            <div className="container-fluid">
                <h2 className="page-title">Shopping cart</h2>
                <div className="alert alert-primary" role="alert">
                    Product Added to cart.
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Product 1<span className="product-desc"> description about product</span> </td>
                            <td>Rs.xxx</td>
                            <td>L</td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td><div className="text-right">Total</div></td>
                            <td>Rs.xxxx</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cart;