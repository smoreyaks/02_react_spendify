// React Packages
import React from 'react';

// Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper Styles
import 'swiper/css'

const ClientSlider = ({ clients }) => {

  return (
    <Swiper slidesPerView={1} spaceBetween={30} grabCursor={true} breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }}>
      { clients.map((client, index) => {
        
        // Destructure Clients
        const { message, image, name, position, borderColor } = client
        
        // Slide
        return (
          <SwiperSlide key={ index } style={{ borderColor: borderColor }} className='border-t-[10px] rounded-t-[12px]'>
            
            {/* Card */}
            <div className="w-full mx-auto lg:max-w-[300px] xl:max-w-[350px] h-[250px] rounded-b-[12px] border border-grey py-6 px-[30px]">

              {/* Person Message */}
              <div className='mb-[10px]'>{ message }</div>

              {/* Person Name, Image & Position */}
              <div className='flex gap-x-[10px] mb-[30px] items-center'>
                <img className='h-8' src={ image } alt="" />
                <div className='flex flex-col'>
                  <div className='font-bold'>{ name }</div>
                  <div className='text-light'>{ position }</div>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
        )
      { clients}
      })}
    </Swiper>
  )
};

export default ClientSlider;
