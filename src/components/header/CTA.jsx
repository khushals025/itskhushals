import React from 'react'
import CV from '/Users/khushal/Desktop/react-portfolio-website-1/src/assets/Khushal_Sharma_Resume.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA