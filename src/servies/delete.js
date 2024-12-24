import apiClient from "./axios";
export const deleteShoppingCart = async ({
  product_id,
  user_id
}) => await apiClient.delete('/api/deleteShoppingCart', {
  data: {
    product_id,
    user_id
  }
});
