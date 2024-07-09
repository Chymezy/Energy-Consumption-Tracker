// src/services/profileService.js

import { fetchUserProfilePicture, uploadUserProfilePicture, fetchUserEnergyBenchmark, fetchUserInfo } from './api';

const getProfilePicture = async () => {
  try {
    const url = await fetchUserProfilePicture();
    return url;
  } catch (error) {
    console.error('Error getting profile picture:', error);
    throw error;
  }
};

const uploadProfilePicture = async (file) => {
  try {
    const response = await uploadUserProfilePicture(file);
    return response;
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    throw error;
  }
};

const getUserEnergyBenchmark = async () => {
  try {
    const benchmark = await fetchUserEnergyBenchmark();
    return benchmark;
  } catch (error) {
    console.error('Error getting energy benchmark:', error);
    throw error;
  }
};

const getUserInfo = async () => {
  try {
    const info = await fetchUserInfo();
    return info;
  } catch (error) {
    console.error('Error getting user info:', error);
    throw error;
  }
};

export { getProfilePicture, uploadProfilePicture, getUserEnergyBenchmark, getUserInfo };
