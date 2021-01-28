import React from 'react';
import classes from './Cart.module.css'

const Cart = (props) =>(
    <div className={classes.cart}>
        <h1>Cart</h1>
        {props.products}
    </div>
)

export default Cart;