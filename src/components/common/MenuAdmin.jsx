import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";

const MenuAdmin = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Recetas Caseras</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default MenuAdmin;