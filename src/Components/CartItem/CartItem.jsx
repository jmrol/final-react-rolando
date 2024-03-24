import React from 'react';

const CartItem = ({ producto, eliminarItem }) => {

    return (
        <div>
            <h3>{producto.producto.title}</h3>

            <img src={producto.producto.image} alt={producto.producto.title} width={100}/>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Valor unitario: ${producto.producto.price * producto.cantidad}</p>
            <button onClick={() => eliminarItem(producto.producto.id)}>Eliminar producto</button>
        </div>
    );
};

export default CartItem;