import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Navbars from '../Components/Navbars'
import './news.css'
const Generalnews = () => {
  const[news,setNews]=useState([]) 
   useEffect(()=>{
   axios.get('https://gnews.io/api/v4/top-headlines?category=general&apikey=dafb48c3612bf87ea7089ad6c42ee17b').then((general)=>{
    console.log(general.data.articles)
    setNews(general.data.articles)
   }).catch((error)=>{
    console.log(error)
   })
   },[])
  console.log(news) 
  return (
    <>
     <Navbars/>
    <h2 style={{textAlign:'center',marginTop:'50px'}}>GENERAL NEWS</h2>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px'}}>
{news.map((item)=>(
  <a href={item.source.url}>
     <Card style={{ width: '18rem' }} >
      <Card.Img src={item.image}  style={{height:'300px',width:'280px'}}/>
     <Card.Body>
       <Card.Text>
       {<b>{item.title}</b>}
         </Card.Text>
         <Card.Text>
         {item.description}{<br></br>}
         </Card.Text>
         <Card.Text>
         {item.content}{<br></br>}
         </Card.Text>
         <Card.Text>
         {item.publishedAt}{<br></br>}
         </Card.Text>
         {/* <Card.Text>
         {item.source.name}{<br></br>}
         </Card.Text>
         <Card.Text>
         {item.source.url}{<br></br>}
         </Card.Text>
         <Card.Text>
         {item.url}{<br></br>}
       </Card.Text> */}
     </Card.Body>
   </Card>  
   </a>
))} 
    </div>
    </>
  );
}
export default Generalnews;
