import apiClient from "./axios";
export const getAllProducts = (page, limit) => apiClient.get(`/api/products?page=${page}${limit ? '&limit='+limit : ''}`);
export const getProducts = (id) => apiClient.get(`/api/products/${id}`);
export const getAdvertises = () => apiClient.get('/api/advertises');
export const getShoppingCart = (id) => apiClient.get(`/api/shoppingCart?user_id=${id}`);
