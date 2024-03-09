import { Link } from "react-router-dom"


const Item = ({producto,cart,setCart}) =>{

    const addToCart =()=>{
        setCart([...cart,producto])
    }

    return(
<div>
<div>
    <img src={producto.image} alt={producto.title} width={200}/>
</div>
<div>
    <p>{producto.title}</p>
    <p>$ {producto.price}</p>
</div>
{/* <button onClick={addToCart} > Agregar</button> */}

<Link to={`/item/${producto.id}`}>ver detalle</Link>

</div>

)

}

export default Item