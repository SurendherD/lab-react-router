import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

function Navlink() {
  return (
    <div className='nav'>
      <div className='nav1'>
      <NavLink to='/'>Kalvium <span style={{color:'red'}}>❤</span></NavLink>
      </div>
      <div className='nav2'>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
      </div>
    </div>
  )
}

export default Navlink
