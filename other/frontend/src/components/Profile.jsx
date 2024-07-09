// src/components/Profile.jsx
import React, { useEffect, useState } from 'react';
import { getProfilePicture, uploadProfilePicture, getUserEnergyBenchmark, getUserInfo } from '../services/profileService';
import '../styles/Profile.css';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [energyBenchmark, setEnergyBenchmark] = useState('');
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const picture = await getProfilePicture();
        const benchmark = await getUserEnergyBenchmark();
        const info = await getUserInfo();

        setProfilePicture(picture);
        setEnergyBenchmark(benchmark);
        setUserInfo(info);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const response = await uploadProfilePicture(file);
        console.log(response.message); // handle response message if needed
        const picture = await getProfilePicture();
        setProfilePicture(picture);
      } catch (error) {
        console.error('Error uploading profile picture:', error);
      }
    }
  };

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <div className="profile-info">
        <p><strong>Full Name:</strong> {userInfo.fullName}</p>
        <p><strong>Username:</strong> {userInfo.username}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>City:</strong> {userInfo.city}</p>
        <p><strong>Country:</strong> {userInfo.country}</p>
        <p><strong>Electricity Cost:</strong> {userInfo.electricityCost}</p>
        <p><strong>Fuel Cost:</strong> {userInfo.fuelCost}</p>
        <p><strong>Energy Benchmark:</strong> {energyBenchmark}</p>
      </div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default Profile;
