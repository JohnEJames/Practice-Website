import React from 'react';
import './App.css';
import {Link}from'react-router-dom'
import logo from './images/Logo.png'

function Nav() {

    const NavStyle ={
        color:'white'
    };

    const LogoStyle ={
        width: 90,
        height: 90
    };
  return (
  <nav>
      <img src={logo} alt="Logo" style={LogoStyle}/>
      <ul className="nav-links">
      <Link style ={NavStyle} to='/'>
          <li>Home</li>
          </Link>
          <Link style ={NavStyle} to='/Game1'>
          <li>Game1</li>
          </Link>
          <Link style ={NavStyle} to='/Game2'>
          <li>Game2</li>
          </Link>
          <Link style ={NavStyle} to='/Game3'>
          <li>Game3</li>
          </Link>
          
      </ul>
  </nav>
  );
}

export default Nav;
