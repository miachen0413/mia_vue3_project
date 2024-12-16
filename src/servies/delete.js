import apiClient from "./axios";
export const deleteShoppingCart = ({id}) => apiClient.delete('/api/deleteShoppingCart/'+ id);