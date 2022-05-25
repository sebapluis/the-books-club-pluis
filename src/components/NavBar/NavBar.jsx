import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Navbar, Container, Nav} from "react-bootstrap";


const NavBar = () =>{
    return(
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="logo"><h1>The Books Club</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/category/novela"}  className={nav => nav.isActive ? "nav-active" : ""}>Novelas</Nav.Link>
          <Nav.Link as={Link} to={"/category/historia"}  className={nav => nav.isActive ? "nav-active" : ""} >Historia</Nav.Link>
          <Nav.Link as={Link} to={"/category/infantiles"}  className={nav => nav.isActive ? "nav-active" : ""}>Infantiles</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <CartWidget/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar

    
    
    
    /*
    (
      
      <div className="nav">
        <div className="logo">
          <NavLink to="/" className="logo"><h2 className="logo">The Books Club</h2></NavLink>
        </div>
        <div links>
            <ul>
              <li><NavLink to="/category/novela" className={nav => nav.isActive ? "nav-active" : ""}>Novelas</NavLink></li>
              <li><NavLink to="/category/historia" className={nav => nav.isActive ? "nav-active" : ""}>Historia</NavLink></li>
              <li><NavLink to="/category/tecnologia" className={nav => nav.isActive ? "nav-active" : ""}>Infantiles</NavLink></li>
            </ul>
        </div>
        <div className="carrito">
        <NavLink to="/cart"  className={nav => nav.isActive ? "nav-active" : ""}>
          <CartWidget/>         
        </NavLink>
          
        </div>
      </div>

    )    */
