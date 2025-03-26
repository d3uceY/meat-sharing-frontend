import React from "react";
import './landingPage.css'
export default function LandingPage(){
    return(
        <div className = 'LandingPage'>
            <div className="LandingPageTexts">
                <h1>Discover the joy of sharing quality meat with your community today</h1>
                <h4>Join Our Meat sharing revolution</h4>
            </div>
            <div className="LandingPageImage">
                <img src="/landingPage.jpg" alt="Landing page image" />
            </div>
        </div>
    )
}