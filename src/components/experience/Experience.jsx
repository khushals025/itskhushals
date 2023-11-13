import React from 'react'
import './experience.css'
import {BsPersonWorkspace} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import {BiSolidCalendarCheck} from 'react-icons/bi'
import {BiSolidCalendar} from 'react-icons/bi'
import {BiSolidDice1} from 'react-icons/bi'
import {TbPointFilled} from 'react-icons/tb'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I gained Though</h5>
      <h2>Experience</h2>
      
      <div className='timeline'>

        <div className='experience__container left-container'>
          <BiSolidDice1 className='icon'/>
          <div className='text-box'>
            <h3><span className="title-text">Ilibrium</span><span className="role-text"> | AI/ML Software Engineer</span></h3>
            <small>Apr 2023 - Present</small>
            <p>
              <TbPointFilled/> Integrated Text-to-Speech, Speech-to-Text, Text-to-Image APIs, boosting website engagement by 30%. <br />
              <TbPointFilled/> Deployed AI solutions on AWS (API Gateway, Lambda, S3) for enhanced scalability and serverless compute. <br />
              <TbPointFilled/> Implemented real-time ETL pipeline with Apache Kafka, enabling secure sharing of medical data. <br />
              <TbPointFilled/> Applied differential privacy and data masking techniques for robust patient health record protection.
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className='experience__container right-container'>
          <BiSolidDice1 className='righticon'/>
          <div className='text-box'>
          <h3><span className="title-text">RIG Inc.</span><span className="role-text"> | AI/ML Software Engineering intern</span></h3>
            <small>Feb 2023 - Apr 2023</small>
            <p>
              <TbPointFilled/> Developed biometric authentication application for periocular region of face, leveraging AWS Sagemaker, EC2, EMR, S3 services. <br />
              <TbPointFilled/> Improved testing accuracy, 84% to 95% via transfer learning (VGG16, BlazeFace), A/B testing, data augmentation, hyperparameter tuning. <br />
              <TbPointFilled/> Collaborated with cross-functional team of 6 to orchestrate model deployment on AWS infrastructure. Integrated flask and django for user interface. Utilised git for version control. <br />
            </p>
            <span className='right-container-arrow'></span>
          </div>
        </div>

        <div className='experience__container left-container'>
          <BiSolidDice1 className='icon'/>
          <div className='text-box'>
            <h3><span className="title-text">University at Buffalo</span><span className="role-text"> | TA - Applied Mathematics</span></h3>
            <small>Sep 2022 - Dec 2022</small>
            <p>
              <TbPointFilled/> Oversaw 300+ students in MAE 376, handling grading for diverse topics like differential equations, linear algebra, numerical methods, optimization, PDEs, Fourier analysis, and complex analysis. <br />
              <TbPointFilled/> Conducted problem-solving sessions and comprehensive office hours, aiding students in understanding intricate subjects such as transform methods, probability and statistics, while ensuring their success in applied mathematics. <br />
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        
        <div className='experience__container right-container'>
          <BiSolidDice1 className='righticon'/>
          <div className='text-box'>
            <h3><span className="title-text">Evox Systems Pvt. Ltd.</span><span className="role-text"> | Junior Data Scientist</span></h3>
            <small>Jun 2020 - Dec 2021</small>
            <p>
              <TbPointFilled/> Constructed end-to-end ETL pipelines on Azure Databricks using pyspark, scala,python, integrated PostgreSQL systems, leveraging a  data lake for scalable data transformation for huge chunks of data. Orchestrated seamlessly using Azure Data Factory. <br />
              <TbPointFilled/> Executed SQL queries, crafted interactive BI dashboards(PowerBI,Tableau,Excel),back data driven decision making via business reports. <br />
              <TbPointFilled/> Worked with a cross functional team of 6 to perform customer churn, used logistic regression, XGBoost, random forest, SVM, Bernoulli Naive bayes, achieved ROC-AUC score to evaluate accuracy of 93%, A/B testing to further boost accuracy up to 96%. <br />
              <TbPointFilled/> Implemented CI/CD processes, deployed models for estimating customer segmentation using unsupervised techniques like k-means, mean-shift clustering, evaluated macro average F1 score of 92%. Used AWS sagemaker for deployment.
            </p>
            <span className='right-container-arrow'></span>
          </div>
        </div>

        {/*<div className='experience__container left-container'>
          <BiSolidDice1 className='icon'/>
          <div className='text-box'>
            <h3><span className="title-text">Carleton University</span><span className="role-text"> | Mechatronics Intern</span></h3>
            <small>Jun 2019 - July 2019</small>
            <p>
              <TbPointFilled/> Integrated Text-to-Speech, Speech-to-Text, Text-to-Image APIs, boosting website engagement by 30%. <br />
              <TbPointFilled/> Deployed AI solutions on AWS (API Gateway, Lambda, S3) for enhanced scalability and serverless compute. <br />
              <TbPointFilled/> Implemented real-time ETL pipeline with Apache Kafka, enabling secure sharing of medical data. <br />
              <TbPointFilled/> Applied differential privacy and data masking techniques for robust patient health record protection.
            </p>
  <span className='left-container-arrow'></span>
          </div>
        </div>*/}
        
      </div>
    </section>
  )
}

export default Experience