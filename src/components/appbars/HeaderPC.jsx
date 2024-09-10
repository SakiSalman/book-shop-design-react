import React, { useState } from 'react'
import { BiSearchAlt, BiUser } from 'react-icons/bi';
import { Link } from "react-router-dom";
import CheckOutsideClick from '../CheckOutsideClick/CheckOutsideClick';
import MenuPreference from '../MenuPreference/MenuPreference';
import { BsBag } from 'react-icons/bs';

const HeaderPC = () => {
    const [showDrop, setDrop] = useState(false)
    return (
      <div className='shadow-sm sticky hidden lg:block z-[999999]'>
        <div className="_container">
            <div className="grid grid-cols-12 items-center gap-4 pt-3">
              <div className='col-span-3 flex items-center'>
               <Link to={'/'}>
               <img
                  src={'/img/chy.png'}
                  width={40}
                  height={40}
                  alt='logo'
                  sizes='100vw'
                  className='w-[40px] h-[80px] object-cover'
                />
               </Link>
              </div>
              <div className='col-span-6'>
                <div className='flex justify-between w-[600px] mx-auto px-4 py-1 rounded-full border border-primary items-center gap-3'>
                  <div className='flex items-center gap-3 w-full'>
                    <span className='text-xl text-primary'> <BiSearchAlt /></span>
                    <input type="search" className='w-full h-full outline-none text-gray-500' placeholder='Search by বইয়ের নাম, লেখকের নাম' />
                  </div>
                  <button className='btn-primary'>Search</button>
                </div>
              </div>
              <div className='col-span-3'>
                <div className="flex justify-center gap-4">
                  <div className='relative'>
                    <button onClick={() => setDrop(true)} className='flex justify-center items-center gap-2 lato'><span><BiUser /></span>Dashboard</button>
                    <CheckOutsideClick onClickOutside={() => setDrop(false)}>
                      {
                        showDrop && <div className='absolute w-[195px] shadow-md rounded-md top-full left-1/2 right-1/2 -translate-x-1/2 p-3 bg-white z-10'>
                        <ul>
                          <li className='px-3  duration-700 transition-all cursor-pointer text-sm flex items-center gap-1 py-2 hover:bg-primary hover:text-white rounded-md mb-1'><a href="#">Dashboard</a></li>
                          <li className='px-3 duration-700 transition-all cursor-pointer text-sm flex items-center gap-1 py-2 hover:bg-primary hover:text-white rounded-md mb-1'><a href="#">Log Out</a></li>
                        </ul>
                      </div>
                      }
                    
                    </CheckOutsideClick>
                  </div>
                  <button className='flex justify-center items-center gap-2 lato'><span><BiUser /></span>Singn In</button>
                  <span>|</span>
                  <button className='flex justify-center items-center gap-2 text-primary relative'><span className='w-2 h-2 rounded-full bg-primary absolute top-1 -right-1'></span><BsBag /></button>
                </div>
              </div>
            </div>
            <div>
              <MenuPreference data={menuData}/>
        </div>
          </div>
        
      </div>
    )
  
}

export default HeaderPC




export const menuData = [
    {
      id: 1,
      name: "বই",
      path: "",
      content: null
    },
    {
      id: 1,
      name: "বিষয়",
      path: "",
      content: null
    },
    {
      id: 1,
      name: "বইমেলা",
      path: "/book-fair",
      content: ""
    },
    {
      id: 1,
      name: "উপন্যাস",
      path: "",
      content: ""
    },
    {
      id: 1,
      name: "কবিতা",
      path: "",
      content: ""
    },
    {
      id: 1,
      name: "গল্প",
      path: "",
      content: ""
    },
    {
      id: 1,
      name: "অনুবাদ",
      path: "",
      content: ""
    }
  ]
  