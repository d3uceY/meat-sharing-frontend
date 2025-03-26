import React from "react";
import './homeSignUp.css'
import { Link } from 'react-router-dom';
export default function HomeSignUp(){

    return(
        <div className="HomeSignUp">
            <h1 className="HomeSignUpTexth1">Join the Meat Sharing Community Today</h1>
            <p className="HomeSignUpTextp">Sign Up now to enjoy exclusive deals and also meet other meat sharing enthusiasts</p>
            <button> <Link to = "/SignUp">Sign Up</Link></button>
        </div>
    )
}