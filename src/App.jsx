import { useState, useRef } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Navbar from './components/navbar/navbar'
import LandingPage from './components/landingPage/landingPage'
import InfoSection from './components/infoSection/infoSection'
import Products from './components/products/products'
import HomeSignUp from './components/homeSignUp/homeSignUp'
import Footer from './components/footer/footer'
import SignUp from './components/SignUp/signUp'
import Login from './components/login/login';
import PrivateRoute from './components/PrivateRoute';
function App() {
  const infoRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToInfo = () => {
    infoRef.current?.scrollIntoView({ behaviour: "smooth", block: "start" })
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behaviour: "smooth", block: "start" });
  };

  return (
    <Router>


      <div>
        <Routes>
          <Route path='/' element={
            <main>
              <Navbar scrollToInfo={scrollToInfo} scrollToFooter={scrollToFooter} />
              <LandingPage />
              <InfoSection ref={infoRef} />
              <Products />
              <HomeSignUp />
              <Footer ref={footerRef} />
            </main>
          } />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>

    </Router>
  )
}

export default App
