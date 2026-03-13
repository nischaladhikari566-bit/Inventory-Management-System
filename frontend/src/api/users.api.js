import API from './axios';

export const getUsers = async () => {
  const res = await API.get('/users');
  return res.data;
};

export const toggleUserActive = async (id) => {
  const res = await API.patch(`/users/${id}/toggle`);
  return res.data;
};
