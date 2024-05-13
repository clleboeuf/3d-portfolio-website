import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl xm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am <span className='font-semibold'>Chris</span> 👋
        <br/>
        An Australian Software Engineer based in Victoria
        </h1>
    ),
    2: (
        <InfoBox
        text="Check out my journey from studying, to mobile app development, to AI
        model trainer!"
        link="/about"
        btnText="Learn more" />
    ),
    3: (
        <InfoBox
        text="I've been busy over the past few years, working on various projects with many different teams"
        link="/projects"
        btnText="Visit my portfolio" />
    ),
    4: (
        <InfoBox
        text="Looking to build a web or mobile app? Don't hesitate to get in touch!"
        link="/contact"
        btnText="Let's chat" />
    ),
}

export const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}


export default HomeInfo