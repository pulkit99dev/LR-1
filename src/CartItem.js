import React from 'react';

const CartItem = (props) =>{
    const {qty, title, price} = props.product;
    const {product} = props;
    return(
        <div>
            <img style= {styles.image} src={product.img}/>
            <div>{title}</div>
            <div>{price}</div>
            <div>{qty}</div>
        </div>
    )
}

const styles = {
    image:{
        height : 110,
        width : 110,
        borderRadius : 4,
        border : 'solid',
        background : '#ccc'
    }
}

export default CartItem;