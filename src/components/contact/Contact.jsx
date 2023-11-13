import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {IoMdCall} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n4w9hon', 'template_e561jfh', form.current, 'YOUR_USER_ID')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>itskhushals@outlook.com</h5>
            <a href='mailto:itskhushals@outlook.com' target='_blank'>Send an email</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>itskhushals</h5>
            <a href='https://www.linkedin.com/in/itskhushals/' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <IoMdCall className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+1(716) 547-9553</h5>
            <a href='https://wa.me/17165479553' target='_blank'>Quick call</a>
          </article>

        </div>
        {/* END OF CONATCT OPTONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message :)' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact