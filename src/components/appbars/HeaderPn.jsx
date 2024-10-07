"use client";
import React, { useState } from "react";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";


const HeaderPn = ({handleModal}) => {
    const [showDrawer, setShowDrawer] = useState(false);
    return (
        <>
        <div className="lg:hidden p-2 shadow-sm">
            <div className="_container">
                <div className="grid grid-cols-3 items-center">
                    <div className="text-2xl">
                        <button onClick={() => setShowDrawer(true)}>
                            <HiOutlineBars3CenterLeft />
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link to={"/"}>
                            <img
                                src={"/img/chy.png"}
                                width={40}
                                height={40}
                                alt="logo"
                                sizes="100vw"
                                className="w-[25px] h-[50px] object-cover"
                            />
                        </Link>
                    </div>
                    <div className="flex justify-end items-center gap-3 text-xl">
                        <button onClick={handleModal}  className="flex justify-center items-center gap-2 text-primary relative">
                            <span className="rounded-full absolute -top-1 -right-1 text-xs w-5 h-5 bg-primary text-white flex justify-center items-center">30</span>
                            <BsBag />
                        </button>
                        <span>|</span>
                        <button className="flex justify-center items-center gap-2 lato">
                            <span className="">
                                <BiUser />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* <CheckOutsideClick onClickOutside={() => setShowDrawer(false)}>
                {showDrawer && (
                    <Drawer handleClose={() => setShowDrawer(false)}>
                        <div className="w-full h-full bg-white pt-5 pb-20">
                            
                        </div>
                    </Drawer>
                )}
            </CheckOutsideClick> */}
        </div>
        <div className="_container">
        <div className='flex justify-between w-[cal(100%-20px)] mx-auto px-3 py-1 rounded-full border border-primary items-center gap-3'>
                <div className='flex items-center gap-3 w-full'>
                  <span className='text-xl text-primary'> <BiSearchAlt /></span>
                  <input type="search" className='w-full h-full outline-none text-gray-500' placeholder='Search by বইয়ের নাম, লেখকের নাম' />
                </div>
                <button className='btn-primary'>Search</button>
              </div>
        </div>
        </>
    );
};

export default HeaderPn;
