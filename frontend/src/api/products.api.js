import API from './axios';

export const getProducts = async (search = '') => {
  const res = await API.get('/products', { params: search ? { search } : {} });
  return res.data;
};

export const createProduct = async (data) => {
  const res = await API.post('/products', data);
  return res.data;
};

export const updateProduct = async (id, data) => {
  const res = await API.put(`/products/${id}`, data);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await API.delete(`/products/${id}`);
  return res.data;
};
