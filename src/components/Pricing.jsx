// React  Packages
import React, { useState } from 'react';

// Data 
import { pricing } from '../data'

// Icons
import { HiOutlineArrowNarrowRight, HiCheck } from 'react-icons/hi';

const Pricing = () => {
  // Index State
  const [index, setIndex] = useState(1);
  
  // Destructure Pricing
  const { title, cards } = pricing;

  return (
    <div className='section'>
      <div className="container mx-auto">
        
        {/* Title */}
        <h2 className="h2 mb-10 lg:mb-20 text-center">
          { title }
        </h2>
        
        {/* Cards */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center'>
            { cards.map((card, cardIndex)=> {
              // Destructure Card
              const {icon, title, services, price, userAmount, btnText, delay } = card;
              
              // Card
              return ( 
                <div key={cardIndex}>
                  <div 
                    onClick={() => setIndex(cardIndex)}
                    className={`${
                      cardIndex === index ? 'bg-white shadow-2xl' : 'border border-grey' } 
                      w-[350px] h-[350px] rounded-[12px] p-[40px] cursor-pointer transition-all`}
                  >
                    
                    {/* Card Icon */}
                    <div className='mb-8'>
                      <img src={ icon } alt="" />
                    </div>
                    
                    {/* Card Title */}
                    <div className='text-[32px] font-semibold mb-8'>{ title }</div>
                    
                    {/* Card Services */}
                    <div className='flex flex-col gap-y-2 mb-6'>
                      { services.map((service, index) => {
                        
                        // Destructure Service
                        const { name } = service;
                        return (
                          <div 
                            className='flex items-center gap-x-[10px]' 
                            key={index}
                          >
                              <HiCheck className='text-light' />
                              <div>{name}</div>
                            </div>
                        )
                      })}
                      <div className='mb-10'>
                        <div className=''>
                          <span className='text-2xl font-semibold'>{ price }/</span>
                          <span className='text-xl text-light font-light'> year </span>
                        </div>
                      <div className='text-base text-light'>{ userAmount }</div>
                      </div>
                    </div>
                    
                    {/* Button */}
                    {/* <button className='{`bg-accent  '></button> */}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
};

export default Pricing;
