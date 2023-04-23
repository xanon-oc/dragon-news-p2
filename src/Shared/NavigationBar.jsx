import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container className="mb-4">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/career">Career</NavLink>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  <FaUserCircle style={{ fontSize: "2rem" }} />
                </Nav.Link>
              )}
              <Nav.Link eventKey={2} href="#memes">
                {user ? (
                  <Button variant="dark">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="dark">Login</Button>
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
