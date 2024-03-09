import cart from './assets/carro.png'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext (CartContext)

    return (
        <div>
            <img src={cart} alt="cart-widget" width={50} />
            <p>{totalQuantity == 0 ? null : totalQuantity}</p>
        </div>
    )
}
export default CartWidget