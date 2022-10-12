import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='fw-bold fs-3'>MegaQuiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link} to={"/"}>Topics</Nav.Link>
          <Nav.Link as={Link} to={"/statistics"}>Statistics</Nav.Link>
          <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;