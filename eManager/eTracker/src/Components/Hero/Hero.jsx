import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/small.jpg'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>eManager trackes energy efficient for a better environment</h1>
        <p>Our tracker monitors both industrial and commercial energy usage efficiently</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
      </div>
      
    </div>
  );
};

export default Hero


// import React from 'react';
// import './Hero.css';
// import hero_bg from '../../assets/bg1.png';

// const Hero = () => {
//   return (
//     <div className="hero">
//       <img src={hero_bg} alt="Bulb" className="hero-image" />
//     </div>
//   );
// };

// export default Hero;


