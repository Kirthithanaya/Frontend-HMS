import axios from 'axios';

const API = 'https://backend-hms-2.onrender.com/api/users'; // Update to your backend route

export const registerUser = (data) => axios.post(`${API}/register`, data);
export const getAllUsers = () => axios.get(`${API/get}`);
export const updateUserRole = (id, role) => axios.put(`${API}/role/${id}`, { role });
