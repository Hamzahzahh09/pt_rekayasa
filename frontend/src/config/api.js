// API Configuration
export const API_BASE_URL = 'https://pt-rekayasa-api.vercel.app';

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  NEWS: `${API_BASE_URL}/api/news`,
  NEWS_BY_ID: (id) => `${API_BASE_URL}/api/news/${id}`,
};
