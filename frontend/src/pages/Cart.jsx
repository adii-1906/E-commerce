import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

    const { products, currency, cartItems } = useContext(ShopContext);

    

    return (
        <div>
        
        </div>
    )
}

export default Cart
