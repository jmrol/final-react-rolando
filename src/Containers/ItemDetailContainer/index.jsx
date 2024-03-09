import { useState,useEffect } from "react"
import ItemDetail from "../../Components/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from '../../firebase/firebase';
import { doc,getDoc } from 'firebase/firestore';

const ItemDetailContainer =()=> {
    const [products,setProducts] = useState([])
const {id}= useParams()


useEffect(()=>{

    //GENERAMOS EL LLAMADO AL DOCUMENTO DETERMINADO
    const nuevoDoc = doc(db,"productos",id)

    //HACEMOS EL LLAMADO AL DOCUMENTO Y LO RENDERIZAMOS EN PANTALLA
    getDoc(nuevoDoc)
    .then(res => {
      const data = res.data()
      const nuevoProducto = {id: res.id,...data}
      setProducts(nuevoProducto)
    })
    .catch(error => console.log(error))
},[])

return(
    <div className="ItemDetailContainer"   style={{backgroundColor:'red' ,  width: '90%'}}>
     <h1>Item</h1>
     <ItemDetail {...products}/>

    </div>
)
}
export default ItemDetailContainer 