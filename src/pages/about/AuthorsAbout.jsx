import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineStar, MdStarRate } from "react-icons/md";
import { main } from "../../faker/fake";

const ReadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p>
      {isExpanded ? text : `${text.substring(0, 206)}...`}
      <span
        onClick={toggleReadMore}
        style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </span>
    </p>
  );
};

const AuthorsAbout = () => {
  const longText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis dignissimos magnam! Libero commodi, exercitationem aliquid quis sapiente repellat, voluptatem velit sunt corrupti, inventore impedit! Temporibus exercitationem nobis at ut, atque mollitia esse quis rerum quaerat libero maiores nesciunt maxime aspernatur dolor ipsam cumque, rem odit totam iure aperiam, quisquam architecto veritatis est! Tenetur labore atque in? Et, quidem commodi beatae totam ea sit consequuntur accusamus porro, voluptatum consectetur fugiat eius dolorum aperiam placeat optio! Iusto, rerum sequi veritatis quaerat ut assumenda asperiores natus corrupti commodi doloribus repellat illum impedit voluptate fugit ab quibusdam repudiandae est suscipit! Repellendus perferendis veritatis non obcaecati eveniet excepturi dolorum delectus reiciendis perspiciatis quo soluta veniam, necessitatibus accusantium facere nulla labore unde ad nihil libero quas doloribus velit reprehenderit provident quae. Animi incidunt nulla, inventore cumque qui molestias. Quisquam ipsam consectetur voluptatem sit eum iure, amet adipisci, dolorem eaque autem ad odit illum dolorum totam laboriosam. Consequuntur laudantium, aut ullam facilis eum fuga, itaque repudiandae alias in possimus magnam! Optio impedit dolorem nam doloremque alias! Sequi veniam soluta delectus aperiam error temporibus aliquid eveniet quis quo maxime et fugit impedit optio, rem consectetur quaerat eos maiores pariatur nisi obcaecati! Dolorem et adipisci repellat aliquam amet.';

  return<>
  <div className="parren md:block md:bg-bgGray h-auto py-2">
      <div className="_container flex flex-col md:flex-row">
        <div className="identify-cards hidden md:flex flex-col">
          {/* Sort Card */}
          <div className="card-1 w-[290px] h-[283px] bg-white">
            <div className="card-title flex justify-between p-3">
              <h3>Sort</h3>
              <a href="#">Reset sort</a>
            </div>
            <hr />
            <div className="radio p-4 flex flex-col gap-3">
              <div className="input1 flex gap-2 items-center">
                <input type="radio" name="radio" />
                <label>Best Seller</label>
              </div>
              {/* Add more radio buttons here */}
            </div>
          </div>

          {/* eBook and In Stock Checkboxes */}
          <div className="card2 w-[294px] h-auto bg-white mt-4 border rounded-lg shadow-sm">
            <div className="chekbox1 p-3 flex items-center">
              <input type="checkbox" className="w-5 h-5 mr-2" />
              <span>eBook</span>
            </div>
            <div className="chekbox1 w-full border-t border-gray-300 p-3 flex items-center">
              <input type="checkbox" className="w-5 h-5 mr-2" />
              <span>In Stock</span>
            </div>
          </div>

          {/* Filter Card */}
          <div className="card-3 w-[294px] h-[377px] bg-white mt-4">
            <div className="flex p-3">
              <h3>Filter</h3>
              <a href="#">Reset Filter</a>
            </div>
            <hr />
            <div className="search-sec p-3 ">
              <h2>Shop by Categories</h2>
              <div className="search bg-bgGray flex justify-between items-center w-[250px] rounded-3xl h-[40px] p-2">
                <input
                  className="bg-transparent w-full outline-none"
                  type="text"
                />
                <IoSearch />
              </div>
            </div>
            <div className="chekbox-other p-3 h-64 overflow-y-auto border">
              <div className="chek">
                <input type="checkbox" className="mr-2" />
                <label>সমকালিন উপন্যাস</label>
              </div>
              {/* Additional checkboxes go here */}
            </div>
          </div>

          {/* Price Range Card */}
          <div className="card4 mt-4 w-[294px] h-[377px] bg-white">
            <div className="card-title p-4 h-[177px]">
              <h1 className="text-xl font-semibold">Price</h1>
              <div className="range relative pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-green-500 text-white rounded-full px-3 py-1 text-sm">
                    ৳50
                  </span>
                  <span className="bg-green-500 text-white rounded-full px-3 py-1 text-sm">
                    ৳120
                  </span>
                </div>
                <input
                  type="range"
                  className="w-full appearance-none bg-green-300 h-2 rounded-lg"
                  id="minPrice"
                  name="minPrice"
                  min="0"
                  max="100"
                  step="5"
                />
                <input
                  type="range"
                  className="w-full appearance-none bg-green-300 h-2 rounded-lg mt-2"
                  id="maxPrice"
                  name="maxPrice"
                  min="0"
                  max="100"
                  step="5"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0</span>
                  <span>11,275</span>
                  <span>22,550</span>
                  <span>33,825</span>
                  <span>45,100</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="search p-4">
              <div className="search-heading">
                <h2>Language</h2>
              </div>
              <div className="search-in">
                <div className="search mt-2 bg-bgGray flex justify-between items-center w-[250px] rounded-3xl h-[40px] p-2">
                  <input
                    className="bg-transparent w-full outline-none"
                    type="text"
                  />
                  <IoSearch />
                </div>
                <div className="search-body mt-2">
                  <div className="main">
                    <input type="checkbox" />
                    <label>Home</label>
                    <br />
                    <input type="checkbox" />
                    <label>Home</label>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="card4 mt-4 w-[294px] h-[377px] bg-white">
            <div className="card-title p-4 h-[177px]">
              <h1 className="text-xl font-semibold">Price</h1>
              <div className="range relative pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-green-500 text-white rounded-full px-3 py-1 text-sm">
                    ৳50
                  </span>
                  <span className="bg-green-500 text-white rounded-full px-3 py-1 text-sm">
                    ৳120
                  </span>
                </div>
                <input
                  type="range"
                  className="w-full appearance-none bg-green-300 h-2 rounded-lg"
                  id="minPrice"
                  name="minPrice"
                  min="0"
                  max="100"
                  step="5"
                />
                <input
                  type="range"
                  className="w-full appearance-none bg-green-300 h-2 rounded-lg mt-2"
                  id="maxPrice"
                  name="maxPrice"
                  min="0"
                  max="100"
                  step="5"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0</span>
                  <span>11,275</span>
                  <span>22,550</span>
                  <span>33,825</span>
                  <span>45,100</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="search p-4">
              <div className="search-heading">
                <h2>Language</h2>
              </div>
              <div className="search-in">
                <div className="search mt-2 bg-bgGray flex justify-between items-center w-[250px] rounded-3xl h-[40px] p-2">
                  <input
                    className="bg-transparent w-full outline-none"
                    type="text"
                  />
                  <IoSearch />
                </div>
                <div className="search-body mt-2">
                  <div className="main">
                    <input type="checkbox" />
                    <label>Home</label>
                    <br />
                    <input type="checkbox" />
                    <label>Home</label>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content w-full h-auto p-4 md:pl-10 rounded-md mb-4">
         <div className="midium flex bg-bgInport rounded-md p-3">
         <div className="author_img flex-shrink">
            <img
              className="w-[80px] h-[80px] object-cover rounded-full"
              src="https://proships.ru/stat/img/user-512.png"
              alt="Author"
            />
            <span>0 Followers</span>
            <button className="btn-single-follow rounded-sm">Follow</button>
          </div>
          <div className="author_name ml-4">
            <h1 className="font-bold text-lg mb-2 font-thin lato">লেখকের নাম</h1>
            <ReadMore text={longText} />
          </div>
         </div>

          <div className="books mt-4 w-full">
          <div className="_container mt-4 items-center">
            <div className="w-full bg-[#fdfcf5] px-4 pt-2 box-shadow">
              <div className="text-center mb-4 lg:text-start flex justify-between">
                <h1 className="text-xl md:text-2xl lg:text-2xl lg:font-thin">
                  সেরা ডিস্কাউন্ট এ বেস্টসেলার বই
                </h1>
                <button className="border border-blue-400 transition duration-500 rounded-sm hover:bg-blue-400 md:py-1 md:px-1 md:flex md:justify-center md:items-center">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-5 2xl:grid-cols-6">
  {main.map((item, index) => (
    <div
      key={index}
      className="card relative group border-0 mb-4 w-full m-auto h-[348px] hover:border-2 hover:border-gray-400 text-center flex flex-col items-center justify-center transition-all"
    >
      <img className="object-cover" src={item.imageUrl} alt={`Card ${index + 1}`} />
      <div className="text mt-2">
        <h1 className="font-thin text-sm md:text-base">{item.title}</h1>
      </div>

      <div className="button w-full h-full absolute text-center flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
        <button className="group-hover:-translate-y-9 transition-all lato duration-500 font-bold text-white rounded-md bg-[#f90] m-auto py-3 px-4 flex items-center justify-center">
          Add To Cart
        </button>
        <button className="bg-slate-300 w-full p-2 font-bold text-blue-400">
          View More
        </button>
      </div>

      <div className="text text-center mt-2">
        <p className="w-[70%] m-auto">A complete Biography of Abraham</p>
        <span className="opacity-[0.5]">বি.জেইন পাব্লিশারস</span>
        <div className="rate flex justify-center text-[#f90] mt-1">
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
        </div>
        </div>
        
        {/* Books Section */}
       

      </div>
      
      
    </div>
  </>;
};

export default AuthorsAbout;
