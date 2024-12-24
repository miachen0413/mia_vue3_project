import apiClient from "./axios";
export const getAllProducts = async (page, search, limit) => await apiClient.get(`/api/products?page=${page}${limit ? '&limit='+limit : ''}${search !=='' ? '&search='+search : ''}`);
export const getProducts = async (id) => await apiClient.get(`/api/products/${id}`);
export const getAdvertises = async () => await apiClient.get('/api/advertises');
export const getShoppingCart = async (id) => await apiClient.get(`/api/shoppingCart?user_id=${id}`);
export const searchProduct = async (id) => await apiClient.get(`/api/searchProduct?search=${id}`);
