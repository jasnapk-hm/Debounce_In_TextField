import React from 'react'
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div>
       <Navbar />
       {/* All the child component needs to render from the parent.
       Any children rourtes from body component routes from here  */}
       <Outlet />
    </div>
  )
}

export default Body
