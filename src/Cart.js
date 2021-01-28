import React from 'react';
import './Cart.css'
import CartItem from './CartItem'

const Cart = (props) =>{
    const {products}= props;
    return(
    <div className='cart'>
        <h1>Cart</h1>
        {products.map((product)=>{
            return <CartItem product = {product}/>
        })}
        
    </div>
    )
}

export default Cart;