import React from 'react';
import Search from './Search';

const Navbar = () => {
  return (
    <div className="navbar-bg">
    <div className="container">
    <div className='navbar-container'>
        <img className='logo' src="./logo.png" alt="logo" />
    <Search/>
    </div>
    </div>
    </div>
  )
}


export default Navbar;
