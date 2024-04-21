import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import './NavBar.scss'
import logo from '../../assets/img/logo.png'
export const NavBar = () => {
    return <>
        <Navbar bg="" expand="lg" id="nav-bar">
            <Container>
            <a className="navbar-brand" href="#"><img src={logo} /></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">                    
                    <Nav.Item>  <Nav.Link href="/">INICIO</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/videotutorial">VIDEOTUTORIALES</Nav.Link></Nav.Item>
                    <Nav.Item><NavDropdown title="PAQUETES" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">BASICO</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">
                                PREMIUM
                            </NavDropdown.Item>
                        </NavDropdown></Nav.Item>
                        <Nav.Item> <Nav.Link href="#">MANUAL</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#">TERMINOS Y CONDICIONES</Nav.Link></Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}