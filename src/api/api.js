// service/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Cấu hình URL mặc định
  timeout: 5000,                    // Nếu quá 5s mà chưa phản hồi thì lỗi
  headers: {
    // 'Content-Type': 'application/json', //Gửi dữ liệu JSON (Content-Type)
    // 'Authorization': 'Bearer token...', // thêm nếu có token
    // 'Content-Type': 'multipart/form-data', //Gửi Form Data (khi upload file)
  }
});

// Thêm interceptor để log hoặc xử lý lỗi/tự động thêm token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  res => res,
  err => {
    console.error('API error:', err.message);
    return Promise.reject(err);
  }
);

export default api;
