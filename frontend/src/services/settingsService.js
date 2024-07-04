// src/services/settingsService.js

import axios from 'axios';

const API_URL = '/api/settings';

const getSettings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching settings');
  }
};

const updateSettings = async (settings) => {
  try {
    const response = await axios.put(API_URL, settings);
    return response.data;
  } catch (error) {
    throw new Error('Error updating settings');
  }
};

export default {
  getSettings,
  updateSettings,
};
