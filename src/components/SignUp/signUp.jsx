import React, {useState} from "react";
import './signUp.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import api from "../services/api";

export default function SignUp(){
    
    const [formData, setFormData] = useState({ 
        email: "",
        password: "", 
        name: "",
        phoneNumber: "",
        address: "" 
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) =>{
       e.preventDefault();
       setError("");

       console.log("Form Data Sent:", formData);

       try{
        const response = await api.post("/users",{
            email:formData.email,
            password: formData.password,
            name: formData.name,
            phoneNumber: formData.phoneNumber,
            address: formData.address

        });
        // alert("sign up succesful ! you can now login.");
        navigate("/login");
       }
       catch(err){
        console.error("Signup Error:", err.response?.data);
        setError("error signing up please check your credentials");
       }
       }
    
    
    return(
        <div className="signUpSection">
            <div className="signUpContainer">
                <div className="signUpHeader">
                    <img src="src/assets/Group 4.png" alt="logo" />
                    <h1>Sign Up</h1>
                </div>
                <form className="formContainer" onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" placeholder="Enter your Name" onChange={handleChange} required/>
                        
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" placeholder="Enter your Email"  onChange={handleChange} required/>
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="">Password</label>
                        <input type="Password" name="password" placeholder="Enter your password"  onChange={handleChange} required/>
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="">Phone Number</label>
                        <input type="number" name="phoneNumber" placeholder="Enter your Phone Number"  onChange={handleChange} required />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="">Address</label>
                        <input type="text" name="address" placeholder="Enter your Address"  onChange={handleChange} required/>
                    </div>
                    <button>Submit</button>
                    {error && <p>{error}</p>}
                </form>
                <p>already have an account <a href="./Login">Sign In</a> </p>
            </div>
        </div>
    );
};