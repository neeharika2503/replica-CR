import React from 'react'
import './header.css'
import logo from './logo.svg';

function Header() {
  return (
    <div classname="header">
        <img src={logo} className="header_logo" alt="logo" />
        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">Hello Guest</span>
                <span className="header__optionLineTwo">Sign In</span>
            </div>
        </div>
    </div>  
  )
}

export default Header