
import api from './api';

export const getListProducts = (data) => {
  return api.get('/products/list-product', data);
};

export const searchProductByName = (data) => {
  return api.get('/products/search-product', data);
};

export const addProduct = (data) => {
  return api.post('/products/add-product', data);
}
export const updateProduct = (data) => {
  return api.put('/products/update-product', data);
};
export const deleteProduct = (id) => {
  return api.delete(`/products/delete-product/${id}`);
};


