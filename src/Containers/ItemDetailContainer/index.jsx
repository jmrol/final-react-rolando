import { useState,useEffect } from "react"
import ItemDetail from "../../Components/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer =()=> {
    const [products,setProducts] = useState([])
const {id}= useParams()


useEffect(() => {
   {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
            .catch(e => console.error(e))
    }

}, [id])

return(
    <div className="ItemDetailContainer"   style={{backgroundColor:'red' ,  width: '90%'}}>
     <h1>Item</h1>
     <ItemDetail {...products}/>
{/* <ItemDetail {...products}/> */}
    </div>
)
}
export default ItemDetailContainer 