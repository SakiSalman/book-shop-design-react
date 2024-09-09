import React from 'react'
import Header from '../appbars/Header'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
   <>
   <Header/>
    <Outlet/>
   </>
  )
}

export default Layout