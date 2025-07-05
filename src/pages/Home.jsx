import React from 'react'
import img from '../pages/img2.png';
import Navbarh from '../Components/Navbar';

const Home = () => {
  return (
    <>
    <div>
      <Navbarh/>
      <h1 style={{color:'black',fontFamily:"'Times New Roman', Times, serif"}}>The media is feeding us titbits that taste palatable but do nothing to satisfy our hunger for knowledge</h1>
      <img fluid src={img} alt="News logo" style={{width:'100%',height:'auto'}}/>  
    </div>
    </>
  )
}
export default Home
