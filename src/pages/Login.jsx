import React, { useState } from "react";
import './Log.css'
import axios from "axios";
import { Navigate,useNavigate } from "react-router-dom";
import Navbarh from "../Components/Navbar";
import { Link } from "react-router-dom";

function Login() {
    const[login,setLogin]=useState({})

    const handleChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
        console.log(e.target.name)
        console.log(e.target.value)
    }
    const navigation=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post("https://project1-2-84cf.onrender.com/auth/login",login).then((response)=>{
            console.log(response)
            navigation('/general')
        }).catch((error)=>{
            console.log(error);   
        })
    }
    return (
        <>
        <Navbarh/>
        <div className="color">
            <h1 style={{marginTop:'150px',color:'black'}}>LOGIN</h1>
            <form className="Login">
                <label for="" />
                <input type="email" name="email" placeholder="Enter Email" onChange={handleChange}/>
                <label for="" />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button style={{marginTop:'30px'}}  onClick={handleLogin}>LOGIN</button>
                <span style={{marginLeft:'90px',marginTop:'100px'}}>Not registered<Link to="/signup" style={{ textDecoration: 'none' }}>Create an account</Link></span>
            </form>
            </div>
        </>
    )
}
export default Login;
