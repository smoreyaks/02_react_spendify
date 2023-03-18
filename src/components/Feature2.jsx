// React Packages
import React from 'react';

// Data
import { features } from '../data'

const Feature2 = () => {
  // Destructure Features
  const { feature2 } = features;

  // Destructure Feature 2
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;
  return (
    <section className='section'>
      <div className="container mx-auto contentBox" data-aos="fade-up"
              data-aos-delay="200"
            >
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          
          {/* Image */}
          <div 
            className="flex-1 order-2 lg:order-1" 
            data-aos="fade-right" 
            data-aos-offset="300"
          >
            <img src={image} alt="" />
          </div>
          
          {/* Text */}
          <div 
            className="flex-1 order-1 lg:order-2" 
            data-aos="fade-left" 
            data-aos-offset="400"
          > 
            <h2 className='title'>{ title }</h2>
            <div className='pretitle'>{ pretitle }</div>
            <p className='lead'>{ subtitle }</p>
            
            {/* Learn More Button */}
            <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
              { btnLink } 
              <img src={ btnIcon } alt='' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Feature2;
