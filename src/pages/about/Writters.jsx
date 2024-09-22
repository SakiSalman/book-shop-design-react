import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import { RiHomeLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Writters = () => {
  return (
    <>
      <div className="bg-bgGray w-full py-5">
    <div className="_container">
    <div className="media flex items-center gap-2 text-[#737373]">
    <RiHomeLine/>
    <FiChevronRight />    
    <p>বই</p>
    <FiChevronRight />    
    <p>লেখখ</p>
    </div>
    </div>

      <div className="cardsection1 mt-3 ">
        <div className="_container ">
          <div className="back-icons">
          </div>
          <div className="main bg-white  bottom-4">
            <Swiper
              spaceBetween={20}
              slidesPerView={6} // Default slides to show on large screens
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation]}
              breakpoints={{
                // when window width is >= 320px (Mobile)
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // when window width is >= 640px (Tablet)
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                // when window width is >= 768px (Small desktop)
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                // when window width is >= 1024px (Larger screens)
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {Array(10)
                .fill("")
                .map((_, index) => (
                  
                  <SwiperSlide key={index}>
                    {
                      console.log(index)
                    }
                    <div className="card bg-white p-4 rounded-lg flex flex-col items-center">
                      <img 
                        src="https://ds.rokomari.store/rokomari110/people/feecb90af_78860.jpg"
                        alt=""
                        className="rounded-full w-24 h-24 mb-2 ring-8 ring-[#d3c7c7]"
                      />
                      <p className="text-lg font-semibold"><Link to={`/authors/`+index}>শায়খ আহমাদুল্লাহ</Link></p>
                      <span className="text-sm text-gray-500">
                        6887 followers
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="cardsection2 mt-4">
        <div className="_container">
          <div className="mains grid grid-cols-2 md:grid-cols-6 justify-center items-center bg-white  p-5 w-full ">
            {Array(18).fill("").map((item, index) => {
              return (
                <div key={index} className="cards flex flex-col justify-center items-center mt-4 w-full">
                  <img className="w-24 h-24 rounded-full" src="https://ds.rokomari.store/rokomari110/people/feecb90af_78860.jpg" alt="" />
                  <Link className="mt-3" to={'/authors/'+index}>শায়েখ আহ্মাদুল্লাহ</Link>
                  <span className="font-thin text-[#878282]">2000 followers</span>
                  <button className="btn-follow">Follow</button>                
                  </div>
              
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Writters;

