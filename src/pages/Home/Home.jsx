import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { cards, main } from '../../faker/fake';

const Home = () => {
 

return (
  <>
  <div className="_container  mt-4 flex-col items-center">
  <div className="w-full px-4 pt-2 box-shadow">
    <div className="text-center mb-4 lg:text-start ">
      <h1 className="text-xl md:text-2xl lg:text-2xl lg:font-thin">আপনাদের জন্য </h1>
    </div>
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-6 md:items-stretch   items-center">
      {main.map((item, index) => (
        <div key={index} className="card relative group  border-0 mb-4 w-full m-auto max-w-[217px] h-[348px] hover:border-2 hover:border-gray-400 text-center flex flex-col items-center justify-center">
          <img className="object-cover " src={item.imageUrl} alt={`Card ${index + 1}`} />
          <div className="text mt-2">
            <h1 className='font-thin text-sm md:text-base'>{item.title}</h1>
          </div>

          <div className="button w-full h-full absolute text-center invisible flex flex-col group-hover:visible items-center justify-center">
            <button className='translate-y-[-30px] font-bold font-mono rounded-md bg-[#f90] m-auto py-3 px-4 flex items-center justify-center '>Add To Card</button>

           <button className='bg-slate-300 w-full p-2 font-bold text-blue-400'>View More</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  {/* cards1 */}
  <div className="_container bg-white h- mt-3 flex flex-col items-center">
  <div className="w-full px-4 pt-2 box-shadow">
    <div className="text-center mb-4 lg:text-start ">
      <h1 className="text-xl md:text-2xl lg:text-2xl lg:font-thin">বেস্ট সেলার বিষয় </h1>
    </div>
<<<<<<< HEAD
    <div className="grid grid-cols-2 gap-3 gap-y-3 sm:grid-3 sm:gap-3 md:grid-cols-3 lg:gap-2 lg:grid-cols-6 p-4 md:p-5 items-center ">
      {cards.map((item, index) => (
        <div key={index} className="card w-[165px] m-auto  h-[170px] bg-gray-200 text-center flex flex-col items-center justify-center">
=======
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-2 lg:grid-cols-6 p-4 md:p-5 items-center">
      {cards.map((item, index) => (
        <div key={index} className="card w-full h-[165px] bg-gray-200 text-center flex flex-col items-center justify-center">
>>>>>>> 6fcd473252ae324c50d72e158fbf33f1b1cba4d8
          <img className="object-cover w-full h-full" src={item.imageUrl} alt={`Card ${index + 1}`} />
          <div className="text mt-2">
            <h1 className='font-thin text-sm md:text-base'>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
{/* cards 2 */}
<div className="_container bg-white h-auto mt-3 flex flex-col items-center">
  <div className="w-full px-4 pt-2 box-shadow">
    <div className="text-center mb-4 lg:text-start">
      <h1 className="text-xl md:text-2xl lg:text-3xl">Hello</h1>
    </div>
    <div className="grid grid-cols-2 gap-3 md:p-5  md:grid-cols-3 lg:gap-2 lg:grid-cols-6  p-4 items-center">
      {cards.map((item, index) => (
<<<<<<< HEAD
        <div key={index} className=" m-auto card w-[165px] h-[179px] bg-gray-200 text-center flex flex-col items-center ">
=======
        <div key={index} className="card w-full h-[165px] bg-gray-200 text-center flex flex-col items-center justify-center">
>>>>>>> 6fcd473252ae324c50d72e158fbf33f1b1cba4d8
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