import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import './navbar.css'
interface NavBarProps {
    
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
    return ( 
        <div id="nav" className="sticky">
            <Link className="homeLink" to="/">Home</Link>
            <Link className="cartLink" to="/cart">Cart</Link>
        </div>
    );
}
 



export default NavBar;