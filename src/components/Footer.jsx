import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    {/* Footer */}
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-nav-container'>
          {/* Socials Links */}
          <ul className='socials'>
            <NavLink className='nav-list' to="/"><FaFacebook /></NavLink>
            <NavLink className='nav-list' to="/"><FaInstagram /></NavLink>
            <NavLink className='nav-list' to="/"><FaLinkedin /></NavLink>
            <NavLink className='nav-list' to="/"><FaYoutube /></NavLink>
          </ul>

          <nav className='footer-nav'>
            <ul>
              <span className='footer-nav-heading'>Inquiries</span>
              <NavLink className='nav-list' to="/">home</NavLink>
              <NavLink className='nav-list' to="/about">about us</NavLink>
              <NavLink className='nav-list' to="/contact">contact us</NavLink>
              <NavLink className='nav-list' to="/products-services">products & services</NavLink>
            </ul>

            <ul>
              <span className='footer-nav-heading'>Legal</span>
              <NavLink className='nav-list' to="/">Terms & Conditions</NavLink>
              <NavLink className='nav-list' to="/">Privacy Policy</NavLink>
              <NavLink className='nav-list' to="/">Shipping Policy</NavLink>
            </ul>

            <ul>
              <span className='footer-nav-heading'>Information</span>
              <NavLink className='nav-list' to="/">Certified Jewellery</NavLink>
              <NavLink className='nav-list' to="/">Sustainability</NavLink>
              <NavLink className='nav-list' to="/">Our Team</NavLink>
              <NavLink className='nav-list' to="/products-services">FAQs</NavLink>
            </ul>
          </nav>
        </div>
        <p className='copyright-lg'>Copyright © 2024 Ivani Diamonds. All rights reserved.</p>
      </div>
      <div className='footer-logo-container'>
        <div className='logo footer-logo'>
          <NavLink className='nav-list' to="/">jewellery shop</NavLink>
        </div>
        <div>
          <p>Ivani Diamonnds, 7 Way Lane, Jopling Road, Lucknow, India-226001</p>
          <p>info@maaricha.com</p>
        </div>
      </div>
      <p className='copyright-sm'>Copyright © 2024 Ivani Diamonds. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer
