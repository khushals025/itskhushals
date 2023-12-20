import React from 'react'
import './education.css'
import {BiSolidDice1} from 'react-icons/bi'
import {RiGraduationCapFill} from 'react-icons/ri'


const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>

      <div className='education__timeline'>

        <div className='education__container'>
          <BiSolidDice1 className='education__icon'/>
          <div className='education-text-box'>
            <h3>Master of Science in Engineering Science - AI & Robotics</h3>
            <small>2022-2023</small>
            <p><RiGraduationCapFill/>   Course Work : Machine Learning, Deep Learning, Big Data Analytics, NLP, Fundamentals of AI, Computer Vision and Image Processing, Data Structures and Algorithms, Robotics Algorithms, Robotic Control Systems</p>
          </div>
        </div>

        <div className='education__container'>
          <BiSolidDice1 className='education__icon'/>
          <div className='education-text-box'>
            <h3>Bachelor of Science in Mechanical Engineering</h3>
            <small>2016 - 2020</small>
            <p><RiGraduationCapFill/> Course Work : Computer Programming, Calculus, Linear Algebra, Statistics & Probability, Advanced Engineering Mathematics, Diffrential Equations </p>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Education