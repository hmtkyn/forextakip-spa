import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

function Footer (){
  return (
    <footer>
      <NavLink
        exact
        to='/'
        className='switch_nav__item'
        activeClassName='active'>
        <span className='switch_nav__item--icon'>USD/TRY</span>
        <span className='switch_nav__item--text'>Dolar</span>
      </NavLink>
      <NavLink
        to='/euro-try'
        className='switch_nav__item'
        activeClassName='active'>
        <span className='switch_nav__item--icon'>EUR/TRY</span>
        <span className='switch_nav__item--text'>Euro</span>
      </NavLink>
      <NavLink
        to='/euro-usd'
        className='switch_nav__item'
        activeClassName='active'>
        <span className='switch_nav__item--icon'>EUR/USD</span>
        <span className='switch_nav__item--text'>Euro</span>
      </NavLink>
      <NavLink
        to='/gau-try'
        className='switch_nav__item'
        activeClassName='active'>
        <span className='switch_nav__item--icon'>GAU/TRY</span>
        <span className='switch_nav__item--text'>Gram Altın</span>
      </NavLink>
    </footer>
  )
}

export default Footer
