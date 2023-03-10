// React Packages
import React from 'react';

// Data
import { overview } from '../data'

const Brands = () => {
  // Destructure Overview
  const { brands } = overview;
  
  return ( 
    <section className='py-9'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6">
        {/* Brands */}
        { brands.map((item, index) => {
          // Destructure Item
          const { image, delay } = item;
          return (
            <div key={ index } data-aos='fade-up' data-aos-delay={ delay }>
              {/* Brand Image */}
              <img src={ image } alt="" />
            </div>
          )
        })}
      </div>
    </section>
  )
};

export default Brands;
