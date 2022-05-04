/*import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";*/
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () =>{
    return(
      <div className="nav">
        <div className="logo">
          <h2>The Books Club</h2>
        </div>
        <div links>
            <ul className="nav-links">
              <li>Novelas</li>
              <li>Historia</li>
              <li>Geografia</li>
            </ul>
        </div>
        <div className="carrito">
          <CartWidget/>
        </div>
      </div>
      /*
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">THE BOOKS CLUB</Navbar.Brand>
        <CartWidget />
      </Container>
    </Navbar>
      */
    )
}

export default NavBar;