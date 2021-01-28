import React from 'react';

const Navbar = (props) => {
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src='https://www.flaticon.com/svg/vstatic/svg/4108/4108854.svg?token=exp=1611835418~hmac=711342deec7686bdaee8e520cf14185f' alt='Cart-icon' />
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        )
    }

const styles = {
    cartIcon : {
        height : 32,
        marginRight: 20
    },
    nav:{
        height: 70,
        background : '#4267b2',
        display : 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount:{
        background: 'darkYellow',
        borderRadius : '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};

export default Navbar;