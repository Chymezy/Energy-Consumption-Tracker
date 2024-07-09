// src/services/api.js
export const fetchUserProfilePicture = async () => {
    // Mock API call
    return 'https://via.placeholder.com/150';
  };
  
  export const fetchUserEnergyBenchmark = async () => {
    // Mock API call
    return '100 kWh/day';
  };
  
  export const fetchUserInfo = async () => {
    // Mock API call
    return {
      fullName: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      city: 'San Francisco',
      country: 'USA',
      electricityCost: '$0.12/kWh',
      fuelCost: '$3.50/gallon',
    };
  };
  