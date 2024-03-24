import cart from './assets/carro.png'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from "react-router-dom"


const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext)

    return (
        <div>
            <Link to={'/cart'}>- <img src={cart} alt="cart-widget" width={40} />   
            <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p> </Link>
           
        </div>
    )
}
export default CartWidget


