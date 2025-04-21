import api from './api'; // axios instance

// Get all residents
export const getAllResidents = async () => {
  const response = await api.get('https://backend-hms-2.onrender.com/api/resident/get');
  return response.data;
};

// Get a single resident by ID
export const getResidentById = async (residentId) => {
  const response = await api.get(`https://backend-hms-2.onrender.com/api/resident/${residentId}`);
  return response.data;
};

// Create a new resident
export const createResident = async (residentData) => {
  const response = await api.post('https://backend-hms-2.onrender.com/api/resident/create', residentData);
  return response.data;
};

// Update resident details
export const updateResident = async (residentId, updatedData) => {
  const response = await api.put(`https://backend-hms-2.onrender.com/api/resident/${residentId}`, updatedData);
  return response.data;
};

// Delete a resident
export const deleteResident = async (residentId) => {
  const response = await api.delete(`https://backend-hms-2.onrender.com/api/resident/${residentId}`);
  return response.data;
};

