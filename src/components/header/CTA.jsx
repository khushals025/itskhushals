import React from 'react'
import CV from '/Users/khushal/Desktop/react-portfolio-website-1/src/assets/RESUME.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA