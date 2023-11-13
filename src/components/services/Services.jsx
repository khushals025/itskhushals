import React from 'react'
import './services.css'
import {VscVerifiedFilled} from 'react-icons/vsc'

const Services = () => {
  return (
    <section id='services'>
      <h5>What Skills I Hone</h5>
      <h2>My Skills</h2>

      <div className='container services__container'>
        <div className='services__Programming'>
          <h3>Programming</h3>
          <div className='services__content'>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>R</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Scala</h4>
              </div>
            </article>
          </div>
        </div>
        {/*END OF PROGRAMMING*/}
          <div className='services__ML'>
            <h3>Machine Learning</h3>
            <div className='services__content'>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>PyTorch</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Keras</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Tensorflow</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>SciKit Learn</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>OpenCV</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Transformers</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>NLP</h4>
              </div>
            </article>

            </div>
            
          </div>
          {/*END OF ML*/}
          <div className='services__webdev'>
            <h3>Web Development</h3>
            <div className='services__content'>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Flask</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Django</h4>
              </div>
            </article>

            </div>
          </div>
          {/*END OF DEVOPS*/}
          <div className='services__cloud'>
            <h3>Cloud Deployment | CI/CD</h3>
            <div className='services__content'>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>AWS</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Azure</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>GCP</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Docker</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Hadoop</h4>
              </div>
            </article>
            
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Kubernetes</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Git</h4>
              </div>
            </article>


            </div>
          </div>
          {/*END OF CLOUD*/}
          <div className='services__analysis'>
            <h3>Data Analytics</h3>
            <div className='services__content'>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>SQL Databases</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>NoSQL Databases</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>MATLAB</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Spark</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>ETL Pipeline</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Azure DataBricks</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Snowflake</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Airflow</h4>
              </div>
            </article>


            </div>
          </div>
          {/*END OF ANALYSIS*/}
          <div className='services__bi'>
            <h3>Visualization | BI</h3>
            <div className='services__content'>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Tableau</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Excel</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Power BI</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Seaborn</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Matplotlib</h4>
              </div>
            </article>
            <article className='services__details'>
              <VscVerifiedFilled className='services__details-icon'/>
              <div>
                <h4>Ggplot</h4>
              </div>
            </article>

            </div>
          </div>
          {/*END OF BI*/}
      </div>
    </section>
  )
}

export default Services