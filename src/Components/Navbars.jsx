import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css';

const Navbars = () => {
  return (
    <div className='nav'>
      <Navbar expand="lg" bg="dark" variant="dark" className="px-3">
        <Container fluid>
          <Navbar.Brand href="/" style={{ textDecoration: 'none', fontSize: '36px' }}>
            NEWS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/general" className="nav-link-custom">General</Nav.Link>
              <Nav.Link href="/world" className="nav-link-custom">World</Nav.Link>
              <Nav.Link href="/nation" className="nav-link-custom">Nation</Nav.Link>
              <Nav.Link href="/buisness" className="nav-link-custom">Business</Nav.Link>
              <Nav.Link href="/technology" className="nav-link-custom">Technology</Nav.Link>
              <Nav.Link href="/entertainment" className="nav-link-custom">Entertainment</Nav.Link>
              <Nav.Link href="/sports" className="nav-link-custom">Sports</Nav.Link>
              <Nav.Link href="/science" className="nav-link-custom">Science</Nav.Link>
              <Nav.Link href="/health" className="nav-link-custom">Health</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
