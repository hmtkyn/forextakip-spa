import React from 'react'
import './Header.css'
import FxtLogo from './../Media/Logo.svg'
import FxtIcon from './../Media/Icon.svg'

function Header() {
  return (
    /* eslint-disable */
    <header>
      <a href='/' className='header_brand'>
        <object
          type='image/svg+xml'
          data={FxtIcon}
          className='header_brand__icon'
        />
        <object
          type='image/svg+xml'
          data={FxtLogo}
          className='header_brand__logo'
        />
      </a>
    </header>
    /* eslint-enable */
  )
}

export default Header
