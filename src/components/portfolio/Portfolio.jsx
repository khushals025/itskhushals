import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/airplane.png'
import IMG2 from '../../assets/3.jpeg'
import IMG3 from '../../assets/5.png'
import IMG4 from '../../assets/7 copy.png'
import IMG5 from '../../assets/stock.jpg'
import IMG6 from '../../assets/8.jpeg'


const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Airline Cancellation Classifier",
    github: 'https://github.com/khushals025/Airlines_Cancellation_Classifier',
    demo: '',
  },
  {
    id: 2,
    Image: IMG2,
    title: "American Sign Language Recognition",
    github: 'https://github.com/khushals025/RealTime-ASL-Gesture-Recognition',
    demo: '',
  },
  {
    id: 3,
    Image: IMG3,
    title: "Face Detection and Clustering",
    github: 'https://github.com/khushals025/Face_Detection_KMeans_Clustering',
    demo: '',
  },
  {
    id: 4,
    Image: IMG4,
    title: "Twitter Sentiment Analysis",
    github: 'https://github.com/khushals025/Twitter_Sentiment_Analysis',
    demo: '',
  },
  {
    id: 5,
    Image: IMG5,
    title: "Stock Price Prediction",
    github: 'https://github.com/khushals025/Stock_Prediction_Using_Financial_News',
    demo: '',
  },
  {
    id: 6,
    Image: IMG6,
    title: "English to Hindi Translator",
    github: 'https://github.com/khushals025/English-to-Hindi-Transformer-Translation',
    demo: '',
  },

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map (({id, Image, title, github, demo}) => {
            return (
              <article key = {id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={Image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio