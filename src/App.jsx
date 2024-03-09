import {
  BrowserRouter, Routes, Route, Link,
} from "react-router-dom";
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartProvider from "./Context/CartContext";
import Cart from "./Components/Cart";

/////zmfbkjabefjkbjsdfbjb
function App() {
  return (
    <div>

      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

