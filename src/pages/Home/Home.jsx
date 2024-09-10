import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { cards } from '../../faker/fake';

const Home = () => {
 

return (
  <>
  <div className="_container bg-white h- mt-3 flex flex-col items-center">
  <div className="w-full px-4 pt-2 box-shadow">
    <div className="text-center mb-4 lg:text-start">
      <h1 className="text-xl md:text-2xl lg:text-2xl">বিষয়</h1>
    </div>
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-2 lg:grid-cols-6 p-4 md:p-5 items-center">
      {cards.map((item, index) => (
        <div key={index} className="card w-full h-[165px] bg-gray-200 text-center flex flex-col items-center justify-center">
          <img className="object-cover w-full h-full" src={item.imageUrl} alt={`Card ${index + 1}`} />
          <div className="text mt-2">
            <h1 className='font-thin text-sm md:text-base'>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="_container bg-white h-auto mt-3 flex flex-col items-center">
  <div className="w-full px-4 pt-2 box-shadow">
    <div className="text-center mb-4 lg:text-start">
      <h1 className="text-xl md:text-2xl lg:text-3xl">Hello</h1>
    </div>
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-6 p-4 md:p-5 items-center">
      {cards.map((item, index) => (
        <div key={index} className="card w-full h-[165px] bg-gray-200 text-center flex flex-col items-center justify-center">
          <img className="object-cover w-full h-full" src={item.imageUrl} alt={`Card ${index + 1}`} />
          <div className="text mt-2">
            <h1 className='text-[20px] text-sm md:text-base'>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  </>





);


  


 
   
    
  
}

export default Home