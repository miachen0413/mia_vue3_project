import apiClient from "./axios";
export const getAllProducts = (page) => apiClient.get(`/api/products?_page=${page}`);
export const getProducts = (id) => apiClient.get(`/api/products/${id}`);
export const getAdvertises = () => apiClient.get('/api/advertises');
export const getShoppingCart = () => apiClient.get('/api/shoppingCart');
