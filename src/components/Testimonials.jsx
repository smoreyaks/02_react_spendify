// React Packages
import React from 'react';

// Data
import { testimonials } from '../data';

// Components
import ClientSlider from '../components/ClientSlider'

const Testimonials = () => {
  // Destructure Testimonials
  const { title, clients } = testimonials;
  return (
    <section className='section'>
      <div className="container mx-auto contentBox" data-aos="fade-up"
              data-aos-delay="200"
            >

        {/* Title */}
        <h2 
          className="title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto"
          data-aos='fade-up'
          data-aos-delay='200'
        >
          { title }
        </h2>
        {/* Slider */}
        <div data-aos='fade-up' data-aos-delay='400'>
          <ClientSlider clients={ clients }/>
        </div>
      </div>
    </section>
  )
};

export default Testimonials;
