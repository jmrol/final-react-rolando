import React ,{useState, createContext } from "react";

export const CartContext = createContext()

const CartProvider= ({children}) => {
    
const [cart,setCart] =useState([])
const [total,setTotal]  =useState(0)
const [totalQuantity,setTotalQuantity] =useState(9)

const agregarCarrito =(products,count) =>{

    console.log(products)
    console.log(count)

}

const eliminarItem =() =>{
    
}
  
const vaciarCarrito =() =>{
    
}

const cantidadCarrito =() =>{
    
}

const totalCarrito =() =>{
    
}

    return(
        
        <CartContext.Provider value={{cart,total,totalQuantity,agregarCarrito}} >
         {children}   
        </CartContext.Provider>
    )
}

export default CartProvider