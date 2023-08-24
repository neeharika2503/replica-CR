import React from 'react'
import './header.css'
import logo from './logo.svg';

function Header() {
  return (
    <div classname='header'>
        <img src={logo} className="header_logo" alt="logo" />
    <div classname='headerlogin'>
        <span classname='login'>Hello guest!</span>
    </div>
        </div>
  )
}

export default Header