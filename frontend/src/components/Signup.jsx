import React from "react";
import logo from "../images/inst.png";
import "../css/Signup.css";
import {Link} from 'react-router-dom';
import {useState,useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {  
      
        const[name,setName]=useState("");
        const[email,setEmail]=useState("");
        const[password,setPassword]=useState("");
        const[username,setUsername]=useState("");

              const navigate=useNavigate();

              const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
              const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;


        const handleClick=async(e)=>{    
                e.preventDefault(); 

                if(!emailRegex.test(email)){
                    toast.error("Invalid email");
                    return ;
                }else if(!passwordRegex.test(password)){
                   toast.info("password must be atleast 8 charecter having one Uppercase ,one Lower case and spacial charecters")
                   return ;
                }


            try {    
                   const {data}=await axios.post(`${process.env.REACT_APP_BACKENDURL}/api/v1/auth/register`,{name,email,password,username});
                     
                  if(data?.success){
                    toast.success(data?.message);
                    // alert(data?.message);
                    navigate("/login"); 
                  }else{
                    toast.error(data?.message);  
                  } 

            } catch (error) {
            console.log(error);
            toast.error(error)
            
           }
        }

  return (
    <form className="signUp " onSubmit={handleClick} >

    
    <div className="form-container" >

      <div className="form">
          <div  >
          <img
          src={logo}
          alt=""
          // style={{ marginTop: "5px ",marginLeft:"2px" }}
          className="signUpLogo"
        />

          </div>
        <p className="loginPara">
          {" "}
          Sign up to see photos and videos <br /> from your friends{" "}
        </p>

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
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>
        <div className="fortext" >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter UserName"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
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
        <p className="loginPara"  style={{fontSize:"12px", margin:"3px 0px"}} >
          {" "}
          By signing up, you agree to our Terms, <br /> privacy policy and
          cookies policy{" "}
        </p>

        <button type="submit" id="submit-btn" className="submit" style={{cursor:"pointer"}}   >
          {" "}
          SignUp{" "}
        </button>

        <div className="form2"  style={{marginBottom:"5px", padding:"10px", fontFamily:"sans-serif" }} >
             Already have an account ? 
             <Link to="/login" style={{cursor:"pointer" ,marginLeft:"3px" }} >Sign In   </Link>
      </div>  

      </div>

     
      
      </div>
    </form>

    
  );
};

export default Signup;
