import React from 'react'
import './navbar.css'
import { Routes, Route, Link } from "react-router-dom";
import InfoSection from '../infoSection/infoSection';
import Footer from '../footer/footer'; 
import logo from "/assets/Group\ 4.png";

export default function Navbar({scrollToInfo,scrollToFooter}){
    return(
        <div>

        <nav className='nav'>
            <div className='logo-section'>
                 <img src= {logo} alt= " Protein logo" /> 
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
                    <li><Link to ="./SignUp">Sign In</Link></li>
                    <li><Link to ="./cart">Cart</Link></li>

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