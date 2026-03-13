import API from './axios';

export const getMovements = async () => {
  const res = await API.get('/stock');
  return res.data;
};

export const recordMovement = async (data) => {
  const res = await API.post('/stock', data);
  return res.data;
};
