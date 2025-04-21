import axios from 'axios';

const API = "https://backend-hms-2.onrender.com/api/email";

export const sendTestEmail = async (email) => {
  return axios.post(`${API}/send-email`, { email });
};

export const processPayment = async (paymentData) => {
  return axios.post(`${API}/payment`, paymentData);
};

export const triggerBackup = async () => {
  return axios.post(`${API}/backup`);
};
