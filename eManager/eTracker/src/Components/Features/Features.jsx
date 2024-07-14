import React from 'react'
import './Features.css'
import feature_1 from '../../assets/images/feature-blk1.jpg'
import energy_record from '../../assets/images/energy_record.jpg'
import savings from '../../assets/images/energy_savings.jpg'
import f1_icon from '../../assets/images/efficiency.svg'
import f2_icon from '../../assets/images/electricity.svg'
import f3_icon from '../../assets/images/together.png'


const Features = () => {
  return (
    <div className='features'>
        <div className='feature'>
            <img src={feature_1} alt='' />
            <div className="caption">
                <img src={f1_icon} alt="" />
                <p>Analyze Energy</p>
            </div>
        </div>
        <div className='feature'>
            <img src={energy_record} alt='' />
            <div className="caption">
                <img src={f2_icon} alt="" />
                <p>Tracker Energy</p>
            </div>
        </div>
        <div className='feature'>
            <img src={savings} alt='' />
            <div className="caption">
                <img src={f3_icon} alt="" />
                <p>Save Energy Cost</p>
            </div>
        </div>
    </div>
  )
}

export default Features
