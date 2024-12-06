import apiClient from "./axios";
export const getProductions = ()=> apiClient.get('/api/products');
export const getAdvertises = ()=> apiClient.get('/api/advertises');