import { FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./style.css";

const BarNav: FC = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#">ADA Movies</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/upcoming">
              Upcoming
            </NavLink>
            <NavLink className="nav-link" to="/popular">
              Popular
            </NavLink>
            <NavLink className="nav-link" to="/search">
              Search
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              SignUp
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export { BarNav };
