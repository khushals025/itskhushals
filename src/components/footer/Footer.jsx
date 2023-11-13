import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaKaggle} from 'react-icons/fa'
import {AiTwotoneHeart} from 'react-icons/ai'
import {AiOutlineSmile} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#services'>Skills</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#testimonials'>Certifications</a></li>
        <li><a href='#contact'>Contact Me</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com/khushals025'><BsGithub/></a>
        <a href='https://www.linkedin.com/in/itskhushals/'><BsLinkedin/></a>
        <a href='https://www.kaggle.com/kms025/'><FaKaggle/></a>
      </div>

      <div className='footer__copyright'>
        <small><AiOutlineSmile/> Made with <AiTwotoneHeart/> and some efforts.</small>
      </div>
    </footer>
  )
}

export default Footer


