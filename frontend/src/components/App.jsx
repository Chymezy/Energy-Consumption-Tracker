// // src/components/App.jsx

// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Home from './Home';
// import LandingPage from './LandingPage';
// import Footer from './Footer';
// import '../styles/App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLandingPage, setShowLandingPage] = useState(true);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem('isLoggedIn', 'true');
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('isLoggedIn');
//   };

//   const handleLearnMore = () => {
//     setShowLandingPage(false);
//   };

//   React.useEffect(() => {
//     const loggedInStatus = localStorage.getItem('isLoggedIn');
//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <div className="App">
//       {showLandingPage ? (
//         <>
//           <LandingPage onLearnMore={handleLearnMore} />
//         </>
//       ) : (
//         <>
//           <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//           <Home />
//           {!isLoggedIn && <button onClick={handleLogin}>Login</button>}
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Footer from './Footer';
import '../styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  React.useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
