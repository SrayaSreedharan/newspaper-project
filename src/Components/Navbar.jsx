import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css'

const Navbarh = () => {
  return (
    <>
    <div className='nav'>
      <Navbar expand="lg" className="bg-body-tertiary row" >
      <Container className='col-md'>
        <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'36px'}} >NEWS</Navbar.Brand>
            <Nav.Link href="/login" style={{textDecoration:'none',color:'white',padding:'10px',fontSize:'30px'}} className='nav'>Login</Nav.Link>
            <Nav.Link href="/signup" style={{textDecoration:'none',color:'white',padding:'10px',fontSize:'30px'}} className='nav'>Sign up</Nav.Link>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default Navbarh
