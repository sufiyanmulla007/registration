import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <>
    <div>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">user Registration</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
    </>
  );
};

export default Header;
