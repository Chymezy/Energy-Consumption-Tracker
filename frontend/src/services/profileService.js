import { updateUserProfile, getUserProfile } from '../api';

const profileService = {
  getProfile: async () => {
    const response = await getUserProfile();
    return response.data;
  },
  updateProfile: async (profile) => {
    const response = await updateUserProfile(profile, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },
};

export default profileService;
