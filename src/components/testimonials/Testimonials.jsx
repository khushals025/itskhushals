import React from 'react'
import './testimonials.css'
import AWS from '/Users/khushal/Desktop/react-portfolio-website-1/src/assets/aws-certified-cloud-practitioner.png'


const data = [
  {
    id: 1,
    Image: AWS,
    title: "qwerty",
    link: "https://www.credly.com/badges/d4f0aa0b-bbc3-4883-9d44-b40e7b3295b2/linked_in_profile"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Learnings Through</h5>
      <h2>Certifications</h2>

      <div className='container testimonials__container'>
        {
          data.map (({id, Image, title,link}) => {
            return (
              <article key = {id} className='testimonials__item'>
              <div className='testimonials__item-image'>
                <img src={Image} alt={title} />
              </div>
              <div className='testimonials__item-cta'>
                <a href={link} className='btn2' target='_blank'>See Credentials</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}


export default Testimonials

