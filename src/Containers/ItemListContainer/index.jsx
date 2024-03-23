import { useEffect, useState } from 'react';
import ItemList from '../../Components/ItemList';
import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebase';


import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const misProductos =
            id ?
                query(collection(db, "productos"), where("category", "==", id))
                :
                collection(db, "productos")

        getDocs(misProductos)
            .then((res) => {
                const nuevosProductos = res.docs.map((doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos)
            })
            .catch((error) => console.log(error))

    }, [id])


    return (
        <div className="App" style={{ backgroundColor: 'purple' }}>
            <header className="App-header">
                <div>

                    {productos.length == 0 ? (<h1>CARGANDO..</h1>) : (<ItemList productos={productos} cart={cart} setCart={setCart} />)}
                </div>
            </header>
        </div>
    );
}
export default ItemListContainer


