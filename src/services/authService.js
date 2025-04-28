import api from './api';

export const register = async (userData) => {
  const res = await api.post('/api/auth/register', userData);
  return res.data;
};

export const login = async (credentials) => {
  const res = await api.post('/api/auth/login', credentials);
  const { token } = res.data;
  localStorage.setItem('token', token);
  return res.data;
};

export const forgotPassword = async (email) => {
  const res = await api.post('/api/auth/forgot-password', { email });
  return res.data;
};

export const resetPassword = async (token, newPassword) => {
  const res = await api.post(`/api/auth/reset-password?token=${token}`, { password: newPassword });
  return res.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
