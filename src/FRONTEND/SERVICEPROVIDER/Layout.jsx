import React from 'react'
import Header1 from "./Header1"
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Home1 from './Home1'

function Layout() {
  return (
    <>
    <Header1/>
    <Home1/>
    <Footer/>
        </>
  )
}

export default Layout