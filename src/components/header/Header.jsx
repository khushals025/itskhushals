import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Linkedin-2 Background Removed Background Removed.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='containerH header__container'>
          <h2>Hello I'm</h2>
          <h1 className='hello'>Khushal Sharma</h1>
          <h2 className='text-light'>Data Scientist | Data Analyst </h2>
          <CTA />
          <HeaderSocials />
          <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}


export default Header

