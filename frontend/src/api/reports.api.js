import API from './axios';

export const getDashboardStats = async () => {
  const res = await API.get('/reports/dashboard');
  return res.data;
};
