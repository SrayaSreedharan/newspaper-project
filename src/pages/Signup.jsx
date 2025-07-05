import React, { useState } from "react";
import axios from 'axios'
import './Log.css'
import {useNavigate } from 'react-router-dom';
import Navbarh from "../Components/Navbar";

function Signup() {
    const[signup,setSignup]=useState({})
    const[error,setError]= useState({}) 
   const handleChange=(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
    console.log(signup)
   }

   const navigate=useNavigate();

   const validate=()=>{
    const errorMessage={}
    
    if(!signup.Name){
        errorMessage.Name="Enter Name"
    }
    if(!signup.number){
        errorMessage.number="Enter number"
    }
    else if(!(/^\d{10}$/).test(signup.number)){
        errorMessage.number="password should be 10 digits long"
    }

    if(!signup.email){
        errorMessage.email="Enter email"
    }

    if(!signup.password){
        errorMessage.password="Enter password"
    }
  setError(errorMessage)
    return Object.keys(errorMessage).length===0
   }

   const handleSubmit=(e)=>{
    if(!validate()){
        console.log("error")
    }
    
   
   e.preventDefault()
    axios.post("https://project1-2-84cf.onrender.com/auth/signup",signup).then((response)=>{
        console.log(response)
        navigate('/login')
    }).catch((error)=>{
        console.log(error);   
    })
   }

    return (
        <>
        <Navbarh/>
        <div className="color">
            <h1 style={{marginTop:'150px',color:'black'}}>REGISTER NOW</h1>
            <form className="signup" style={{height:'400px'}}>
                <label for="" style={{color:"red",marginLeft:'50px'}} >{error.Name}</label>
                <input type="text" name="Name" placeholder="Username" onChange={handleChange}/>

                <label for="" style={{color:"red",marginLeft:'50px'}} >{error.number}</label>
                <input type="tel" name="number" placeholder="Phone" onChange={handleChange}/>

                <label for="" style={{color:"red",marginLeft:'50px'}}>{error.email}</label>
                <input type="mail" name="email" placeholder="Email" onChange={handleChange}/>
                
                <label for="" style={{color:"red",marginLeft:'50px'}}>{error.password}</label>
                <input type="mail" name="password" placeholder="Password" onChange={handleChange}/>
                <button style={{marginTop:'23px'}} onClick={handleSubmit} >SIGNUP</button>
            </form>
            </div>
        </>
    );
}
export default Signup;
