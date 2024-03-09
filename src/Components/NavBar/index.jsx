import CartWidget from "../CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to={"/"}>-   <h3> Tienda Laser   navbar</h3>   </Link>
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