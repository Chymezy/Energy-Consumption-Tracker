// // src/components/LandingPage.jsx

// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import '../styles/LandingPage.css';
// import videoUrl from '../assets/energy-crisis.mp4';

// const LandingPage = ({ onLearnMore }) => {
//   return (
//     <div className="landing-page">
//       <Navbar isLoggedIn={false} onLogout={() => {}} />
//       <video src={videoUrl} className="landing-video" autoPlay muted loop playsInline></video>
//       <div className="landing-page-content">
//         <h1>Energy Manager</h1>
//         <p className="tagline">Your trusted partner in tracking energy consumption efficiently.</p>
//         <button className="learn-more-button" onClick={onLearnMore}>Learn More</button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;


// src/components/LandingPage.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/LandingPage.css';

const LandingPage = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="landing-page">
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/assets/energy-crisis.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          <h1>Energy Manager</h1>
          <p>Achieving energy efficiency through intelligent tracking</p>
          {!isLoggedIn && <a href="/login" className="login-button">Login</a>}
        </div>
      </div>
      <section className="landing-content">
        <div className="section" id="features">
          <h2>Features</h2>
          <p>Details about the features of Energy Manager...</p>
        </div>
        <div className="section" id="about">
          <h2>About</h2>
          <p>About Energy Manager...</p>
        </div>
        <div className="section" id="contact">
          <h2>Contact</h2>
          <p>Contact information...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
