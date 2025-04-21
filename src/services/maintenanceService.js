import api from './api';

export const createRequest = async (requestData) => {
  const res = await api.post('https://backend-hms-2.onrender.com/api/maintenance/create', requestData);
  return res.data;
};



export const getAllRequests = async () => {
  const res = await api.get('https://backend-hms-2.onrender.com/api/maintenance/get');
  return res.data;
};

export const updateRequest = async (id, updateData) => {
  const res = await api.put(`https://backend-hms-2.onrender.com/api/maintenance/${id}`, updateData);
  return res.data;
};


export const getMyRequests = async () => {
    try {
      const res = await api.get('https://backend-hms-2.onrender.com/api/maintenance/my');
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  };
