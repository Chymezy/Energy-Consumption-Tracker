// src/components/Settings.jsx
import React, { useState } from 'react';
import '../styles/Settings.css';

const Settings = ({ onClose }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [energyBenchmark, setEnergyBenchmark] = useState('');
  const [dailyConsumption, setDailyConsumption] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [costPerKwh, setCostPerKwh] = useState('');
  const [availability, setAvailability] = useState('');

  const handleProfilePictureSubmit = (e) => {
    e.preventDefault();
    // Handle profile picture update logic
  };

  const handleEnergyBenchmarkSubmit = (e) => {
    e.preventDefault();
    // Handle energy benchmark update logic
  };

  const handleDailyConsumptionSubmit = (e) => {
    e.preventDefault();
    // Handle daily energy consumption update logic
  };

  const handleUserInfoSubmit = (e) => {
    e.preventDefault();
    // Handle user info update logic
  };

  const handlePictureChange = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="settings-modal">
      <div className="settings-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Settings</h2>
        
        <form onSubmit={handleProfilePictureSubmit}>
          <div className="form-group">
            <label>Profile Picture</label>
            <input type="file" accept="image/*" onChange={handlePictureChange} />
            {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture-preview" />}
            <button type="submit">Set Profile Picture</button>
          </div>
        </form>

        <form onSubmit={handleEnergyBenchmarkSubmit}>
          <div className="form-group">
            <label>Energy Benchmark</label>
            <input type="number" value={energyBenchmark} onChange={(e) => setEnergyBenchmark(e.target.value)} />
            <button type="submit">Set Energy Benchmark</button>
          </div>
        </form>

        <form onSubmit={handleDailyConsumptionSubmit}>
          <div className="form-group">
            <label>Daily Energy Consumption</label>
            <input type="number" value={dailyConsumption} onChange={(e) => setDailyConsumption(e.target.value)} />
            <button type="submit">Set Daily Consumption</button>
          </div>
        </form>

        <form onSubmit={handleUserInfoSubmit}>
          <div className="form-group">
            <label>City</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <label>Country</label>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
            <label>Electricity Cost per kWh</label>
            <input type="number" value={costPerKwh} onChange={(e) => setCostPerKwh(e.target.value)} />
            <label>Electricity Availability</label>
            <input type="text" value={availability} onChange={(e) => setAvailability(e.target.value)} />
            <button type="submit">Set User Info</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
