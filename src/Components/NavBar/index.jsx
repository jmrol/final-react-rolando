import CartWidget from "../CartWidget"
import { Link } from "react-router-dom"
import logo from "./logo192.png"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to={"/"}><img src={logo} alt="cart-widget" width={50} />  <h3> Tienda Laser   navbar</h3>   </Link>
            <div className="Categories">
                <Link to={`/category/Ropa`}>-  Ropa     </Link>
                <Link to={`/category/Hogar`}> - Hogar     </Link>
                <Link to={`/category/Calzado`}> - Calzado     </Link>
                <Link to={`/category/Tecnología`}>-  Tecnología     </Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar