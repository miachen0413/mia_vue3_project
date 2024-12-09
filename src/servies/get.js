import apiClient from "./axios";
export const getProductions = (page) => apiClient.get(`/api/products?_page=${page}`);
export const getAdvertises = () => apiClient.get('/api/advertises');
