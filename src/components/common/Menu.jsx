import { Navbar, Container, Nav } from "react-bootstrap";


const Menu = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Recetas Caseras</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/administrador">Administrador</Nav.Link>
            <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
