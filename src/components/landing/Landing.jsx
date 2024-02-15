import React from 'react'
import './landing.css'
import '../header/header.css'
import CTA from '../header/CTA'
import ME from '../../assets/Linkedin-2 Background Removed Background Removed.png'
import ME2 from '../../assets/naruto.png'
import HeaderSocials from '../header/HeaderSocials'

const landing = () => {
  return (
    
    <div className='landing-img'>
        <div className='landing-overlay'>
            <div className='containerH header__container'>
                <h2>Hello I'm</h2>
                <h1 className='hello'>Khushal Sharma</h1>
                <h2 className='text-light'>Data Engineer | AI & ML Engineer </h2>
                <CTA />
                <HeaderSocials />
                <a href='#contact' className='scroll__down'>Scroll Down</a>

            </div>
        </div>
    </div>
        
    
  )
}

export default landing
