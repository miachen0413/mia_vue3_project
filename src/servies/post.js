import apiClient from "./axios";
export const Login = (value) => apiClient.post('/api/login', value);
export const Logout = () => apiClient.post('/api/logout');
export const addProducts = (data) => apiClient.post('/api/addProduct', data);
export const addAdvertises = (data) => apiClient.post('/api/addAdvertises', data);
export const addShoppingCart = (value) => apiClient.post('/api/addShoppingCart', value);
