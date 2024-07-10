import React from 'react'
import './Features.css'
import feature_1 from '../../assets/images/feature-blk1.jpg'
import energy_record from '../../assets/images/energy_record.jpg'
import savings from '../../assets/images/energy_savings.jpg'

const Features = () => {
  return (
    <div className='features'>
        <div className='feature'>
            <img src={feature_1} alt='' />
        </div>
        <div className='feature'>
            <img src={energy_record} alt='' />
        </div>
        <div className='feature'>
            <img src={savings} alt='' />
        </div>
    </div>
  )
}

export default Features
