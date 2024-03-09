import CartWidget from "../CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to={"/"}>-   <h3> Tienda Laser   navbar</h3>   </Link>
            <div className="Categories">
                <Link to={`/category/electronics`}>-  electronics      </Link>
                <Link to={`/category/jewelery`}> - jewelery     </Link>
                <Link to={`/category/men's clothing`}> - men's clothing     </Link>
                <Link to={`/category/women's clothing`}>-  women's clothing     </Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar