import React from 'react'
import logo from "../images/inst.png";
import "../css/login.css";
import {Link} from 'react-router-dom';
import {useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify";

const Login = () => {

        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("");
        

        const navigate=useNavigate();

        const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        
        const handleSubmit=async(e)=>{  
             
           e.preventDefault();  

               if(!emailRegex.test(email)){
                  
                  toast.info("Invalid email");
                  return ;

               }
          try { 
                 const {data}= await axios.post(`${process.env.REACT_APP_BACKENDURL}/api/v1/auth/login`,{email,password});
                 console.log(data);

                 if(data?.success)
                 {
                    toast.success(data.message);
                    navigate("/");
                 }
                 else{
                     toast.error(data.message);
                 }
                 
            
          } catch (error) { 
                  console.log(error);  
                  toast.error(error)         
                  
          }
        }



  return (
    <form className="signUp "  onSubmit={handleSubmit} >

    
    <div className="form-container" >

      <div className="form">
          <div  >
          <img
          src={logo}
          alt=""
        
          className="signUpLogo"
        />

          </div>
       

        {/* input form  */}
        <div className="fortext" >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

       

        <div className="fortext" >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}} 
          />
        </div>
     

        <button type="submit" id="submit-btn" className="submit" style={{cursor:"pointer" ,padding:"10px", marginLeft:"50px" }} >
          
          Login
        </button>

        <div className="form2"  style={{marginBottom:"5px", padding:"10px", fontFamily:"sans-serif" }} >
             Not have an account ? 
             <Link to="/signup" style={{cursor:"pointer" ,marginLeft:"3px" }} >Sign Up   </Link>
      </div>  

      </div>

     
      
      </div>
    </form>

    
  );
};



export default Login