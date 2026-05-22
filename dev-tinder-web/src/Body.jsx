import React from 'react'
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Body = () => {
  return (
    <>
       <Navbar />
       {/* All the child component needs to render from the parent.
       Any children rourtes from body component routes from here  */}
       <Outlet />
       <Footer />
    </>
  )
}

export default Body
