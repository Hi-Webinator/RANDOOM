import { Navbar, Container, Nav, Form, Button } from "react-bootstrap"
import { FaBars, FaBarsStaggered } from "react-icons/fa6";

import './navbar.css';
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }


    return (
        <div>
            <Navbar expand="lg" className="pt-3">
                <Container>
                    <Link to="/" className="text-decoration-none">
                        <Navbar.Brand href="/" className="text-white">
                            RAND
                            <span>OO</span>
                            M
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
                        {toggle ? <FaBarsStaggered /> : <FaBars />}
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" className="item text-decoration-none text-uppercase me-lg-3 mb-3 mb-lg-0">
                                Home
                            </NavLink>
                            <NavLink to="/about" className="item text-decoration-none text-uppercase me-lg-3 mb-3 mb-lg-0 ms-5 ms-lg-0">
                                About Me
                            </NavLink>
                            <NavLink to="/works" className="item text-decoration-none text-uppercase me-lg-5 mb-3 mb-lg-0">
                                My Works
                            </NavLink>
                        </Nav>
                        <NavLink to="/contact">
                            <Button variant="rounded-pill ps-4 pe-4">Contact</Button>
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
