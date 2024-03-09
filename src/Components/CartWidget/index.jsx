import cart from './assets/carro.png'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)

    return (
        <div>
            <img src={cart} alt="cart-widget" width={50} />

            <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
        </div>
    )
}
export default CartWidget


