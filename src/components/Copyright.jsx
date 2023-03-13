// React Packages
import React from 'react';

// Data
import { copyright } from '../data';

const Copyright = () => {
  // Destructure Copyright Data
  const { link1, link2, copyText, social } = copyright;
  return (
    <div 
      className='flex flex-col items-center gap-y-2 lg:flex lg:justify-between'
      data-aos='fade-up'
      data-aos-offset=' 0'
      data-aos-delay='200'
    >
      {/* links */}
      <div className='flex gap-x-6'>
        <a className='hover:text-accent transition' href={ link2.href }>{ link2.name }</a>
        <a className='hover:text-accent transition' href={ link1.href }>{ link1.name }</a>
      </div>
      {/* Copyright Text */}
      <div>{copyText}</div>
      {/* Social Icons */}
      <ul className='flex gap-x-[12px]'>
        { social.map((item, index) => {
          // Destructure Item
          const { href, icon } = item
          return (
            <li key={ index }>
              <a href={ href }>
                <img src={icon} alt="" />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Copyright;
