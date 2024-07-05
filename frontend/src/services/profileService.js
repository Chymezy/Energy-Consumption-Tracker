// src/services/profileService.js

import axios from 'axios';

const API_URL = '/api/profile';

const getProfile = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching profile');
  }
};

const updateProfile = async (profile) => {
  try {
    const response = await axios.put(API_URL, profile);
    return response.data;
  } catch (error) {
    throw new Error('Error updating profile');
  }
};

export default {
  getProfile,
  updateProfile,
};
