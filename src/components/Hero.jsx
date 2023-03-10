import React from 'react';

// Import data
import { hero } from '../data'

// Import Icons
import { HiOutlineChevronDown } from 'react-icons/hi'

const Hero = () => {
  // Destructure Hero Data
  const { title, subtitle, btnText, compText, image } = hero;
  return (
      <section className='bg-pink-200 min-h-[900px] py-12'>
        <div className='container mx-auto min-h-[900px] flex justify-center items-center'> 
          <div className="flex flex-col lg:gap-x-[30px] gap-y-8"></div>
          {/* Text */}
          <div className="flex-1">Text</div>
        </div>
    </section>
  )
}

export default Hero;
