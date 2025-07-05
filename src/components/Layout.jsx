import React from 'react'

import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <ScrollToTop/>
    
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
