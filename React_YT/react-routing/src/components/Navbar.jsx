import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     <div className="header">
          <h2>Amazon</h2>
          <div className="nav">
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/contact'>Contact</Link>
               <Link to='/product'>Product</Link>
          </div>
     </div>
    </div>
  )
}

export default Navbar