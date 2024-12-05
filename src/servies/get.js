import apiClient from "./axios";
export const getProductions = ()=> apiClient.get('/api/products');