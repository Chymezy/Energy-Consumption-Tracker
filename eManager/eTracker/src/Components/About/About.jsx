import React from 'react'
import './About.css'
import about_img from '../../assets/small.jpg'
// import play_icon from '../../assets/bulb.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left"></div>
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon'/> */}
        <div className="about-right">
            <head>ABOUT eManager</head>
            <p>With a focus on innovation, green environment and personalized energy savings, Our eManager ensures that fellows who wants to monitor their energy consumption pattern and saving cost as well as reduce carbon footprint to the environment
                achieves the intended goals.</p>
            <p>Whether you what to save the planet earth, saving huge energy wastages
                with corresponding cost saving, eManager have you covered.</p>
        </div>

      
    </div>
  )
}

export default About
