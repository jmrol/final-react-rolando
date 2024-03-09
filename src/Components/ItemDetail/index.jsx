import React, { useState, useContext } from "react"
import ItemCount from "../ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"




const ItemDetail = (products) => {
    const [cart, setCart] = useState(false)

    const { agregarCarrito } = useContext(CartContext)
    const onAdd = (count) =>{
        setCart(true)
        console.log ('Cantidad agregada',count)
    agregarCarrito(products,count)
    }

    return (
        <article className="CarItem" style={{ backgroundColor: 'green', width: '80%' }} >
            <header className="Header">
                <h2 className="ItemHeader">
                    {products.name}
                </h2>
            </header>
            <picture>
                <img src={products.image} alt={products.title} width={300} />
            </picture>
            <section>
                <p className="Info"> Categoria:{products.category}</p>
                <p className="Info">Descripcion:{products.description}</p>
                <p className="Info">Precio:${products.price}</p>

                {cart ? <Link to={'/cart'}>Ver carrito</Link> :<ItemCount initial={1} stock={10} onAdd={onAdd} />}

            </section>
            <footer className="ItemFooter">


            </footer>
        </article>




    )
}

export default ItemDetail
