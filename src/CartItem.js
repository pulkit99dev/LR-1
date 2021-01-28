import React from 'react';

const CartItem = (props) =>{
    const {qty, title, price} = props.product;
    const {product, increaseQty} = props;
    return(
        <div>
            <img style= {styles.image} src={product.img}/>
            <div>{title}</div>
            <div>{price}</div>
            <div>{qty}</div>
            <img className='action-icons' 
                src='https://www.flaticon.com/svg/vstatic/svg/753/753317.svg?token=exp=1611835226~hmac=43199b1aeb217867502a1c5ba3e24515' 
                onClick={()=>increaseQty(product)}></img>
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