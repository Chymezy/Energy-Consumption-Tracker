import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div style={{ paddingBottom: '60px' }}> {/* Add padding to avoid footer overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Features from './components/Features';
// import RegistrationForm from './components/RegistrationForm';
// import LoginForm from './components/LoginForm';
// import EnergyRecordForm from './components/EnergyRecordForm';
// import EnergyRecordList from './components/EnergyRecordList';
// import EnergyRecordUpdateForm from './components/EnergyRecordUpdateForm';
// import EnergyConsumptionChart from './components/EnergyConsumptionChart';
// import EnergyInsights from './components/EnergyInsights';
// import Profile from './components/Profile';
// import Settings from './components/Settings';
// import UploadProfilePicture from './components/UploadProfilePicture';
// import DateRangeSelector from './components/DateRangeSelector';
// import TimePeriodSelector from './components/TimePeriodSelector';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/features" element={<Features />} />
//           <Route path="/register" element={<RegistrationForm />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/add-energy-data" element={<EnergyRecordForm />} />
//           <Route path="/energy-records" element={<EnergyRecordList />} />
//           <Route path="/update-energy-data" element={<EnergyRecordUpdateForm />} />
//           <Route path="/view-trends" element={<EnergyConsumptionChart />} />
//           <Route path="/average-insights" element={<EnergyInsights />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/settings" element={<Settings />} />
//           <Route path="/upload-profile-picture" element={<UploadProfilePicture />} />
//           <Route path="/select-date-range" element={<DateRangeSelector />} />
//           <Route path="/select-time-period" element={<TimePeriodSelector />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
