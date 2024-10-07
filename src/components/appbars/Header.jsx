import React, { useState, useEffect } from 'react';
import useWindowSize from '../../utils/useWindowSize';
import HeaderPC from './HeaderPC';
import HeaderPn from './HeaderPn';
import Modal from '../Modals/Modal';
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";  // Import useLocation

const Header = () => {
  
    const { isMobile } = useWindowSize();
    const [count, setCount] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const location = useLocation();  // useLocation hook to get the current route

    const closeModal = () => {
      setModalOpen(false);
    };

    const showModal = () => {
      setModalOpen(true);
    };
   
    const handleIncrement = () => {
      if (count >= 10) {
        setCount(0);
        alert("You cannot take more than ten items");
      } else {
        setCount(count + 1);
      }
    };

    const handleDecrement = () => {
      if (count <= 0) {
        setCount(0);
      } else {
        setCount(count - 1);
      }
    };

    useEffect(() => {
      if (location.pathname === '/addcard') {
        setModalOpen(false);
      }
    }, [location.pathname]);  
   
    return (
      <>
        <div>
          {
            !isMobile ? <HeaderPC handleModal={showModal} /> : <HeaderPn handleModal={showModal} />
          }
        </div>
        <Modal open={modalOpen} handleClose={closeModal}>
          <div className={`bg-white w-[300px] p-3 absolute top-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-blue-400 right-0 h-screen transition-all duration-300 ease-in-out md:bg-white md:w-[440px] md:p-3 md:absolute md:top-0 md:overflow-y-scroll md:scrollbar-thin md:scrollbar-thumb-green-500 md:scrollbar-track-blue-400 md:right-0 md:h-screen md:transition-all md:duration-1000 md:ease-in-out ${modalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="card flex justify-between items-center p-1">
              <h1 className='font-[poppins,sans-serif]'>Cart</h1>
              <span className="text-2xl" onClick={closeModal}>
                <IoMdClose />
              </span>
            </div>

            <div className="">
              <div className="product">
                <div className="productrange">
                  <p><span class="text-red-800 text-lg font-[600]">*</span> You are $0.0 away from free shipping</p>
                  <div className="layer bg-gray-400 w-full h-[8px]">
                    <div className="range bg-green-600 w-[80%] h-[8px]"></div>
                  </div>
                </div>
                <div className="product_img flex mt-5 border-b-2 p-2 border-r-8 items-center">
                  <div className="img w-[80px] h-[80px]">
                    <img className='w-[80px] h-[80px] object-cover' src="https://tse3.mm.bing.net/th?id=OIP.wMftsrP6USIHg4aMEpwnPQHaHa&pid=Api&P=0&h=220" alt="" />
                  </div> 
                  <div className="produce-content">
                    <h3 className='font-bold font-[poppins,sans-serif] mb-3'>Product Name</h3>
                    <div className=" w-[90px] h-[40px] border border-2  flex items-center p-2">
                      <span onClick={handleDecrement} className='cursor-pointer font-bold text-[30px]'>-</span>
                      <input className='w-full text-center' type="text" value={count} readOnly />
                      <span onClick={handleIncrement} className='cursor-pointer font-bold text-[20px]'>+</span>
                    </div>
                    <bold className="font-bold flex items-center mt-1">$40 USD</bold>
                  </div>
                </div>

                <div className="product-add mt-3 ">
                  <h1>Add this in..</h1>
                  <div className="image-add flex gap-2 justify-between border-r-8 border-b-2 p-2">
                    <div className="img w-[80px] h-[80px]">
                      <img className='object-cover w-full h-full' src="https://chillmedicatedcbd.com/_next/image?url=https%3A%2F%2Fchill-medicated.nyc3.digitaloceanspaces.com%2FProduct%2Fchill-medicated.93541f83-464e-4139-960d-7b5422f2b393_do.png&w=96&q=75" alt="" />
                    </div>

                    <div className="">
                      <h2 className='font-semibold  font-[poppins,sans-serif]'>Cherry CBD Syrup - 2500mg</h2>
                      <button className='border-2 w-[150px] h-[50px] transition-all duration-1000 hover:bg-black hover:text-white md:border-2 md:w-[150px] md:h-[50px] md:transition-all md:duration-1000 md:hover:bg-black md:hover:text-white'>Add | $35.00</button>
                    </div>
                  </div>
                </div>

                <div className="subtotal border-b-2 flex justify-between p-2">
                  <div className="sub">
                    <h2>Subtotal</h2>
                    <p>(0) Sales Tax (0.00%)</p>
                    <p>(-)Discount</p>
                  </div>
                  <div className="total">
                    <span className='font-bold'>$0.00</span><br />
                    <span className='text-sm'>$0.00</span><br />
                    <span className='text-xs'>$0.00</span>
                  </div>
                </div>

                <div className="totals flex justify-between px-2">
                  <h2>Net Total</h2>
                  <span className='font-bold'>$0.0</span>
                </div>
              </div>

              <div className="butons flex flex-col mt-2">
                <button className='border-[2px] transition-all duration-300 border-red-700 py-2 hover:bg-primary  font-bold font-[poppins,sans-serif]
                hover:text-white'>Guest Checkout</button>
                <button className='bg-[#138808] py-2 mt-2 font-[poppins,sans-serif]'>Loging And Check Out</button>
              </div>

              <div className="shipping mt-16 flex flex-col">
                <p className='text-center font-[poppins,sans-serif]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tenetur!</p>
                <button className='border-[2px] mt-2 transition-all duration-300 border-red-700 py-2 hover:bg-primary  font-bold font-[poppins,sans-serif]
                hover:text-white'><Link to="/addcard">View Shopping Card</Link></button>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
};

export default Header;
