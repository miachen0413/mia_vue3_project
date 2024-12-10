import apiClient from "./axios";
export const addShoppingCart = (value) => apiClient.post('/api/shopping_cart', value);
