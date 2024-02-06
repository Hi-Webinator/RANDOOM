import { Navbar, Container, Nav, Form, Button } from "react-bootstrap"

import './navbar.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="pt-3">
                <Container>
                    <Navbar.Brand href="/" className="text-white">RANDOOM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="text-decoration-none text-white text-uppercase me-3">Home</Link>
                            <Link to="/about" className="text-decoration-none text-white text-uppercase me-3">About Me</Link>
                            <Link to="/works" className="text-decoration-none text-white text-uppercase me-5">My Works</Link>
                        </Nav>
                        <Link to="/contact">
                            <Button variant="rounded-pill ps-4 pe-4">Contact</Button>
                        </Link>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
