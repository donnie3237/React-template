import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <div className='Header flex'>
        <NavLink  to='/one'>one</NavLink>
        <NavLink  to='/two'>two</NavLink>
        <NavLink to='/three'>three</NavLink>
    </div>
  )
}

export default Header