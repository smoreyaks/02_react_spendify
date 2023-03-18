// React Packages
import React from 'react';

// Data
import { overview } from '../data';

const Overview = () => {
  // Destructure Overview Data
  const { productImg } = overview;
  return (
    <section className='lg:min-h-[712px] from-white via-orange-300 to-red-400 bg-left-top pt-[30px] lg:pt-[87px]'>
      <div className='container mx-auto flex justify-end items-center overflow-hidden contentBox' data-aos="fade-up"
              data-aos-delay="200"
            >
      {/* <a href="https://www.vecteezy.com/free-vector/background"></a> */}
      {/* Background Vectors by Vecteezy */}
        <img 
          src={productImg} 
          alt=""
          data-aos='fade-up'
          data-aos-offset='300'
        />
      </div>
    </section>
  )
};

export default Overview;
