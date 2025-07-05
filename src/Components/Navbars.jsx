import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css'
const Navbars =()=> {
  return (
    <>
    <div className='nav'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className=''>
        <Navbar.Brand href="/" style={{textDecoration:'none',fontSize:'36px'}}>NEWS</Navbar.Brand>
            <Nav.Link href="/general" style={{textDecoration:'none'}} className='nav'>General</Nav.Link>
            <Nav.Link href="/world" style={{textDecoration:'none'}} className='nav'>World</Nav.Link>
            <Nav.Link href="/nation" style={{textDecoration:'none'}} className='nav'>Nation</Nav.Link>
            <Nav.Link href="/buisness" style={{textDecoration:'none'}} className='nav'>Business</Nav.Link>
            <Nav.Link href="/technology" style={{textDecoration:'none'}} className='nav'>Technology</Nav.Link>
            <Nav.Link href="/entertainment" style={{textDecoration:'none'}} className='nav'>Entertainment</Nav.Link>
            <Nav.Link href="/sports" style={{textDecoration:'none'}} className='nav'>Sports</Nav.Link>
            <Nav.Link href="/science" style={{textDecoration:'none'}} className='nav'>Science</Nav.Link>
            <Nav.Link href="/health" style={{textDecoration:'none'}} className='nav'>Health</Nav.Link>
      </Container>
    </Navbar>
    </div>
    </>
  )  
}
export default Navbars
