import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { btns, cards, cards4, main } from '../../faker/fake';
import { MdStarRate } from 'react-icons/md';
import { RiArrowRightWideLine } from 'react-icons/ri';
import { SlArrowRight } from 'react-icons/sl';
import "./extra.css"

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
        <div key={index} className="card relative group  border-0 mb-4 w-full m-auto  h-[348px] hover:border-2 hover:border-gray-400 text-center flex flex-col items-center justify-center">
          <img className="object-cover " src={item.imageUrl} alt={`Card ${index + 1}`} />
          <div className="text mt-2">
            <h1 className='font-thin text-sm md:text-base'>{item.title}</h1>
          </div>

          <div className="button w-full h-full absolute text-center invisible flex flex-col group-hover:visible items-center justify-center">
            <button className='translate-y-[-30px] font-bold text text-white rounded-md bg-[#f90] m-auto py-3 px-4 flex items-center justify-center '>Add To Card</button>

           <button className='bg-slate-300 w-full p-2 font-bold text-blue-400'>View More</button>
          </div>

          <div className="text text-center">
            <p className='w-[70%] m-auto'>A compleat Biography of Abraham</p>
            <span className='opacity-[0.5]'>বি.জেইন পাব্লিশারস</span>
            <div className="rate flex justify-center text-[#f90]">
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            </div>
          </div>
        </div>
      
      ))
      
      }
    </div>
  </div>
</div>
  {/* cards1 */}
  <div className="_container bg-white h- mt-3 flex flex-col items-center">
  <div className="w-full px-4 pt-2 box-shadow">
    <div className="text-center mb-4 lg:text-start ">
      <h1 className="text-xl md:text-2xl lg:text-2xl lg:font-thin">বেস্ট সেলার বিষয় </h1>
    </div>
    <div className="grid grid-cols-2 gap-3 gap-y-3 sm:grid-3 sm:gap-3 md:grid-cols-3 lg:gap-2 lg:grid-cols-6 p-4 md:p-5 items-center ">
      {cards.map((item, index) => (
        <div key={index} className="card w-[165px] m-auto  h-[170px] bg-gray-200 text-center flex flex-col items-center justify-center">
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
<div className="_container mb-4 bg-white h-auto mt-3 flex flex-col items-center">
  <div className="w-full px-4 pt-2 box-shadow">
    <div className="text-center mb-4 lg:text-start">
      <h1 className="text-xl md:text-2xl lg:text-3xl lg:font-thin">Superstore</h1>
    </div>
    <div className="grid grid-cols-2 gap-3 md:p-5  md:grid-cols-3 lg:gap-2 lg:grid-cols-6  p-4 items-center">
      {cards.map((item, index) => (
        <div key={index} className=" m-auto card w-[165px] h-[179px] bg-gray-200 text-center flex flex-col items-center ">
          <img className="object-cover w-full h-full" src={item.imageUrl} alt={`Card ${index + 1}`} />
          <div className="text mt-2">
            <h1 className='text-[20px] text-sm md:text-base'>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
{/* card-3 */}
<div className="_container  mt-4 flex-col items-center">
  <div className="w-full px-4 pt-2 box-shadow">
    <div className="text-center mb-4 lg:text-start ">
      <h1 className="text-xl md:text-2xl lg:text-2xl lg:font-thin">সেরা ডিস্কাউন্ট এ বেস্টসেলার বই</h1>
    </div>
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-6 md:items-stretch   items-center">
      {main.map((item, index) => (
        <div key={index} className="card relative group  border-0 mb-4 w-full m-auto  h-[348px] hover:border-2 hover:border-gray-400 text-center flex flex-col items-center justify-center">
          <img className="object-cover " src={item.imageUrl} alt={`Card ${index + 1}`} />
          <div className="text mt-2">
            <h1 className='font-thin text-sm md:text-base'>{item.title}</h1>
          </div>

          <div className="button w-full h-full absolute text-center invisible flex flex-col group-hover:visible items-center justify-center">
            <button className='translate-y-[-30px] font-bold text text-white rounded-md bg-[#f90] m-auto py-3 px-4 flex items-center justify-center '>Add To Card</button>

           <button className='bg-slate-300 w-full p-2 font-bold text-blue-400'>View More</button>
          </div>
          <div className="text text-center">
            <p className='w-[70%] m-auto'>A compleat Biography of Abraham</p>
            <span className='opacity-[0.5]'>বি.জেইন পাব্লিশারস</span>
            <div className="rate flex justify-center text-[#f90]">
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
{/* card-4 */}

<div className="_container bg-white h- mt-3 flex flex-col items-center">
  <div className="w-full px-4 pt-2 box-shadow">
    <div className="text-center mb-4 lg:text-start ">
      <h1 className="text-xl md:text-2xl lg:text-2xl lg:font-thin">বেস্ট সেলার বিষয় </h1>
    </div>
    <div className="grid grid-cols-2 gap-3 gap-y-4 sm:grid-3 sm:gap-3 md:grid-cols-3 lg:gap-2 lg:grid-cols-6 p-4 md:p-5 items-stretch ">
      {cards4.map((item, index) => (
        <div key={index} className="card w-[165px] m-auto  h-[170px] text-center flex flex-col items-center justify-center">
          <img className="object-cover w-[136px] h-[132px]" src={item.imageUrl} alt={`Card ${index + 1}`} />
          <a href="#" className='mt-3 flex items-center text-blue-500 font-light'>{item.links} <RiArrowRightWideLine /></a>
        </div>
      ))}
    </div>
  </div>
</div>

{/* btn */}
<div className="btns w-full mt-4 md:mt-4">
  <div className="_container">
  <div className="midium grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5 p-5 md:bg-gray-200 md:w-full md:h-auto md:items-center">
  {btns.map((item, index) => (
   <button
   key={index}
   className="w-full  bg-white text-black md:z-[1] py-2 px-4 flex items-center justify-center gap-2 border border-black md:border-blue-400 relative mb-3 md:mb-0 overflow-hidden text-center whitespace-nowrap before:content-[''] before:absolute before:left-0 before:top-0 before:w-[0%] before:h-[100%] before:bg-blue-500 md:hover:before:w-[100%] md:before:transition-all md:before:duration-700 md:ho md:py-4 md:before:z-[-1] md:hover:text-white md:"
 >
   <span className="truncate">{item.btn_text}</span>
   <span className="block md:hidden"><SlArrowRight /></span>
 </button>
 
 
  ))}
</div>





  </div>
</div>

  </>





);


  


 
   
    
  
}

export default Home