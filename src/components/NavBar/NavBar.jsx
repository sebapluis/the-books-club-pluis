/*import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";*/
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () =>{
 
  
    return(
      <div className="nav">
        <div className="logo">
          <NavLink to="/" className="logo"><h2>The Books Club</h2></NavLink>
        </div>
        <div links>
            <ul>
              <li><NavLink to="/category/novela" className={nav => nav.isActive ? "nav-active" : ""}>Novelas</NavLink></li>
              <li><NavLink to="/category/historia" className={nav => nav.isActive ? "nav-active" : ""}>Historia</NavLink></li>
              <li><NavLink to="/category/tecnologia" className={nav => nav.isActive ? "nav-active" : ""}>Tecnologia</NavLink></li>
            </ul>
        </div>
        <div className="carrito">
        <NavLink to="/cart"  className={nav => nav.isActive ? "nav-active" : ""}>
          <CartWidget/>         
        </NavLink>
          
        </div>
      </div>
    )
}

export default NavBar;