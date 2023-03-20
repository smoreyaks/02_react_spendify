// React Packages
import React from 'react';

// Data
import { copyright } from '../data';

const Copyright = () => {
  // Destructure Copyright Data
  const { link1, link2, copyText, social } = copyright;
  return (
    <div 
      className='flex flex-col lg:flex-row items-center gap-y-2 lg:flex lg:justify-between lg:px-6'
      data-aos='fade-up'
      data-aos-offset=' 0'
      data-aos-delay='1300'
    >
      
      {/* links */}
      <div className='flex gap-x-6 justify-between flex-col lg:flex-row items-center'>
        <a className='hover:text-accent transition font-semibold mb-3 lg:mb-0' href={ link1.href }>{ link1.name }</a>
        <a className='hover:text-accent transition font-semibold mb-3 lg:mb-0' href={ link2.href }>{ link2.name }</a>
      
        {/* Copyright Text */}
        <div className='mb-3 lg:mb-0 font-semibold'>{ copyText }</div>

        {/* Social Icons */}
        <ul className='flex gap-x-[12px] justify-center'>
          { social.map((item, index) => {
            
            // Destructure Item
            const { href, icon } = item
            return (
              <li key={ index }>
                <a href={ href }>
                  <img className='h-6' src={icon} alt="" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      
      
    </div>
  )
};

export default Copyright;
