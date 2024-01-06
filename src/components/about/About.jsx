import React from 'react'
import './about.css'
/*import ME from '/Users/khushal/Desktop/react-portfolio-website-1/src/assets/Linkedin-2 Background Removed Background Removed.png'*/
import ME from '/Users/khushal/Desktop/react-portfolio-website-1/src/assets/Linkedin-2 Background Removed Background Removed.png'
import {FaAward} from 'react-icons/fa'
import {RiGraduationCapFill} from 'react-icons/ri'
import {PiFlowerBold} from 'react-icons/pi'
import {HiDocumentCheck} from 'react-icons/hi2'


const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt='me' />
                </div>
            </div>
                {/*<div className='about__me-image'><img src={ME} alt='About Image' /></div>*/}
            

            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>

                    <article className='about__card'>
                        <RiGraduationCapFill className='about__icon'/>
                        <h5>Education</h5>
                        <small>Master's Degree</small>
                    </article>

                    <article className='about__card'>
                        <PiFlowerBold className='about__icon'/>
                        <h5>Passionate About</h5>
                        <small>Problem Solving</small><br/>
                    </article>

                    <article className='about__card'>
                        <HiDocumentCheck className='about__icon'/>
                        <h5>Work Authorization</h5>
                        <small>F1 - OPT</small><br/>
                        <small>Active EAD</small>
                    </article>
                </div>
                <p>
                    I'm a recent Engineering Science graduate with a Master's Degree, specializing in Deep Learning, Computer Vision, and Natural Language Processing (NLP). My passion lies in creating intelligent systems, discovering AI solutions, and uncovering patterns in real industry data.
                     <br/>I excel in collaborating with others, am an agile and fast learner, and have a knack for debugging code. Remaining calm under pressure and possessing strong communication skills are my strengths.<br/>
                      In addition, I bring a data-driven mindset and storytelling abilities to the table, essential for success in the field of data science and data analytics.
                    I'm eager to apply my expertise to cutting-edge technology and contribute to projects by crafting data-informed narratives that drive strategic solutions.<br/>
                    Holding an F1 OPT status and an EAD card, I'm eligible to work in the US immediately.
                </p>
                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About