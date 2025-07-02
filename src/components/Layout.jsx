import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <ScrollToTop/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
