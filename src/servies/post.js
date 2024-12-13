import apiClient from "./axios";
export const addProducts = (data) => apiClient.post('/api/addProduct', data);
export const addAdvertises = (data) => apiClient.post('/api/addAdvertises', data);
export const addShoppingCart = (value) => apiClient.post('/api/addShoppingCart', value);
