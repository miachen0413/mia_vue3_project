import axios from 'axios';
import {
  getCookie
} from '@/utils/common.js'
// 創建 Axios 實例
const apiClient = axios.create({
  // baseURL: '/api, // API 基本路徑
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 5000, // 請求超時時間
});

// 添加請求攔截器 (可選)
apiClient.interceptors.request.use(
  (config) => {
    // 例如：在請求中加入授權 Token
    const token = getCookie('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 添加回應攔截器 (可選)
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error.response || error.message);
  }
);

export default apiClient;
