import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Container fluid>
          <Navbar.Brand href="#home">Libreria Salentina</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;
