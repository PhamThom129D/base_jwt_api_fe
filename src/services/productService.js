

import api from '../api/api'; // Adjust the path if your api module is located elsewhere

export const getListProducts = () => {
  return api.get('/products/list-product');
};

export const searchProductByName = (data) => {
  return api.get('/products/search-product', { params: data });
};


export const addProduct = (data) => {
  return api.post('/products/add-product', data);
}
export const updateProduct = (id, data) => {
  return api.put(`/products/update-product/${id}`, data);
};

export const deleteProduct = (id) => {
  return api.delete(`/products/delete-product/${id}`);
};


