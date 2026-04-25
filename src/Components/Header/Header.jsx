import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Navbar expand="lg" className="pt-lg-3">
      <Container>
        <NavLink to="/" className="text-decoration-none">
          <Navbar.Brand className="text-white">
            RAND
            <span>OO</span>M
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle onClick={handleToggle}>
          {toggle ? <FaBarsStaggered /> : <FaBars />}
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="align-items-lg-center ms-lg-auto mt-2 mt-lg-0">
            <NavLink to="/" className="item me-lg-3 mb-3 mb-lg-0">
              Home
            </NavLink>
            <NavLink to="/about" className="item me-lg-3 mb-3 mb-lg-0">
              About Me
            </NavLink>
            <NavLink to="/works" className="item me-lg-5 mb-3 mb-lg-0">
              My Works
            </NavLink>
            <NavLink to="/contact" className="contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
