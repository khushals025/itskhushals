import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsPersonWorkspace} from 'react-icons/bs'
import {LuNetwork} from 'react-icons/lu'
import {HiChatBubbleLeftRight} from 'react-icons/hi2'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import {RiGraduationCapFill} from 'react-icons/ri'
import '../experience/experience.css'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={ activeNav === "#" ? 'active' : ''} ><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={ activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={ activeNav === "#services" ? 'active' : ''}><LuNetwork/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={ activeNav === "#experience" ? 'active' : ''}><BsPersonWorkspace/></a>
      <a href='#education' onClick={() => setActiveNav('#education')} className={ activeNav === "#education" ? 'active' : ''}><RiGraduationCapFill/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={ activeNav === "#portfolio" ? 'active' : ''}><BiBook/></a>
      <a href='#testimonials' onClick={() => setActiveNav('#testimonials')} className={ activeNav === "#testimonials" ? 'active' : ''}><AiOutlineSafetyCertificate/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={ activeNav === "#contact" ? 'active' : ''}><HiChatBubbleLeftRight/></a>
    </nav>
  )
}

export default Nav