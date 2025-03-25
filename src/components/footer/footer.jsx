import React ,{forwardRef}from "react";
import './footer.css'

const Footer =forwardRef( (props, ref) =>{

    return(
        <div ref={ref} className="footer">
        <div className="section1">
            <div className='logo-section'>
                {/* <a href="./landingPage"><img src="/src/assets/Group 4.png" alt= "logo" /></a> */}
            </div>
            <div className="sectionText">
                <h1>Adress</h1>
                <p>Block 20 yusuf Akinde estate</p>
            </div>
            <div className="sectionText">
                <h1>Contact</h1>
                <p>Proteinng@gmail.com</p>
            </div>
        </div>
        <div className="section2">
            <div className="miniSection">
            <ul>
                    <li><a href="./products">Products</a></li>
                    <li><a href="./AboutUs">About Us</a></li>
                    <li><a href="./OurMeats">Our Meats</a></li>
                    <li><a href="./">FAQs</a></li>
                </ul>
            </div>
            <div className="miniSection">
            <ul>
                    <li><a href="./products">Our Services</a></li>
                    <li><a href="./">Customer Support</a></li>
                    <li><a href="./">PartnerShips</a></li>
                    <li><a href="./">Reviews</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
   
})

export default Footer