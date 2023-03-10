// React Packages
import React, { useState, useEffect } from 'react';

// Data
import { header } from '../data';

// Icons
import { HiOutlineX, HiMenuAlt4 } from 'react-icons/hi';

// Components
import MobileNav from '../components/MobileNav'
import Nav from '../components/Nav'

const Header = () => {
  // Mobile Navigation State
  const [mobileNav, setMobileNav] = useState(false);
  // Header State
  const [isActive, setIsActive] = useState(false);
  // Destructure Header Data
  const { logo, btnText } = header;
  
  // Scroll Event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ?    setIsActive(true) : setIsActive(false);
    });
  })
  
  return (
    <header 
      className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'} py-6 lg:py-4 fixed w-full transition-all z-10`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="" />
        </a>
        
        {/* Navigation - Hidden on Mobile, shows on Desktop */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
        
        {/* CTA Button - Hidden on Mobile, shows on Deskop  */}
        <button className='btn btn-sm btn-outline hidden lg:flex'>
          {btnText}
        </button>
        
        {/* Mobile Nav Trigger Button - Hidden on Mobile, shows on Desktop */}
        <button 
          className='lg:hidden' 
          onClick={() => setMobileNav(!mobileNav)}
        >
          { mobileNav ? (
            <HiOutlineX className='text-3xl text-accent' />
          ) : (
            <HiMenuAlt4 className='text-3xl text-accent' />
          )}
        </button>
        {/* Mobile Navigation - Hidden on Mobile, shows on Desktop */}
        <div className={`${
          mobileNav ? 'left-0' : '-left-full'
        } fixed top-0 bottom-0 bg-pink-400 w-[60vw] lg:hidden transition-all `}
        >
          <MobileNav />
        </div>

      </div>
    </header>
  )
};

export default Header;
