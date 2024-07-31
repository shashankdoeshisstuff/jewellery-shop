import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const handleNavMenuOpen = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  }

  const returnNavMenu = () => {
    return (
      <nav className={`nav-bar ${isNavMenuOpen ? 'open-nav' : 'close-nav'}`}>
        <IoMdClose className='close-btn'
          onClick={handleNavMenuOpen}
        />
        <NavLink className='nav-list' to="/">home</NavLink>
        <NavLink className='nav-list' to="/about">about us</NavLink>
        <NavLink className='nav-list' to="/contact">contact us</NavLink>
        <NavLink className='nav-list' to="/product-page">products & services</NavLink>
      </nav>
    )
  }

  return (
    <>
    {/* Header Navbar */}
    <header className="header">
      
      <div className='logo header-logo'>
        <NavLink className='nav-list' to="/">jewellery shop</NavLink>
      </div>
      
      <div className='nav-menu-lg'>{returnNavMenu()}</div>
      <div className='nav-menu-sm'>
        <GiHamburgerMenu 
          onClick={handleNavMenuOpen}
        />

        {returnNavMenu()}
      </div>
    </header>
    </>
  )
}

export default Header;
