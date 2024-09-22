import React from 'react'

const Bookfair = () => {
  return <>
  <div className="_container">
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
  </div>
  </>
}

export default Bookfair