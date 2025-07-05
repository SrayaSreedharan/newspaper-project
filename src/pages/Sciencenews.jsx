import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/esm/CardText';
import './news.css'
import Navbars from '../Components/Navbars';

const Sciencenews = () => {
    const[news,setNews]=useState([]) 
    useEffect(()=>{
    axios.get('https://gnews.io/api/v4/top-headlines?category=science&apikey=dafb48c3612bf87ea7089ad6c42ee17b').then((response)=>{
     console.log(response.data.articles)
     setNews(response.data.articles)
    }).catch((error)=>{
     console.log(error)
    })
    },[])
   console.log(news) 
   return (
    <>
    <Navbars/>
    <h2 style={{textAlign:'center',marginTop:'50px'}}>SCIENCE NEWS</h2>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px'}} >
{news.map((item)=>(
  <a href={item.source.url}>
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={item.image} style={{height:'300px',width:'280px'}} />
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
     <CardText>
      {item.publishedAt}{<br></br>}
     </CardText>
   </Card.Body>
 </Card>
 </a>
))}
</div>
</>
   )
 }
export default Sciencenews
