import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="header">
            <ul>
                <li><a href=""><i className='fa fa-map-marker'></i></a>124-1 vavdi himmatnager</li>
                <li><a href=""><i className='fa fa-phone'></i></a>+91 7863847823</li>
                <li><a href=""><i className='fa fa-envelope-o'></i></a> sachixl300@gmail.com</li>
            </ul>
        </div>

    <div className="contener">
        <div className="nevbar">
            <div className="logo">
                <h1>travel trip</h1>
            </div>
            <label htmlFor="manu-check"><i className='fa fa-bars'></i></label>
            <input type="checkbox" name="" id="manu-check" />
            <ul className='ul'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="/mailus">Mail Us</NavLink>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header