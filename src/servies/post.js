import apiClient from "./axios";
export const Login = async (value) => await apiClient.post('/api/login', value);
export const Logout = async () => await apiClient.post('/api/logout');
export const addProducts = async (data) => await apiClient.post('/api/addProduct', data);
export const addAdvertises = async (data) => await apiClient.post('/api/addAdvertises', data);
export const addShoppingCart = async (value) => await apiClient.post('/api/addShoppingCart', value);
