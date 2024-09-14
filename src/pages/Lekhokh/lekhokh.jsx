import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';

const Lekhokh = () => {
  return (
    <>
      <div className="cardsection1 mt-5 ">
        <div className="_container ">
          <div className="main bg-white box-shadow bottom-4">
            <Swiper
              spaceBetween={20}
              slidesPerView={6} // Default slides to show on large screens
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              breakpoints={{
                // when window width is >= 320px (Mobile)
                320: {
                  slidesPerView: 1,
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
                    <div className="card bg-white p-4 rounded-lg flex flex-col items-center">
                      <img 
                        src="https://ds.rokomari.store/rokomari110/people/feecb90af_78860.jpg"
                        alt=""
                        className="rounded-full w-24 h-24 mb-2 ring-8 ring-[#d3c7c7]"
                      />
                      <p className="text-lg font-semibold">শায়খ আহমাদুল্লাহ</p>
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
          <div className="mains grid grid-cols-2 md:grid-cols-6 justify-center items-center bg-white shadow-md p-5 w-full box-shadow">
            {Array(18).fill("").map(() => {
              return (
                <div className="cards flex flex-col justify-center items-center mt-4 w-full">
                  <img className="w-24 h-24 rounded-full" src="https://ds.rokomari.store/rokomari110/people/feecb90af_78860.jpg" alt="" />
                  <p className="mt-3">শায়েখ আহ্মাদুল্লাহ</p>
                  <span className="font-thin text-[#878282]">2000 followers</span>
                  <button className="border-2 border-blue-500 px-8 py-1 flex justify-center items-center rounded-2xl font-bold hover:bg-blue-900 hover:text-white">Follow</button>                
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lekhokh;
