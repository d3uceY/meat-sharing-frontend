"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "/assets/Group 4.png"
import { Menu, X, ShoppingCart, User } from "lucide-react"

export default function Navbar({ scrollToInfo, scrollToFooter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative">
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={logo || "/placeholder.svg"} alt="Protein logo" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Products
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToInfo()
                  }}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  About Us
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToFooter()
                  }}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  Contact Us
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  to="./SignUp"
                  className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  <User className="h-5 w-5 mr-1" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="./cart"
                  className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  <ShoppingCart className="h-5 w-5 mr-1" />
                  <span>Cart</span>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              Products
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToInfo()
                setIsMenuOpen(false)
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              About Us
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToFooter()
                setIsMenuOpen(false)
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              Contact Us
            </a>
            <Link
              to="./SignUp"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 mr-2" />
              Sign In
            </Link>
            <Link
              to="./cart"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
            </Link>
          </div>
        </div>
      </nav>
      {/* Add a spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-16"></div>
    </div>
  )
}

