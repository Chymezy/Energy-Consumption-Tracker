import { login, register } from '../api';

// Authentication services

const loginService = async (username, password) => {
  const response = await login(username, password);
  return response.data;
};

const registerService = async (formData) => {
  const response = await register(formData);
  return response.data;
};
// export { registerService };

export { loginService, registerService };

