import Item from "../Item"

const ItemList = ({ productos, cart, setCart }) => {
    return (
        <>
            <h4>Productos</h4>
            <div className=''>
                {productos?.map(prod => <Item producto={prod} key={prod.id} cart={cart} setCart={setCart} />)}
            </div>
        </>
    )

}

export default ItemList