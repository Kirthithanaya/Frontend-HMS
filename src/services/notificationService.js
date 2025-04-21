import axios from 'axios';

const API_URL = 'https://backend-hms-2.onrender.com/api/notifications';

export const sendNotification = async (notificationData) => {
  return axios.post(`${API_URL}/send`, notificationData);
};

export const getAllNotifications = async () => {
  return axios.get(`${API_URL}`);
};
