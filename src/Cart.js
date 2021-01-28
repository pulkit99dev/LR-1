import React from 'react';
import './Cart.css'
import CartItem from './CartItem'

const Cart = (props) =>{
    const {products}= props;
    return(
    <div className='cart'>
        
        {products.map((product)=>{
            return <CartItem 
                        product = {product}
                        increaseQty ={props.increasePrice}
                        decreaseQty ={props.decreasePrice}
                        deleteIt={props.deleteProduct}
                    />
        })}
        
    </div>
    )
}

export default Cart;