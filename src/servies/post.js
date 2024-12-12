import apiClient from "./axios";
export const addShoppingCart = (value) => apiClient.post('/api/shopping_cart', value);
export const addProducts = (data) => apiClient.post('/api/addProduct', data);
export const addAdvertisess = (data) => apiClient.post('/api/addAdvertises', data);
