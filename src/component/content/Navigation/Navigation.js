import React, { useState } from "react";
import ReactDOM from "react-dom";
import './Navigation.scss';
import { Alert, Button, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <section className="Navigation">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link to="/">React-Bootstrap</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="about">About</Link>           
           
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}
export default Navigation;
