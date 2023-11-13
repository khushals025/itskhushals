import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {LiaKaggle} from 'react-icons/lia'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/itskhushals/' target='_blank'><BsLinkedin/></a>
        <a href='https://www.kaggle.com/kms025/' target = '_blank'><LiaKaggle/></a>
        <a href='https://github.com/khushals025' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials