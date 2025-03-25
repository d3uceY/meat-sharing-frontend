import React from 'react'
import './navbar.css'
import { Routes, Route, Link } from "react-router-dom";
import InfoSection from '../infoSection/infoSection';
import Footer from '../footer/footer';

export default function Navbar({scrollToInfo,scrollToFooter}){
    return(
        <div>

        
        <nav className='nav'>
            <div className='logo-section'>
                {/* <a href="./landingPage"><img src="/src/assets/Group 4.png" alt= "logo" /></a> */}
            </div>
            <div className='main-nav'>
                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#" onClick={(e)=>{e.preventDefault(); scrollToInfo();}}>About Us</a></li>
                    <li><a href="#" onClick={(e)=>{e.preventDefault(); scrollToFooter();}}>Contact Us</a></li>
                </ul>
            </div>
            <div className='nav-utils'>
                <ul>
                    <li><a href="./SignUp">Sign In</a></li>
                    <li><a href="./cart">Cart</a></li>

                </ul>
            </div>
        </nav>

          {/* <Routes>
          <Route path="/infoSection" element={<InfoSection />} />
          <Route path="/footer" element={<Footer />} />
         </Routes> */}
         </div>
    )
}