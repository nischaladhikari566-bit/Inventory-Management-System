import API from './axios';

export const loginUser = async (credentials) => {
  const response = await API.post('/auth/login', credentials);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await API.post('/auth/register', data);
  return response.data;
};
